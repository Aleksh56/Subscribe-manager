import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = ({subs}) => {
    const [input, setInput] = useState(false);
    const [profit, setProfit] = useState(160);

    function handleChange(event) {
        setProfit(event.target.value);
    };

    function subsAmountCounter() {
        let counter = 0;
        subs.forEach(sub => {
            counter += sub.monthly;
        })
        return counter;
    }

    let myMonthlySubscriptions = subsAmountCounter();
    let percentage = Math.round(myMonthlySubscriptions / profit * 100);

    return(
        <>
            <div className='mb-24'>
                <div className='flex items-center justify-center text-center flex-col py-3 border-b-2 border-black'>
                    <p className='text-2xl'>Your Profit</p>
                    <div className=''>
                        {!input && <p className='text-4xl font-medium'>{profit}</p>}
                        {input && <input type="number" className='border-2 border-black rounded-lg px-3 py-1 w-20 appearance-none' onChange={handleChange} value={profit}/>}
                    </div>
                    <p>USD/month</p>
                    <button className='mt-2 text-xs text-slate-700/50' onClick={() => setInput(!input)}>change</button>
                </div>
                <div className='flex items-center justify-center text-center flex-col mt-3'>
                    <p className='text-2xl'>Subscription</p>
                    <p className='text-4xl font-medium'>{myMonthlySubscriptions}</p>
                    <p>USD/month</p>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col'>
                <p className='text-xl mb-9'>on subscriptions, you spend:</p>
                <div className='w-48'>
                    <CircularProgressbar value={percentage} text={`${percentage}%` } />
                </div>
            </div>
        </>
    );
}

export default Dashboard;