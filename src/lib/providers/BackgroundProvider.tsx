import { createContext, useContext, useState } from "react";

type BackgroundContextData = {
    background: string | undefined;
    setBackground: (background: string) => void;
    resetBackground: () => void;
};

const BackgroundContext = createContext<BackgroundContextData>({
    background: undefined,
    setBackground: () => {},
    resetBackground: () => {}
} as any);

const BackgroundProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    const [background, setBackground] = useState<string | undefined>();

    const setBackgroundRootProxy = (background: string | undefined) => {
        //const root = document.getElementById('root');
        //if (root) root.style.background = background ?? "";
        setBackground(background);
    };

    const resetBackground = () => setBackgroundRootProxy(undefined);

    return (
        <BackgroundContext.Provider value={{ background, setBackground: setBackgroundRootProxy, resetBackground }}>
            {children}
        </BackgroundContext.Provider>
    );
}

const useBackground = () => useContext(BackgroundContext);

export { BackgroundProvider, useBackground };