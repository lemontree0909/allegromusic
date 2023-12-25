import Footer from "./Footer";
import { useState } from "react";
import { dataAcademy } from "./data/dataAcademy";
import { useTranslation } from "react-i18next";


function Academy(){

    const { t } = useTranslation();

    const academy = dataAcademy;

    const [showText, setShowText] = useState(false);
    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
      }
    return(
        <div className="container">

            <div className="cont">
                <h3 className='back'>{t('Welcome to')}</h3>
                <h1 className='back'>{t('Academy')}</h1>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1661335458798-74635c70b8a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" width="100%" alt="pic"/>


        {academy.map(item => {
            const{description, showMore} = item;

            return(
            <div className="cont">
                    {/* <p className="textAcademy">{showMore ? {t('description')} : {t('description')}.substring(0,140) + ' ....'} */}
                    <p className="textAcademy">{t('description')}

                    <button className='btnShow' onClick={() => showTextClick(item)}>{showMore ? 'show less' : 'show more'}</button>
                    </p>
            </div>
            )
        })}
            <div className="conter">
                <img src="https://images.unsplash.com/photo-1640075277191-7c926b673e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHxtdXNpYyUyMGxlc3NvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" width="25%" alt="pic"/>
                <img src="https://images.unsplash.com/photo-1512405173804-40c66c0ed709?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxtdXNpYyUyMGxlc3NvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" width="25%" alt="pic"/>
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBsZXNzb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" width="25%" alt="pic"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Academy;