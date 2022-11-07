import React, { useState, useRef } from 'react';
import subs from '../data/data';

const Header = () => {
    const [click, setClick] = useState(false);
    const [title, setTitle] = useState();
    const [cost, setCost] = useState();
    const [date, setDate] = useState();
    const [sub, setSub] = useState([subs]);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    };

    function handleCostChange(event) {
        setCost(event.target.value);
    };

    function handleDateChange(event) {
        setDate(event.target.value);
    };

    function subCounter(){
        let counter = 0;
        subs.forEach(sub => {
            counter++;
        })
        return counter;
    }

    function handleSubAdd(){
        setSub([...sub, {
            _id: sub.length + 1,
            title: title,
            monthly: cost,
            payment: date,
            color: "#ff0000"
        }]);
    }

    return (
        <div className='flex items-center justify-between mb-9'>
            <p className='text-2xl font-semibold'>Subscriptions: {subCounter()}</p>
            <button onClick={() => setClick(!click)} className="transition-colors duration-300 font-medium px-5 py-2 border-2 border-black rounded-lg hover:bg-amber-300">Add</button>

            {click && <div className='h-full w-full bg-black/40 fixed top-0 left-0 flex items-center justify-center transition-all duration-150' onClick={() => setClick(!click)}>
                    <div className='p-48 rounded-lg h-max bg-white flex flex-col items-center justify-start w-2/5' onClick={e => e.stopPropagation()}>
                        <button className='relative text-3xl -top-44 -right-80' onClick={() => setClick(!click)}>X</button>
                        <p className='mb-20'>Add new subscription !</p>
                        <form className='flex items-center justify-between' onSubmit={handleSubAdd}>
                            <input type="text" name='title' id='title' onChange={handleTitleChange} className='border-2 border-black rounded-lg px-3 py-1 mx-2' placeholder='Title...'/>
                            <input type="number" name='cost' id='cost' onChange={handleCostChange} step={0.01} className='border-2 border-black rounded-lg px-3 py-1 mx-2' placeholder='Cost/month' />
                            <input type="number" name='date' id='date' onChange={handleDateChange} className='border-2 border-black rounded-lg px-3 py-1 mx-2' placeholder='Date of payment' />
                        </form>
                        <button className='mt-10 rounded-2xl bg-orange-400 px-7 py-2 hover:bg-orange-300 transition-colors duration-300' type='submit' onClick={() => handleSubAdd}>Submit</button>
                    </div>
                </div>}        
        </div>
    );
};

export default Header;