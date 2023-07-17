// import { Header } from "./Header/Header"
// import { Footer } from "./Footer/Footer"
import painting from './painting.json'
import { GalleryItem } from './components/GalleryItem/Gallery'

const item = painting[0]

export const App = () => {
    return (
        <>
            <GalleryItem
                itemUrl={item.url}
                title={item.title}
                author={item.author.url}
                price={item.price}
                quantity={item.quantity}
                tag={item.author.tag}
            />
            
        </>
    )
}