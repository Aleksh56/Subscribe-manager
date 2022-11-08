import React from 'react';
import ChangeButton from './change-button/changeButton'
import DeleteButton from './del-button/DeleteButton';

const SubscribeCard = ({title, cost, date, color, id, deleteSub, onChangeSub}) => {

    return(
        <tr className='leading-10'>
            <td className={`text-2xl font-semibold text-black-600`}>{title}</td>
            <td>$ {cost}</td>
            <td>{date}th</td>
            <td className='flex items-center'>
                <ChangeButton onChangeSubs = {() => onChangeSub(id)}  />
                <DeleteButton onDeleteSubs = {() => deleteSub(id)}/>
            </td>
        </tr>
    );
}

export default SubscribeCard;