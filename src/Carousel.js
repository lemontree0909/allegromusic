import { useState } from "react";
import './App.css';
import { dataPromo } from "./data/dataPromo";

function Carousel(){
    const  [instrument, setInstrument] = useState(0);
    const {image} = dataPromo[instrument];

    const previousInstrument = () => {
        setInstrument (( instrument =>{
            instrument --;
            if (instrument<0){
                return dataPromo.length -1;
            }
            return instrument;
        }))
    }

    const nextInstrument = () => {
        setInstrument (( instrument =>{
            instrument ++;
            if (instrument>dataPromo.length -1){
                instrument=0;
            }
            return instrument;
        }))
    }


return(<div>
    <div className="conter">
        <button className="btn-home" onClick={previousInstrument}>Previous</button>
        <img src={image} width="80%" alt="instrument"/>
        <button className="btn-home" onClick={nextInstrument}>Next</button>
    </div>
    <div className="info">
        <h1 className='back'>Allegro's Story</h1>
        <p className='back'> From a small music store in the 70s to the 100 best music stores in the world. The journey of Allegro Music, who is among the...</p>
    </div>
</div>)
}

export default Carousel;