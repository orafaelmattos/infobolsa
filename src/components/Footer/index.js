import Logo from '../../assets/logo.png';
import './footer.css';

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-info'>
                <img src={Logo} alt='InfoBolsa'/>
                <h1>Site feito para estudos em ReactJS</h1>
            </div>

            <div className='footer-api'>
                <h2>API Utilizada:</h2>
                <h3>HGBrasil</h3>
                <a href='https://hgbrasil.com/' target='_blank' rel="noreferrer">Saiba Mais</a>
            </div>
        </div>
    )
}