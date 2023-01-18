function Buttons({filteredInstruments}){
    return(
        <div className="navbar">
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
        </div>
    );
}
export default Buttons;