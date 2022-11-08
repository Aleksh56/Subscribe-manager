import React, { useState } from 'react';
import styles from '../style';
import Header from './header';
import SubscribeCard from './subscribeCard';

const LeftSide = ({subs}) => {
    const [sub, setSub] = useState(subs);
    const [subLength, setSubLength] = useState(subs.length);
    const [uniqKeys, setUniqKeys] = useState(subs.length);

    const handleSubDelete = (id) => {
        const copy = [...sub];
        const current = copy.filter(item => item._id !== id);
        setSub(current);
        setSubLength(current.length);
    }

    const handleSubAdd = (title, cost, date) => {
        const newValue = {
            _id: uniqKeys + 1,
            title: title,
            monthly: cost,
            payment: date,
            color: "#00ff00"
        }
        setSub(oldArr => [...oldArr, newValue]);
        setSubLength(subLength + 1);
        setUniqKeys(uniqKeys + 1);
    }

    const handleSubChange = (id) => {
        const copy = [...sub];
        const current = copy.find(item => item._id === id);
        console.log('You pressed the ' + current._id + " item. Sorry, i don't add change functions...")
    }

    return (
        <div className='float-left w-3/4 px-6'>
            <Header length = {subLength} onAdd = {handleSubAdd} subs={subs}/>
            <table className="table-auto w-full text-center">
                <thead className='py-5 border-b-2 border-slate-300'>
                    <tr>
                        <th className='w-2/6'>Service</th>
                        <th className='w-2/6'>Price<br/>(RUB/Month)</th>
                        <th className='w-2/6'>Payment every<br/>month on the</th>
                    </tr>
                </thead>
                <tbody>
                    {sub.length > 0 && sub.map(sub => {
                        return(
                            <SubscribeCard title={sub.title} cost={sub.monthly} date={sub.payment} color={sub.color} key={sub._id} deleteSub={() => handleSubDelete(sub._id)} onChangeSub={() => handleSubChange(sub._id)}/>
                        )
                    })}
                    {sub.length <= 0 && 
                    <tr>
                        <td></td>
                        <td>
                            <span className={`${styles.defaultHeading2} text-red-600`}>У вас еще нет ни одной подписки !</span>
                        </td>
                        <td></td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LeftSide;