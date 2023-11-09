import { motion } from "framer-motion"

type ProfileCardProps = {
    name: string;
    description: string;
    src: string;
};

const Component: React.FC<ProfileCardProps> = (props) => {
    const { name, description, src } = props;

    return (
        <motion.div
            className="cel-shadow rounded-3 gap-4 d-flex flex-column justify-content-center align-items-center p-4"
            style={{
                backdropFilter: 'blur(5px)',
                minHeight: '20rem',
                width: '15rem',
                containerType: 'inline-size'
            }}
        >
            <img
                src={src}
                alt="Profile Picture"
                className="rounded-circle cel-shadow"
                style={{
                    aspectRatio: 1,
                    height: '70cwq',
                    width: '70cqw',
                }}
            />
            <h5 className="mb-0 text-capitalize" >{name}</h5>
            <p className="mb-0 fs-6 text-center">{description}</p>
        </motion.div>
    )
}

export default Component;