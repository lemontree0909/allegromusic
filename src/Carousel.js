import { useState } from "react";
import { useTranslation } from "react-i18next";
import './App.css';
import { dataPromo } from "./data/dataPromo";

function Carousel(){

    const { t } = useTranslation();

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
        <h1 className='textStory'>{t("Allegro's Story")}</h1>
        <h4 className='textStory'>{t('Allegro is one of the best quality music stores in the city. In fact, they are the best when it comes to pianos. In addition to pianos they also have a wide range of other instruments. Allegro is the best distributor of many worldwide musical instrument manufacturers such as Yamaha and Zildjian, PRS,Mesa/Boogie, Line6, Zoom, Schecter, Godin, Pearl River, Suzuki, Rotosund, Ashton, and Savarez.')}</h4>
    </div>
</div>)
}

export default Carousel;