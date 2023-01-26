import { useState } from "react";
import { data } from "./data/data";
import Buttons from "./Buttons";
import Instruments from "./Instruments";
import Footer from "./Footer";

function Shop(){
    const [instruments, setInstruments] = useState(data);

    const choosenInstruments = (searchTerm) => {
            const newInstruments = data.filter(element => element.searchTerm === searchTerm);
            setInstruments(newInstruments);
        }

    return(
        <div>
            <Buttons
                filteredInstruments={choosenInstruments}
                data={data}
                setInstrument={setInstruments}
            />
            <Instruments itemsForSale={instruments}/>
            <Footer/>
        </div>
    )
}

export default Shop;