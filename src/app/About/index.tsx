import Button from "@/components/Button";
import Page from "@/components/Page";
import ProfileCard from "@/components/ProfileCard";
import { useCan } from "@/lib/providers/CanProvider";
import { useEffect } from "react";

const authors = [
    {
        image: 'https://cdn.discordapp.com/avatars/341377366079045632/daddca9bf34e319abe2c7618d9343739?size=1024',
        name: 'Gabriel Spalato',
        description: 'idealized B0NK! Soft Drinks and Lead Pipes™ in 1984.'
    },
    {
        image: '/img/enrico.jpg',
        name: 'Enrico',
        description: "fifa pro player (+3000h)\nalso my favorite flavor's the bean one."
    },
    {
        image: 'https://cdn.discordapp.com/avatars/416747928560992282/074acc330469182841ad88fc4e886383?size=1024',
        name: 'Luiz Zocca',
        description: 'number one fan of the C language.'
    },
    {
        image: '/img/kauan.jpg',
        name: 'Kauan Freitas',
        description: 'studying computer engineering at facens. broken brain.'
    },
    {
        image: '/img/engler.png',
        name: 'João Victor',
        description: 'the tilted towers bot.'
    }
]

const Component = () => {
    const { setVisible } = useCan();

    useEffect(() => {
        setVisible(false);

        return () => setVisible(true);
    }, []);

    return (
        <Page
            className="d-flex align-items-center flex-column pt-4"
            style={{ marginTop: '6rem' }}
            heightType="auto"
        >
            <div className="text-column w-75 pb-5 d-flex flex-column align-items-center">
                <h1 style={{ color: '#000' }}>About us</h1>
                <p>
                    We are a conceptual and very trustworthy soft drink brand created by the group of friends and students who name themselves "MISFITS".
                </p>
                <p>
                    The page you're looking at is a React single page application, using Vite as a build tool and Bootstrap as a CSS framework.
                    B0NK! uses Framer Motion for animations and Three.js for 3D rendering.
                </p>
                <p>
                    What? You don't know what React is? Silly you! React is a JS framework that allows you to create UIs by reusing components,
                    while introducing tools to mantain and update state. 
                </p>
           </div>
           <div className="w-75 d-flex flex-column justify-content-center align-items-center">
                <h1 style={{ color: '#000' }}>Authors</h1>
                <div className="w-75 mx-auto px-4 pb-4 d-flex justify-content-center flex-row flex-wrap gap-4">
                    {
                        authors.map((author, index) => (
                            <ProfileCard
                                key={index}
                                src={author.image}
                                name={author.name}
                                description={author.description}
                            />
                        ))
                    }
                </div>
           </div>
        </Page>
    );
}

export default Component;