import { MAIN_CAN_COLOR } from "@/constants";
import { MotionValue } from "framer-motion";
import { createContext, useContext, useState } from "react";

type CanContextData = {
    color: string | MotionValue<string>;
    setColor: (background: string | MotionValue<string>) => void;
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

const CanContext = createContext<CanContextData>({
    color: MAIN_CAN_COLOR,
    setColor: () => {},
    visible: true,
    setVisible: () => {}
} as any);

const CanProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    const [color, setColor] = useState<string | MotionValue<string>>(MAIN_CAN_COLOR);
    const [visible, setVisible] = useState<boolean>(true);

    return (
        <CanContext.Provider value={{ color, setColor, visible, setVisible }}>
            {children}
        </CanContext.Provider>
    );
}

const useCan = () => useContext(CanContext);

export { CanProvider, useCan };