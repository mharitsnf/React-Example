import "bulma/css/bulma.css"
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body has-background-light">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage