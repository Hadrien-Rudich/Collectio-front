import React, { useEffect } from "react"; 
import axios from "axios";
import { FiLogIn } from 'react-icons/fi';
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeLoginValue, changePasswordValue } from "../../actions/loginModal";


function LoginForm() {
    
    const dispatch = useDispatch()
    const email = useSelector((state) => state.loginModal.email)
    const password = useSelector((state) => state.loginModal.password)

    useEffect(() => {
        console.log(email);
    }, [email])
    useEffect(() => {
        console.log(password);
    }, [password])
    

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axios.post('https://collectio-app.herokuapp.com/api/login', {
                email,
                password
        })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="modal" id="modal">

            <input className="c-checkbox" type="checkbox" id="start"/>
            <input className="c-checkbox" type="checkbox" id="progress2"/>
            <input className="c-checkbox" type="checkbox" id="finish"/>

            <div className="c-formContainer">
            <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form__group">
                <label className="c-form__label" htmlFor="email">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => {
                            dispatch(changeLoginValue(event.target.value))
                        }}
                        className="c-form__input"
                        placeholder=" "
                        required/>

                <label className="c-form__next" htmlFor="progress2" role="button">
                    <span className="c-form__nextIcon"></span>
                </label>

                <span className="c-form__groupLabel">What's your email?</span>
                <b className="c-form__border"></b>
                </label>
                </div>

                <div className="c-form__group">
                <label className="c-form__label" htmlFor="password">
                                <input
                                    type="password"
                                    id="password"
                                    className="c-form__input"
                                    value={password}
                                    onChange={(event) => {
                                        dispatch(changePasswordValue(event.target.value))
                                    }}
                                    placeholder=" "
                                    required/>

                                <label className="c-form__next" htmlFor="finish" role="button">
                                    <button className="c-form__nextIcon" type="submit"></button>
                                </label>

                <span className="c-form__groupLabel">And now, your password:</span>
                <b className="c-form__border"></b>
                </label>
                </div>

                <label className="c-form__toggle" htmlFor="start"><span><FiLogIn /></span>Login</label>
            </form>
            </div>
        </div>
    );
}

export default LoginForm;