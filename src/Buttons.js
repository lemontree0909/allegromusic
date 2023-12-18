import { useMemo, useState } from "react";

function Buttons({filteredInstruments, setInstruments, data}){

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        setSearch(text)
    }

    const filteredMusicInstruments = useMemo(() => data.filter((instrumentName) => {
        console.log ('FILTERING!')
        return instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())
    }), [search])

    // const filteredMusicInstruments = useMemo(() => data.filter((instrumentName) => {
    //     return instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())
    // }), [search])

    return(
        <div className="navbar">
            <button onClick={() => setInstruments(data)}>All</button>
            <button onClick={() => filteredInstruments("piano")}>pianos</button>
            <button onClick={() => filteredInstruments("guitar")}>guitars</button>
            <button onClick={() => filteredInstruments("drums")}>drums and percussion</button>
            <button onClick={() => filteredInstruments("keyboard")}>keyboards</button>
            <button onClick={() => filteredInstruments("studio")}>studio / dj</button>
            <button onClick={() => filteredInstruments("effect")}>effects</button>
            <button onClick={() => filteredInstruments("amplfiers")}>amplfiers</button>
            <button onClick={() => filteredInstruments("springs")}>springs</button>            
            <button onClick={() => filteredInstruments("breathings")}>breathings</button>
            <button onClick={() => filteredInstruments("dubbing")}>dubbing</button>
            <button onClick={() => filteredInstruments("hi-fi")}>hi-fi</button>
            <button onClick={() => filteredInstruments("lessons")}>lessons</button>
            <div >
                <input type="text" onChange={handleText}></input>
                <button type="button" onClick={handleSearch}>Search</button>
                {/* <div>
                    {filteredMusicInstruments.map((filteredMusicInstrument) => (
                            <p key={filteredMusicInstrument.id}>{filteredMusicInstrument.searchTerm}</p>
                        ))}
                </div> */}
            </div>
        </div> 
    );
}
export default Buttons;