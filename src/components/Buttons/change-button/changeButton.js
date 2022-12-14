
const ChangeButton = ({onChangeSubs, id}) => {
    return(
        <button className='mr-2' onClick={() => onChangeSubs(id)}>
          <svg className='h-6 w-6 text-black'  width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'> 
            <path stroke='none' d='M0 0h24v24H0z'/>  
            <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4' />  
            <line x1='13.5' y1='6.5' x2='17.5' y2='10.5' />
          </svg>
        </button>
    )
}

export default ChangeButton
