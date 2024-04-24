import logo from '../assets/images/EscudoPeque.svg'

export const Logo = ({text}) => {
    return(
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Escudo"/>
            <span>{text}</span>
        </div>
    )
}