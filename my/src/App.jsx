import { GlobalStyle } from './Global.styled';
import stickers from './stickers.json';
import { StickersList } from './components/Stickers/StickersList';
import { Component } from 'react';
    
export class App extends Component{
    state = {
        stickerLable: null
    }
    labelHandler = label => {
        this.setState({stickerLable:label})
    }
    render() {
        const { stickerLable } = this.state;
        return (
            <>
                {stickerLable && <h1>{stickerLable}</h1> }
                <StickersList
                stickers={stickers}
                onGetLabel={this.labelHandler}
                />
                <GlobalStyle />
            </>
        )
    }
}