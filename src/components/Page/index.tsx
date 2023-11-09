import classes from "@/lib/classes";
import { motion } from "framer-motion"
import { forwardRef } from "react";

type PageProps = {
    className?: string;
    style?: React.CSSProperties;
    heightType?: 'auto' | 'viewport';
    ref?: React.Ref<HTMLDivElement>;
} & React.PropsWithChildren;


const Component: React.FC<PageProps> = forwardRef((props, ref) => {
    const { children, className, heightType = 'viewport', style } = props;

    return (
        <motion.div
            ref={ref as any}
            className={classes('w-100 d-flex', heightType === 'viewport' && 'vh-100', className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={style}
        >
            {children}
        </motion.div>
    );
});

export default Component;