// import { Header } from "./Header/Header"
// import { Footer } from "./Footer/Footer"
// import painting from './painting.json'
// import { GalleryList } from './components/GalleryItem/Gallery'
// import { Container } from './components/GalleryItem/Container'
// import { Recipe } from './Recipe/Recipe'
// import recipe from './recipies.json'
import ColorPicker  from './components/ColorPicker/ColorPicker';
import MyColorPicker from './components/ColorPicker/ColorPickerData';
import { Container } from './components/Container/Container';

    
export const App = () => {
    return (
        <Container>
            <ColorPicker options = {MyColorPicker}/>
        </Container>    
  )
}