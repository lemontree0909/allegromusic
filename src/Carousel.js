import { useState } from "react";
import { useTranslation } from "react-i18next";
import './App.css';
import { dataPromo } from "./data/dataPromo";

function Carousel(){

    const { i18n, t } = useTranslation();

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
        <button className="btn-home" onClick={previousInstrument}>{t('Previous')}</button>
        <img src={image} width="80%" alt="instrument"/>
        <button className="btn-home" onClick={nextInstrument}>{t('Next')}</button>
    </div>
    <div className="info">
        <h1 className='back'>{t("Allegro's Story")}</h1>
        <h4 className='back'>{t('From a small music store in the 70s to the 100 best music stores in the world. The journey of Allegro Music, who is among the first...')}</h4>
    </div>
</div>)
}

export default Carousel;