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
    onSizeChange?: (
        width: number,
        height: number,
        documentWidth: number,
        documentHeight: number,
    ) => void;
    square?: boolean;
    scale?: number;
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
        square = true,
        scale = 1,
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
        if (onSizeChange && imageRef.current) {
            onSizeChange(
                width,
                height,
                imageRef.current.clientWidth,
                imageRef.current.clientHeight,
            );
        }

        if (onLoad) onLoad(event);
    };

    useEffect(() => {
        if (imageRef.current !== null) {
            const origin =
                window.location.origin + (src.startsWith("/") ? "" : "/");
            imageRef.current.src =
                src.startsWith("data") || src.startsWith("http")
                    ? src
                    : origin + src;
        }
    }, [src]);

    const wrapperStyle: CSSProperties = {
        width: adjustWidth ? "100%" : "auto",
        height: adjustHeight ? "100%" : "auto",
        // position: "relative",
    };

    return (
        <div ref={imageWrapperRef} {...rest} style={wrapperStyle}>
            <div
                className={twMerge(
                    "w-full bg-gray-100",
                    square && "aspect-square",
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
                    "w-full object-cover pointer-events-none",
                    square && "aspect-square",
                    isImageLoaded ? "block" : "hidden",
                )}
                style={{
                    transition: "opacity 0.3s ease-in-out",
                    ...wrapperStyle,
                    scale,
                }}
            />
            {children}
        </div>
    );
};

Image.displayName = "Image";

export default Image;
