import React, {useState} from 'react';
import styles from '../style';

const Header = ({length, onAdd}) => {
    const [click, setClick] = useState(false);
    const [title, setTitle] = useState();
    const [cost, setCost] = useState();
    const [date, setDate] = useState();

    function handleTitleChange(event) {
        setTitle(event.target.value);
    };

    function handleCostChange(event) {
        setCost(event.target.value);
    };

    function handleDateChange(event) {
        setDate(event.target.value);
    };

    return (
        <div className={`mb-9 ${styles.flexNav}`}>
            <p className={`${styles.heading2}`}>Subscriptions: {length}</p>
            <button onClick={() => setClick(!click)} className="transition-colors duration-300 font-medium px-5 py-2 border-2 border-black rounded-lg hover:bg-amber-300">Add</button>

            {click && <div className={`${styles.flexCenter} h-full w-full bg-black/40 fixed top-0 left-0 transition-all duration-150`} onClick={() => setClick(!click)}>
                    <div className={`${styles.flexStartCol} p-48 rounded-lg h-max bg-white w-2/5`} onClick={e => e.stopPropagation()}>
                        <button className='relative text-3xl -top-44 -right-80' onClick={() => setClick(!click)}>X</button>
                        <p className='mb-20'>Add new subscription !</p>
                        <form className={`${styles.flexNav}`}>
                            <input type="text" name='title' id='title' onChange={handleTitleChange} className='border-2 border-black rounded-lg px-3 py-1 mx-2' placeholder='Title...'/>
                            <input type="number" name='cost' id='cost' onChange={handleCostChange} step={0.01} className='border-2 border-black rounded-lg px-3 py-1 mx-2' placeholder='Cost/month' />
                            <input type="number" name='date' id='date' onChange={handleDateChange} className='border-2 border-black rounded-lg px-3 py-1 mx-2' placeholder='Date of payment' />
                        </form>
                        <button className='mt-10 rounded-2xl bg-orange-400 px-7 py-2 hover:bg-orange-300 transition-colors duration-300' type='submit' onClick={() => onAdd(title, cost, date)}>Submit</button>
                    </div>
                </div>}        
        </div>
    );
};

export default Header;