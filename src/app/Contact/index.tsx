import Button from "@/components/Button";
import Page from "@/components/Page";

const Component = () => {
    return (
        <Page className="d-flex align-items-center justify-content-center flex-column w-100 gap-2">
                <h2>send us your suggestions</h2>
                <form
                    id="contact-form"
                    className="d-flex p-4 rounded-2 flex-column gap-3 cel-shadow justify-content-center align-items-center"
                    action="https://www.w3schools.com/action_page.php"
                    style={{
                        width: '40%'
                    }}
                >
                    <div className="input-group">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control cel-shadow"
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control cel-shadow"
                            placeholder="E-mail"
                            aria-label="E-mail"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            id="suggestion"
                            name="suggestion"
                            placeholder="Suggestion"
                            className="form-control cel-shadow"
                            aria-label="Suggestion"
                            rows={5}
                            style={{
                                resize: 'none'
                            }}
                        />
                    </div>
                    <Button
                        type='submit'
                        form="contact-form"
                        className="w-50"
                        style={{
                            background: 'var(--tertiary-color)'
                        }}
                    >
                        Send!
                    </Button>
                </form>
        </Page>
    );
}

export default Component;