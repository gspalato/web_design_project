import { createContext, useContext, useState } from "react";

const MainBackground = "var(--background)";

type BackgroundContextData = {
    background: string;
    setBackground: (background: string) => void;
    resetBackground: () => void;
};

const BackgroundContext = createContext<BackgroundContextData>({
    background: MainBackground,
    setBackground: () => {},
    resetBackground: () => {}
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

    const resetBackground = () => setBackgroundRootProxy(MainBackground);

    return (
        <BackgroundContext.Provider value={{ background, setBackground: setBackgroundRootProxy, resetBackground }}>
            {children}
        </BackgroundContext.Provider>
    );
}

const useBackground = () => useContext(BackgroundContext);

export { BackgroundProvider, useBackground };