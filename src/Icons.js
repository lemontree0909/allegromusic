import { useState } from "react";
import './App.css';
import { dataIcons } from "./data/dataIcons";

function Icons(){
    const  [iconPic, setIconPic] = useState(dataIcons);
    console.log(iconPic);

return(<div>
    <div className="conter">
        {iconPic.map((item =>{
            const {id, icon} = item;
            return(
                <div key={id}>
                    <img src={iconPic} alt="icon"/>
                </div>
            )
        }))}
    </div>
</div>)
}

export default Icons;




