import s from '../ColorPicker/ColorPicker.module.css'

export const Container = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    )
}