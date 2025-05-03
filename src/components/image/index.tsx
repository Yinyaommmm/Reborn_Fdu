import {
    CSSProperties,
    FC,
    HTMLProps,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface ImageProps extends HTMLProps<HTMLDivElement> {
    src: string;
    alt?: string;
    children?: ReactNode;
    adjustWidth?: boolean;
    adjustHeight?: boolean;
    onLoad?: (event: SyntheticEvent<HTMLImageElement>) => void;
    onSizeChange?: (width: number, height: number) => void;
}

const Image: FC<ImageProps> = (props) => {
    const {
        src,
        alt,
        children,
        adjustWidth = true,
        adjustHeight = false,
        onLoad,
        onSizeChange,
        ...rest
    } = props;
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
        setIsImageLoaded(true);
        const img = event.currentTarget;
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        // 触发外部回调
        if (onSizeChange) {
            onSizeChange(width, height);
        }

        if (onLoad) onLoad(event);
    };

    useEffect(() => {
        const imageObserver = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (imageRef.current) {
                    if (entry.isIntersecting) {
                        const origin =
                            window.location.origin +
                            (src.startsWith("/") ? "" : "/");
                        imageRef.current.src = src.startsWith("data")
                            ? src
                            : origin + src;
                    } else if (!imageRef.current.complete) {
                        imageRef.current.src = "";
                    }
                }
            },
            { threshold: 0.1 },
        );

        const wrapper = imageWrapperRef.current;
        if (wrapper) {
            imageObserver.observe(wrapper);
        }

        return () => {
            if (wrapper) {
                imageObserver.unobserve(wrapper);
            }
            if (imageRef.current && !imageRef.current.complete) {
                imageRef.current.src = "";
            }
        };
    }, [src]);

    const wrapperStyle: CSSProperties = {
        width: adjustWidth ? "100%" : "auto",
        height: adjustHeight ? "100%" : "auto",
        position: "relative",
    };

    return (
        <div ref={imageWrapperRef} {...rest} style={wrapperStyle}>
            <div
                className={twMerge(
                    "w-full aspect-square bg-gray-100",
                    isImageLoaded ? "hidden" : "block",
                )}
                style={wrapperStyle}
            >
                <div className="w-full h-full bg-gray-300 animate-pulse"></div>
            </div>
            <img
                ref={imageRef}
                alt={alt}
                onLoad={handleImageLoad}
                className={twMerge(
                    "w-full aspect-square object-cover",
                    isImageLoaded ? "block" : "hidden",
                )}
                style={{
                    transition: "opacity 0.3s ease-in-out",
                    ...wrapperStyle,
                }}
            />
            {children}
        </div>
    );
};

Image.displayName = "Image";

export default Image;
