import './style.css'

type ToggleProps = {
    toggle: boolean,
    onClick: () => void
}

export const Toggle:React.FC<ToggleProps> = ({toggle, onClick}) => {
    return (
        <div className={`${toggle ? 'toggle' : 'toggle-night'}`} onClick={onClick}>
            <div className='toggle-button'></div>
            <div>
                <div className="cloud top"></div>
                <div className="cloud top-1"></div>
                <div className="cloud top-2"></div>
                <div className="cloud top-3"></div>
                <div className="cloud top-4"></div>
                <div className="cloud top-5"></div>
                <div className="cloud top-6"></div>
                <div className="cloud top-7"></div>
                <div className="cloud top-8"></div>
                <div className="cloud top-9"></div>
            
                <div className="cloud-behind top"></div>
                <div className="cloud-behind top-1"></div>
                <div className="cloud-behind top-2"></div>
                <div className="cloud-behind top-3"></div>
                <div className="cloud-behind top-4"></div>
                <div className="cloud-behind top-5"></div>
            
            </div>
            <div className='n-star'>
                <div className={`star-1`}></div>
                <div className={`star-2`}></div>
                <div className={`star-3`}></div>
            </div>
        </div>
    )
}