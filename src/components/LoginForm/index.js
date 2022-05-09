import React from "react";
import "./style.scss"

export default class LoginForm extends React.Component {
    onClose = e => {
        this.props.show = false;
      };

    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div class="modal" id="modal">
                <div class="content"></div>
                <div class="actions">
                    <button class="toggle-button" onClick={this.onClose}>OK</button>
                </div>
            </div>
            );
    }
}