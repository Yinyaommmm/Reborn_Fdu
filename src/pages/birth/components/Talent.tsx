import { FC } from "react";

import Image from "@/components/image";

interface TalentProps {
    src: string;
    value: number;
    title: string;
    onChange: (value: number) => void;
}

export const Talent: FC<TalentProps> = (props) => {
    const { src, value, title, onChange } = props;
    return (
        <div className="relative flex-1 flex gap-2 h-full">
            <Image
                className="relative h-full aspect-square"
                src={src}
                adjustWidth={false}
                adjustHeight
            >
                <div className="absolute -top-[8%] left-[8%] border-decorate border-decorate-border w-full h-full" />
            </Image>
            <div className="flex-1 flex flex-col justify-between">
                <div>{title}</div>《 {value} 》
            </div>
        </div>
    );
};
