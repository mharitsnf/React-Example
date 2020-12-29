import "bulma/css/bulma.css"
import { useState } from "react";
import Axios from "axios"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            const body = {
                username: username,
                password: password
            }

            const response = await Axios.post(`${process.env.REACT_APP_BE_URL}/auth/token`, body, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })

            localStorage.setItem('token', response.data.data.token)

            alert('done')    
        } catch (error) {
            console.log(error)
            alert('error')
        }
    }

    return (
        <div className="box">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" value={username} onChange={ (event) => setUsername(event.target.value) }/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Text input" value={password} onChange={ (event) => setPassword(event.target.value) }/>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-text-centered">
                        <button className="button is-success" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default LoginForm