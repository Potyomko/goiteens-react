export function Buttons({onDecrement, onIncrement}) {
    return (
        <>
            <button type='button' onClick={onIncrement}>Збільшити на 1</button>
            <button type='button' onClick={onDecrement}>Зменшити на 1</button>
        </>
    )
}