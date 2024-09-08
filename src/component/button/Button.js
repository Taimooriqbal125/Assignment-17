import "./Button.css"

function Button(props,{style}){
    return(
        <>
        <div style={{paddingBlockStart:7}}><button id = "btn1">{style} {props.title}</button></div>
        
        
        </>
    )
}


export default Button;