import React,{useState, useEffect} from "react";
import css from "../../../styles/dataList.css";
import { ResponsivePie } from '@nivo/pie'

const {DataContainer} = css
const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'left',
                direction: 'column',
                justify: false,
                translateX: -80,
                translateY: -120,
                itemsSpacing: 12,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
const DataChart = (props) => {

    const { data=[], show } = props

    const filterData = data.filter(item =>item.split('::')[1] === "витрати")


    const [r01, setR01] = useState(0)
    const [r02, setR02] = useState(0)
    const [r03, setR03] = useState(0)
    const [r04, setR04] = useState(0)
    const [r05, setR05] = useState(0)
    const [r06, setR06] = useState(0)
        useEffect(()=>{
            for(let i=0; i< filterData.length; i++){
                if(filterData[i].split("::")[2]==="купівля продуктів"){
                    setR01(prev=> prev + +(filterData[i].split(" ")[0].split("::")[0]))
                }
                if(filterData[i].split("::")[2]==="оплата рахунків"){
                    setR02(prev=> prev + +(filterData[i].split(" ")[0].split("::")[0]))
                }
                if(filterData[i].split("::")[2]==="купівля одягу"){
                    setR03(prev=> prev + +(filterData[i].split(" ")[0].split("::")[0]))
                }
                if(filterData[i].split("::")[2]==="витрати на транспорт"){
                    setR04(prev=> prev + +(filterData[i].split(" ")[0].split("::")[0]))
                }
                if(filterData[i].split("::")[2]==="розваги"){
                    setR05(prev=> prev + +(filterData[i].split(" ")[0].split("::")[0]))
                }
                if(filterData[i].split("::")[2]==="подорожі"){
                    setR06(prev=> prev + +(filterData[i].split(" ")[0].split("::")[0]))
                }
            }
        },[])
    return (
        <>
            {show &&<DataContainer style={{height:"500px"}}>
                <MyResponsivePie 
                    data={[
                        {
                            "id": "Покупка продуктов",
                            "label": "Покупка продуктов",
                            "value": r01,
                            "color": "hsl(163, 70%, 50%)"
                        },
                        {
                            "id": "Оплата рахунків",
                            "label": "Оплата рахунків",
                            "value": r02,
                            "color": "hsl(128, 70%, 50%)"
                        },
                        {
                            "id": "Купівля одягу",
                            "label": "Купівля одягу",
                            "value": r03,
                            "color": "hsl(261, 70%, 50%)"
                        },
                        {
                            "id": "Витрати на транспорт",
                            "label": "Витрати на транспорт",
                            "value": r04,
                            "color": "hsl(227, 70%, 50%)"
                        },
                        {
                            "id": "Розваги",
                            "label": "Розваги",
                            "value": r05,
                            "color": "hsl(46, 70%, 50%)"
                        },
                        {
                            "id": "Подорожі",
                            "label": "Подорожі",
                            "value": r06,
                            "color": "hsl(192, 70%, 50%)"
                        }
                    ].filter(item=>item.value>0)}
                />

            </DataContainer>}
        </>
    )
}



export default DataChart