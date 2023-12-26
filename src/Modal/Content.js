import './Style.css';

const Content = ( { setIsOpen } ) => {
    return (<div className='modal_content'>
        <p>Modal content</p>
        <button onClick={ () => setIsOpen(false) }>
            Close Modal</button>
    </div>)
}

export default Content;