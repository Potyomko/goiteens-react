import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component{
    componentDidMount(){
        window.addEventListener('keydown', this.handlerKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlerKeyDown)
    }
    handlerKeyDown = (e) => {
            if (e.code === 'Escape') {
                this.props.onClose();
            }
    }
    handlerBackdropClick = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            this.props.onClose()
        }
    }
    render() {
        return (
            <ModalBackdrop onClick={this.handlerBackdropClick}>
                <ModalContent>
                    <h1>HI!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minus odit aperiam nostrum suscipit, modi ab nemo adipisci facilis saepe recusandae neque voluptates repudiandae quam, repellendus distinctio quas! Repellat, cumque atque accusantium numquam et voluptates quam amet, ducimus ad unde quibusdam vel voluptatibus cum sequi soluta veritatis culpa porro iure.</p>
                    <button type="button"onClick={this.props.onClose}>Close</button>
                </ModalContent>
            </ModalBackdrop>
        )
    }
}