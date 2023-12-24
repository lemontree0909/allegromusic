import { useTranslation } from "react-i18next";

function Footer(){

    const { i18n, t } = useTranslation();

    return(
        <div className="footbar">
            <div className="left">
                <h1 className="title">ALLEGRO</h1>
                <p className="adress">West 45th Street 2nd Floor, New York 10013</p>
            </div>
            <div className="right">
                <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                    <option>Choose language</option>
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select>
            </div>
        </div>
    );
}
export default Footer;