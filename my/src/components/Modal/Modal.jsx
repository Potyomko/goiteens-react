import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component{
    componentDidMount(){
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Esape') {
                this.props.onClose()
            }
        })
    }
    render() {
        return (
            <ModalBackdrop>
                <ModalContent>
                    <button type="button"onClick={this.props.onClose}>Close</button>
                </ModalContent>
            </ModalBackdrop>
        )
    }
}