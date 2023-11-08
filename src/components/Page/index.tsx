import classes from "@/lib/classes";
import { motion } from "framer-motion"

type PageProps = {
    className?: string;
} & React.PropsWithChildren;


const Component: React.FC<PageProps> = (props) => {
    const { children, className } = props;

    return (
        <motion.div
            className={classes('w-100 h-100 d-flex', className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            {children}
        </motion.div>
    );
}

export default Component;