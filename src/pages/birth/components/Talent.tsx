import { FC } from "react";

import { IconArrowButton } from "@/assets";
import Image from "@/components/image";
import { useFastClick } from "@/hooks/useFastClick";

interface TalentProps {
    src: string;
    value: number;
    title: string;
    onAdd: () => void;
    onMinus: () => void;
}

export const Talent: FC<TalentProps> = (props) => {
    const { src, value, title, onAdd, onMinus } = props;
    const { onClick: onClickLeft, onTouchEnd: onTouchEndLeft } =
        useFastClick(onMinus);
    const { onClick: onClickRight, onTouchEnd: onTouchEndRight } =
        useFastClick(onAdd);

    return (
        <div className="relative flex-1 flex gap-3 h-full">
            <div className="relative h-full aspect-square">
                <div className="absolute left-0 top-0 h-full aspect-square bg-[#F6F6F2] rotate-[6deg]"></div>
                <Image
                    className="relative h-full aspect-square"
                    src={src}
                    adjustWidth={false}
                    adjustHeight
                    scale={0.8}
                />
                <div className="absolute -top-[0%] left-[0%] border-decorate border-decorate-border w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div>{title}</div>
                <div className="flex items-center gap-2">
                    <IconArrowButton
                        className="text-[#7897B5] text-xl"
                        onClick={onClickLeft}
                        onTouchEnd={onTouchEndLeft}
                    />
                    {value}
                    <IconArrowButton
                        className="text-[#C6796C] text-xl -scale-x-100"
                        onClick={onClickRight}
                        onTouchEnd={onTouchEndRight}
                    />
                </div>
            </div>
        </div>
    );
};
