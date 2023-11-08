import Button from "@/components/Button";
import Page from "@/components/Page";

const Component = () => {
    return (
        <Page className="d-flex align-items-center justify-content-center flex-column">
            <div className="text-column w-75">
                <h1>About us</h1>
                <p>
                    We are a conceptual and fictitious soft drink brand created by the group of friends and students "MISFITS".
                </p>
                <p>
                    The page you're looking at is a React single page application, using Vite as a build tool and Bootstrap as a CSS framework.
                </p>
            </div>
        </Page>
    );
}

export default Component;