import React from 'react';

const SubscribeCard = ({title, cost, date}) => {
    return(
        <tr className='leading-10'>
            <td className='text-2xl font-semibold text-red-700'>{title}</td>
            <td>$ {cost}</td>
            <td>{date}th</td>
        </tr>
    );
}

export default SubscribeCard;