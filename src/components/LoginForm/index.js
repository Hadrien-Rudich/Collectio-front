import React from "react";
import { useDispatch } from "react-redux";
import { FiLogIn } from 'react-icons/fi';
import "./style.scss"

function LoginForm() {
    const dispatch = useDispatch();

    return (
        <div className="modal" id="modal">
            <input className="c-checkbox" type="checkbox" id="start"/>
            <input className="c-checkbox" type="checkbox" id="progress2"/>
            <input className="c-checkbox" type="checkbox" id="finish"/>

            <div class="c-formContainer">
            <div class="c-welcome">Welcome aboard!</div>
            <form class="c-form" action="">
                <div class="c-form__group">
                <label class="c-form__label" for="femail">
                    <input
                        type="email"
                        id="femail"
                        class="c-form__input"
                        placeholder=" "
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        required/>

                <label class="c-form__next" for="progress2" role="button">
                    <span class="c-form__nextIcon"></span>
                </label>

                <span class="c-form__groupLabel">What's your email?</span>
                <b class="c-form__border"></b>
                </label>
                </div>

                <div class="c-form__group">
                <label class="c-form__label" for="fpass">
                                <input
                                    type="password"
                                    id="fpass"
                                    class="c-form__input"
                                    placeholder=" "
                                    required/>

                                <label class="c-form__next" for="finish" role="button">
                                    <span class="c-form__nextIcon"></span>
                                </label>

                <span class="c-form__groupLabel">And now, your password:</span>
                <b class="c-form__border"></b>
                </label>
                </div>

                <label class="c-form__toggle" for="start"><span><FiLogIn /></span>Login</label>
            </form>
            </div>
        </div>
    );
}

export default LoginForm;