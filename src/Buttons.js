import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

function Buttons({filteredInstruments, setInstruments, data}){

    const { i18n, t } = useTranslation();

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        setSearch(text)
    }

    // const filteredMusicInstruments = useMemo(() => data.filter((instrumentName) => {
    //     console.log ('FILTERING!')
    //     return instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())
    // }), [search])

    useMemo(() => {
        if (search) {
            const filteredItems = [];
            data.forEach(instrumentName => {
                if (instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())) {
                    filteredItems.push(instrumentName);
                    console.log(instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase()))
                }
                setInstruments(filteredItems);
            })
        }
    }, [search, data])


    return(
        <div className="navbar">
            <button onClick={() => setInstruments(data)}>{t('All')}</button>
            <button onClick={() => filteredInstruments("piano")}>{t('pianos')}</button>
            <button onClick={() => filteredInstruments("guitar")}>{t('guitars')}</button>
            <button onClick={() => filteredInstruments("drums")}>{t('drums and percussion')}</button>
            <button onClick={() => filteredInstruments("keyboard")}>{t('keyboards')}</button>
            <button onClick={() => filteredInstruments("studio")}>{t('studio / dj')}</button>
            <button onClick={() => filteredInstruments("effect")}>{t('effects')}</button>
            <button onClick={() => filteredInstruments("amplfiers")}>{t('amplfiers')}</button>
            <button onClick={() => filteredInstruments("springs")}>{t('springs')}</button>            
            <button onClick={() => filteredInstruments("breathings")}>{t('breathings')}</button>
            <button onClick={() => filteredInstruments("dubbing")}>{t('dubbing')}</button>
            <button onClick={() => filteredInstruments("hi-fi")}>{t('hi-fi')}</button>
            <button onClick={() => filteredInstruments("lessons")}>{t('lessons')}</button>
            <div >
                <input type="text" onChange={handleText}></input>
                <button type="button" onClick={handleSearch}>{t('Search')}</button>
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