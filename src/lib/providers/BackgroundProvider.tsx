import { createContext, useContext, useState } from "react";

type BackgroundContextData = {
    background: string;
    setBackground: (background: string) => void;
};

const BackgroundContext = createContext<BackgroundContextData>({
    background: "",
    setBackground: () => {}
} as any);

const BackgroundProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    const [background, setBackground] = useState<string>("");

    const setBackgroundRootProxy = (background: string) => {
        const root = document.getElementById('root');
        if (root) root.style.background = background;
        setBackground(background);
        console.log(background)
    };

    return (
        <BackgroundContext.Provider value={{ background, setBackground: setBackgroundRootProxy }}>
            {children}
        </BackgroundContext.Provider>
    );
}

const useBackground = () => useContext(BackgroundContext);

export { BackgroundProvider, useBackground };