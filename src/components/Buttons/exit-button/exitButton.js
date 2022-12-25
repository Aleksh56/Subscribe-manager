
const ExitButton = () => {
    return(
        <button>
            <svg className='h-6 w-6 text-black'  viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>  
                <path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' />  
                <polyline points='10 17 15 12 10 7' />  
                <line x1='15' y1='12' x2='3' y2='12' />
            </svg>
        </button>
    )
}

export default ExitButton
