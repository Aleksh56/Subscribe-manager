import React from 'react'
import ChangeButton from './change-button/changeButton'
import DeleteButton from './del-button/DeleteButton'
import styles from '../style'

const SubscribeCard = ({title, cost, date, id, deleteSub, onChangeSub}) => {
    return(
        <tr className='leading-10'>
            <td className={`${styles.heading3}`}>{title}</td>
            <td>$ {cost}</td>
            <td>{date}th</td>
            <td className={`${styles.flexCenter}`}>
                <ChangeButton onChangeSubs = {() => onChangeSub(id)}  />
                <DeleteButton onDeleteSubs = {() => deleteSub(id)}/>
            </td>
        </tr>
    )
}

export default SubscribeCard
