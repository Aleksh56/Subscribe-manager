import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../style'
import Header from './header'
import SubscribeCard from './subscribeCard'
import { addSubs, deleteSubs } from '../redux/actions/subsActions'

const LeftSide = ({subs}) => {
    const subscribes = useSelector(state => state.allSubs.subs);
    const dispatch = useDispatch();
    const [sub, setSub] = useState(subs)

    const handleSubDelete = (id) => {
        dispatch(deleteSubs(id));
    }

    const handleSubAdd = (title, cost, date) => {
        const newValue = {
            _id: Date.now(),
            title: title,
            monthly: Number(cost),
            payment: date,
            color: '#00ff00'
        }
        dispatch(addSubs(newValue));
    }

    const handleSubChange = (id) => {
        const copy = [...sub]
        const current = copy.find(item => item._id === id)
        console.log('You pressed the ' + current._id + " item. Sorry, i don't add change functions...")
    }

    return (
        <div className={`${styles.leftMainBlock}`}>
            <Header onAdd = {handleSubAdd} subs={subs}/>
            <table className={`${styles.table}`}>
                <thead className={`${styles.tableHead}`}>
                    <tr>
                        <th className='w-2/6'>Service</th>
                        <th className='w-2/6'>Price<br/>(RUB/Month)</th>
                        <th className='w-2/6'>Payment every<br/>month on the</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribes.length > 0 && subscribes.map(subscribe => {
                        const {_id, title, monthly, payment, color} = subscribe;
                        return(
                            <SubscribeCard title={title} cost={monthly} date={payment} color={color} id={_id} key={_id} deleteSub={() => handleSubDelete(_id)} onChangeSub={() => handleSubChange(_id)}/>
                        )
                    })}
                    {subscribes.length <= 0 && 
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
    )
}

export default LeftSide
