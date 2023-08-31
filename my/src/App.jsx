import { GlobalStyle } from './Global.styled';
import stickers from './stickers.json';
import { StickersList } from './components/Stickers/StickersList';
import { Component } from 'react';
import { StickerTitle } from './components/Stickers/Stickers.styled';
    
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
                {stickerLable && <StickerTitle>{stickerLable}</StickerTitle> }
                <StickersList
                stickers={stickers}
                onGetLabel={this.labelHandler}
                />
                <GlobalStyle />
            </>
        )
    }
}