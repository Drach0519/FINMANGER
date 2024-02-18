import React from "react";
import css from "../../../styles/dataList.css";
import { useNavigate } from "react-router-dom";

const {DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem} = css

const DataList = (props) => {
    const {data = [],setShow, viewType} = props
    const navigate = useNavigate()
    const filterData = data.filter(item =>item.split('::')[1] ===  viewType)
    const filterDataSum = data.filter(item =>item.split('::')[1] ===  viewType)
        .reduce((sum, item) =>{
            return sum + +(item.split(' ')[0].split("::")[0])
        },0)
    const filterDataDelta = data
        .reduce((sum, item) =>{
            if(item.split("::")[1]==="прибуток"){
                return sum + +(item.split(' ')[0].split("::")[0])
            }else{
                return sum - +(item.split(' ')[0].split("::")[0])
            }
            
        },0)

    const reduceData1 =()=>{
        navigate('/stat/прибуток')
        setShow(false)
    }
    const reduceData2 =()=>{
        navigate('/stat/витрати')
        setShow(true)
    }
    const reduceData3 =()=>{
        navigate('/stat/загальне')
        setShow(true)
    }

    // useEffect(()=>{
    //     console.log(filterData)
    // },[])

    return(
    <React.Fragment>
        <ButtonsLine>
            <ButtonItem style={{fontWeight: viewType ==="прибуток" ? 'bold':""}} onClick={reduceData1}>Прибуток</ButtonItem>
            <ButtonItem style={{fontWeight: viewType ==="витрати" ? 'bold':""}} onClick={reduceData2}>Витрати</ButtonItem>
            <ButtonItem style={{fontWeight: viewType ==="загальне" ? 'bold':""}} onClick={reduceData3}>Загальне</ButtonItem>
        </ButtonsLine>
        <DataContainer>
            {filterData.length > 0 && <React.Fragment>
                { filterData.map((item,index)=>{
                    return(
                        <ContentLine key={index} style={{marginBottom:"10px"}} >
                            <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                            <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                            <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                        </ContentLine>
                    )
                })}
            <ContentLine>
                <ContentCell width={"20%"}>{filterDataSum}</ContentCell>
                <ContentCell width={"20%"}>----</ContentCell>
                <ContentCell width={"60%"}>----</ContentCell>
            </ContentLine>
            </React.Fragment>}
            {filterData.length === 0 && <React.Fragment>
                { data.map((item,index)=>{
                    return(
                        <ContentLine key={index}style={{marginBottom:"10px"}}>
                            <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                            <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                            <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                        </ContentLine>
                    )
                })}
            <ContentLine>
                <ContentCell width={"20%"}>{filterDataDelta}</ContentCell>
                <ContentCell width={"20%"}>----</ContentCell>
                <ContentCell width={"60%"}>----</ContentCell>
            </ContentLine>
            </React.Fragment>}
        </DataContainer>
    </React.Fragment>
    )
}


export default DataList;