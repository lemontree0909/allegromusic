import './App.css';
import { dataIcons } from "./data/dataIcons";
import { useTranslation } from "react-i18next";


function Icons(){

    const { t } = useTranslation();

   
return(
    <div className="conter">
        {dataIcons.map((item =>{
            const {id, icon, title, text} = item;
            return(
                <div className='icon' key={id}>
                    <img src={icon} width="100px" alt="icon"/>
                    <h3>{t('title')}</h3>
                    <p>{t('text')}</p>

                </div>
            )
        }))}
    </div>
    )
}

export default Icons;



