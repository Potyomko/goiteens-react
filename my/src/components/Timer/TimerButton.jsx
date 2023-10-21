
export const TimerButton = ({onToggle, textButton})=>{
return(
    <button type="button" onClick={onToggle}>{textButton ?  'stop' :'start' }</button>
    
)
}