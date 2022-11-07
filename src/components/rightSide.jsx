import React from 'react';
import Dashboard from './dashboard/dashboard';
import ExitButton from './exit-button/exitButton';

const RightSide = () => {
    return (
        <div className='float-right w-1/4 px-6 bg-black/10 py-2 rounded-lg'>
            <div className='flex items-center justify-between mb-24'>
                <div className='flex items-center'>
                    <img src="https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png" alt="" className='rounded-full w-16' />
                    <p className='ml-5 text-xl font-medium'>User</p>
                </div>
                <ExitButton />
            </div>
            <Dashboard />
        </div>
    );
};

export default RightSide;