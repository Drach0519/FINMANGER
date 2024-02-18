import React from "react";
import Foot from "../views/global/Foot";
import DataList from "../views/local/DataList";
export default class Plan extends React.Component{

    constructor(props){
        super(props)

        }
    render (){
        return(
            <>
                <DataList viewType = {"витрати"} data={this.props.statData}/>
                <Foot></Foot>
            </>
        )
    }
}


























// shouldComponentUpdate(props, state){
//     // return false - якщо компонент не треба оновлювати 
// }
// componentDidUpdate(prevProps, prevState){
//     // виконання запитів до сервера 
//     // змінювати стейт не можна 
// }
// componentDidMount(){
//     // виконання запитів до сервера 
//     // змінювати стейт не можна 

// }
// componentWillUnmount(){
//     // метод очистки памяті 
// }


// const Plan = ()=>{
//     const [time, setTime] = useState();
//     useEffect(()=>{
//         setInterval(()=>{
//             setTime(new Date().toLocaleTimeString())
//         },1000)
//     },[])
//     return(
//         <React.Fragment>
//             <span style={
//                 {marginTop:'100px', marginLeft:'130px', display:'block'}}>
//                 Сторінка планування
//             </span>
//             <span style={
//                 {marginTop:'30px', marginLeft:'130px', display:'block'}}>
//                 поточний час {time}
//             </span>
//         </React.Fragment>
//     )
// }
// export default Plan
