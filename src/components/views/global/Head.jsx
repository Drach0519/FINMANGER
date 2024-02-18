import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/styles.css";

import HOCButton from "../../comps/HOCHeaderButton";
import Button from "../../comps/Button";


const HOCButtonComponent = HOCButton(Button,{tex:"натиснута тестова кнопка"})

const {HeaderContainer, HeaderCSS} = css

const buttonCss ={
    display:'block',
    padding:'10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0f347',
    cursor: 'pointer',
    marginLeft: '10px',
}

const Head = ()=>{
    const navigate = useNavigate();
    const [inner, setInner] = useState(0);
    return(
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANGER</HeaderCSS.Logo>
                <HeaderCSS.MenoContainer>
                    <HOCButtonComponent text={"натиснута"} inner={inner} onClick={()=>setInner(prev=>prev+1)}></HOCButtonComponent>
                    <button onClick={()=>navigate('/main')} style={buttonCss}>Головна</button>
                    <button onClick={()=>navigate('/stat/expenses')} style={buttonCss}>Статистика</button>
                    <button onClick={()=>navigate('/plan')} style={buttonCss}>Планування</button>
                </HeaderCSS.MenoContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head