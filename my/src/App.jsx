import { Component } from 'react';
import { GlobalStyle } from './Global.styled';
import { Form } from './components/Form/Form';
// import stickers from './stickers.json';
// import { StickersList } from './components/Stickers/StickersList';
// import { StickerTitle } from './components/Stickers/Stickers.styled';
    
export class App extends Component{
    state = {
        formData: null
    }
    getFormData = (data) => {
        console.log(data);
        this.setState({formData: data})
    }
    render() {
        return (
            <>
                <Form onChange={this.getFormData} />
                <GlobalStyle />
            </>
        )
    }
    
    }
    // state = {
    //     stickerLable: null
    // }
    // labelHandler = label => {
    //     this.setState({stickerLable:label})
    // }
    // render() {
    //     const { stickerLable } = this.state;
    //     return (
    //         <>
    //             {stickerLable && <StickerTitle>{stickerLable}</StickerTitle> }
    //             <StickersList
    //             stickers={stickers}
    //             onGetLabel={this.labelHandler}
    //             />