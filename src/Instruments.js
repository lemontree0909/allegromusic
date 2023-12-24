function Instruments({itemsForSale}){
    return(
        <div className="products">
            {itemsForSale.map((item =>{
                const{id, name, price, image} = item;
                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="250px" alt="instrument"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h2>$ {price}</h2>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Instruments;