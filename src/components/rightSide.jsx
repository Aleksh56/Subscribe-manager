import React from 'react'
import styles from '../style'
import Dashboard from './dashboard/dashboard'
import ExitButton from './exit-button/exitButton'

const RightSide = ({subs}) => {
    return (
        <div className={`${styles.rightMainBlock}`}>
            <div className={`${styles.flexNav} mb-24`}>
                <div className={`${styles.flexCenter}`}>
                    <img src='https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' alt='' className='rounded-full w-16' />
                    <p className={`${styles.heading3} ml-5`}>User</p>
                </div>
                <ExitButton />
            </div>
            <Dashboard subs={subs} />
        </div>
    )
}

export default RightSide
