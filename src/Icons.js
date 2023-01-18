import { useState } from "react";
import './App.css';
import { dataIcons } from "./data/dataIcons";

function Icons(){
    const  [iconPic, setIconPic] = useState(dataIcons);
    const {icon} = dataIcons[iconPic];


return(<div>
    <div className="conter">
        <img src={icon} alt="icon"/>
    </div>

</div>)
}

export default Icons;