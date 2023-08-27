// import { Header } from "./Header/Header"
// import { Footer } from "./Footer/Footer"
// import painting from './painting.json'
// import { GalleryList } from './components/GalleryItem/Gallery'
// import { Container } from './components/GalleryItem/Container'
// import { Recipe } from './Recipe/Recipe'
// import recipe from './recipies.json'
// import ColorPicker  from './components/ColorPicker/ColorPicker';
// import MyColorPicker from './components/ColorPicker/ColorPickerData';
// import { Container } from './components/Container/Container';
// import { Counter } from "./components/Counter/Counter";
import { GlobalStyle } from './Global.styled';
// import { DropDown } from "./components/DropDown/DropDown";
// import { ColorChanger } from './components/ColorChanger/ColorChanger';
// import { ColorPicker } from './components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList/TodoList';
    
export const App = () => {
    return (
        <>
            <TodoList/>
            
            <GlobalStyle/>
        </>     
  )
}
// {/* <Container>
//                 <ColorPicker options = {MyColorPicker}/>
//             </Container> */}