import React from "react";

const HOCButton = (ButtonCmponent,params) =>{
    return (props) =>{

            const onClick = ()=>{
                props.onClick()
                console.log(props.text)
                console.log(params.tex)
            }
    
    return <ButtonCmponent {...props} onClick={onClick}/>

    }
}

export default HOCButton