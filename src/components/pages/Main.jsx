import React, {useEffect} from "react";
import { changeViewType,changeComment,changeValue } from "../../redux-state/reducers/view-type-for-main";
import {useSelector, useDispatch} from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Foot from "../views/global/Foot";
import InputComponent from "../comps/Input";
import css from "../../styles/form.css";



const {FormContainer,Button} = css
const paramInput  = [
    {textInput:["Введіть суму","Введіть тип транзакції ","Введіть коментарій",]},
    {maxLength:"100"}
]
const Main = (props)=>{
    const {action}= props

    const dispatch = useDispatch()
    const viewType = useSelector(state =>state.viewTypeMain.viewType)
    const viewValue = useSelector(state =>state.viewTypeMain.value)
    const viewComment = useSelector(state =>state.viewTypeMain.comment)

    useEffect(()=>{
        console.log(viewType)
    },[viewType])

    const validation = () =>{
        if(viewValue.length > 2 && viewType){
            console.log("ok");
            const dataLine = `${viewValue}::${viewType}::${viewComment}`
            action(dataLine);
            dispatch(changeValue(''));
            dispatch(changeViewType('прибуток'));
            dispatch(changeComment(''));
        }else {
            console.log("no")
        }
    }
    const changeButtonColot =()=>{
        if(viewValue.length < 3 || viewType.length < 3){
            return "rgb(229,229,229)"
        } else return "rgb(176, 243, 71)"
    }
    const handleChange = (event) => {
        dispatch(changeViewType(event.target.value));
    };
    const handleChangeValue = (param) => {
        dispatch(changeValue(param));
    };
    const handleChangeComment = (param) => {
        dispatch(changeComment(param));
    };
    const handleChangeCommentRadio = (e) => {
        dispatch(changeComment(e.target.value));
    };
        return(
        <React.Fragment>
            <FormContainer style={{alignItems:"flex-start"}}>
                <InputComponent inputValue={viewValue} action={handleChangeValue} placeholder={paramInput[0].textInput[0]} maxLength={paramInput[1].maxLength}/>
                <FormControl style={{marginTop:"9px", marginBottom:"12px"}}>
                    <FormLabel id="demo-controlled-radio-buttons-group">Вибрати тип транзвкції</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={viewType}
                        onChange={handleChange}
                        style={{marginTop:"5px", marginLeft:"6px"}}
                    >
                        <FormControlLabel value="витрати" control={<Radio />} label="Витрати" />
                        <FormControlLabel value="прибуток" control={<Radio />} label="Прибуток" />
                    </RadioGroup>
                </FormControl>
                {viewType === 'прибуток' && <InputComponent inputValue={viewComment} action={handleChangeComment} placeholder={paramInput[0].textInput[2]}maxLength={paramInput[1].maxLength}/>}
                {viewType === 'витрати' &&<FormControl style={{marginTop:"0px", marginBottom:"14px"}}>
                <FormLabel id="demo-controlled-radio-buttons-group">Виберіть тип витрат </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={viewComment}
                        onChange={handleChangeCommentRadio}
                        style={{marginTop:"5px", marginLeft:"6px"}}
                    >   <FormControlLabel value="купівля продуктів" control={<Radio />} label="Покупка продуктов" />
                        <FormControlLabel value="оплата рахунків" control={<Radio />} label="Оплата рахунків" />
                        <FormControlLabel value="купівля одягу" control={<Radio />} label="Купівля одягу" />
                        <FormControlLabel value="витрати на транспорт" control={<Radio />} label="Витрати на транспорт"/>
                        <FormControlLabel value="розваги" control={<Radio />} label="Розваги"/>
                        <FormControlLabel value="подорожі" control={<Radio />} label="Подорожі"/>
                    </RadioGroup>
                </FormControl>}
                <Button
                backgroundcolor={
                    changeButtonColot()
                    // value.length < 3    ?
                    // "rgb(229,229,229)":
                    // type.length < 3      ?
                    // "rgb(229,229,229)":
                    // "rgb(176, 243, 71)"                
                }
                onClick={validation}
                >Зберегти транзакцію</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main