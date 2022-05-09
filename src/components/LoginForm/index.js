import React from "react";
import { useDispatch } from "react-redux";
import { toggleLoginModal } from "../../actions/loginModal";
import "./style.scss"

function LoginForm() {
    const dispatch = useDispatch();

    return (
        <div className="modal" id="modal">
            <h2>Modal Window</h2>
            <div className="content"></div>
            <div className="actions">
                <button className="toggle-button" onClick={() => dispatch(toggleLoginModal())}>OK</button>
            </div>
        </div>
    );
}

export default LoginForm;