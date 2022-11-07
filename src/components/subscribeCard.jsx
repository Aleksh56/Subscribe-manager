import React from 'react';
import ChangeButton from './change-button/changeButton'
import DelButton from './del-button/delButton'

const SubscribeCard = ({title, cost, date}) => {

    return(
        <tr className='leading-10'>
            <td className='text-2xl font-semibold text-red-700'>{title}</td>
            <td>$ {cost}</td>
            <td>{date}th</td>
            <td className='flex items-center'>
                <ChangeButton />
                <DelButton />
            </td>
        </tr>
    );
}

export default SubscribeCard;