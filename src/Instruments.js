import { useTranslation } from "react-i18next";

function Instruments({itemsForSale}){
    const { t } = useTranslation();

    return(
        <div className="products">
            {itemsForSale.map((item =>{
                const{id, name, price, image} = item;
                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="250px" alt="instrument"/>
                        <div className="product-info">
                            <h3>{t(name)}</h3>
                            <h2>$ {t(price)}</h2>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Instruments;