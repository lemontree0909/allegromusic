import './App.css';
import { dataIcons } from "./data/dataIcons";

function Icons(){
   
return(
    <div className="conter">
        {dataIcons.map((item =>{
            const {id, icon, title, text} = item;
            return(
                <div className='icon' key={id}>
                    <img src={icon} width="100px" alt="icon"/>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            )
        }))}
    </div>
    )
}

export default Icons;




