import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";


function Buttons({filteredInstruments, setInstruments, data}){

    const { t } = useTranslation();

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        setSearch(text)
    }

    useMemo(() => {
        if (search) {
            const filteredItems = [];
            data.forEach(instrumentName => {
                if (instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())) { 
                    filteredItems.push(instrumentName);
                }

                else if (instrumentName.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    filteredItems.push(instrumentName);
                }
                else {
                setInstruments(filteredItems);
                }
        })
    }
    }, [search, data, setInstruments])


    return(
        <div className="navbar">
            <div className="navbarElements">
            <button className="cta" onClick={() => setInstruments(data)}>{t('All')}</button>
            <button className="cta" onClick={() => filteredInstruments("piano")}>{t('pianos')}</button>
            <button className="cta" onClick={() => filteredInstruments("guitar")}>{t('guitars')}</button>
            <button className="cta" onClick={() => filteredInstruments("drums")}>{t('drums and percussion')}</button>
            <button className="cta" onClick={() => filteredInstruments("keyboard")}>{t('keyboards')}</button>
            <button className="cta" onClick={() => filteredInstruments("studio")}>{t('studio / dj')}</button>
            <button className="cta" onClick={() => filteredInstruments("effect")}>{t('effects')}</button>
            <button className="cta" onClick={() => filteredInstruments("amplfiers")}>{t('amplfiers')}</button>
            <button className="cta" onClick={() => filteredInstruments("springs")}>{t('springs')}</button>            
            <button className="cta" onClick={() => filteredInstruments("breathings")}>{t('breathings')}</button>
            <button className="cta" onClick={() => filteredInstruments("dubbing")}>{t('dubbing')}</button>
            <button className="cta" onClick={() => filteredInstruments("hi-fi")}>{t('hi-fi')}</button>
            <button className="cta" onClick={() => filteredInstruments("lessons")}>{t('lessons')}</button>
            </div>

            <div className="right">
                    <input type="text" onChange={handleText}></input>
                    <button type="submit" className="search" onClick={handleSearch}>🔍</button>
            </div>
        </div> 
    );
}
export default Buttons;


/*

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
// import Modal from "./Modal/Modal";
// import Content from "./Modal/Content";
import Swal from 'sweetalert2';

function Buttons({filteredInstruments, setInstruments, data}){

    const { t } = useTranslation();

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    // const [isOpen, setIsOpen] = useState(false);

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        setSearch(text)
    }

    useMemo(() => {
        if (search) {
            const filteredItems = [];
            data.forEach(instrumentName => {
                if (instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase())) {
                    filteredItems.push(instrumentName);
                    console.log(instrumentName.searchTerm.toLowerCase().includes(search.toLocaleLowerCase()))
                }
                else if (instrumentName.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    filteredItems.push(instrumentName);
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                      
                }

                setInstruments(filteredItems);

            })
        }
                // ЕСЛИ ALERT ПИСАТЬ ЗДЕСЬ ТОЖЕ BUG!!!!!!!!!!!!!!!

    }, [search, data, setInstruments])


    return(
        <div className="navbar">
            <div className="navbarElements">
                <button className="cta" onClick={() => setInstruments(data)}>{t('All')}</button>
                <button className="cta" onClick={() => filteredInstruments("piano")}>{t('pianos')}</button>
                <button className="cta" onClick={() => filteredInstruments("guitar")}>{t('guitars')}</button>
                <button className="cta" onClick={() => filteredInstruments("drums")}>{t('drums and percussion')}</button>
                <button className="cta" onClick={() => filteredInstruments("keyboard")}>{t('keyboards')}</button>
                <button className="cta" onClick={() => filteredInstruments("studio")}>{t('studio / dj')}</button>
                <button className="cta" onClick={() => filteredInstruments("effect")}>{t('effects')}</button>
                <button className="cta" onClick={() => filteredInstruments("amplfiers")}>{t('amplfiers')}</button>
                <button className="cta" onClick={() => filteredInstruments("springs")}>{t('springs')}</button>            
                <button className="cta" onClick={() => filteredInstruments("breathings")}>{t('breathings')}</button>
                <button className="cta" onClick={() => filteredInstruments("dubbing")}>{t('dubbing')}</button>
                <button className="cta" onClick={() => filteredInstruments("hi-fi")}>{t('hi-fi')}</button>
                <button className="cta" onClick={() => filteredInstruments("lessons")}>{t('lessons')}</button>
            </div>

            <div className="right">
                <input type="text" onChange={handleText}></input>
                <button type="submit" className="search" onClick={handleSearch}>🔍</button>
            </div>
        </div> 
                );
            }
            export default Buttons;


*/