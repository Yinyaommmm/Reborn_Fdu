import React, { createContext, useContext, useState } from "react";

type AudioContextType = {
    enabled: boolean;
    toggle: () => void;
};

const AudioContext = createContext<AudioContextType>({
    enabled: true,
    toggle: () => {},
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [enabled, setEnabled] = useState(true);
    const toggle = () => setEnabled((prev) => !prev);

    return (
        <AudioContext.Provider value={{ enabled, toggle }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudioEnabled = () => useContext(AudioContext);
