import React, { useState } from 'react';
import Header from './header';
import SubscribeCard from './subscribeCard';

const LeftSide = ({subs}) => {
    const [sub, setSub] = useState(subs);

    const handleSubDelete = (id) => {
        const copy = [...sub];
        const current = copy.filter(item => item._id !== id);
        setSub(current);
    }

    return (
        <div className='float-left w-3/4 px-6'>
            <Header length={subs.length} />
            <table className="table-auto w-full text-center">
                <thead className='py-5 border-b-2 border-slate-300'>
                    <tr>
                        <th className='w-2/6'>Service</th>
                        <th className='w-2/6'>Price<br/>(RUB/Month)</th>
                        <th className='w-2/6'>Payment every<br/>month on the</th>
                    </tr>
                </thead>
                <tbody>
                    {sub.map(sub => {
                        return(
                            <SubscribeCard title={sub.title} cost={sub.monthly} date={sub.payment} key={sub._id} deleteSub={() => handleSubDelete(sub._id)}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default LeftSide;