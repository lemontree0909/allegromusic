function Instruments({itemsForSale}){
    return(
        <div className="products">
            {itemsForSale.map((item =>{
                const{id, name, searchTerm, price, image} = item;
                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="250px" alt="instrument"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Instruments;