import './main.css';
import Header from '../../components/Header/index';
import Image from '../../assets/bolsa de valores.jpg';
import Logo from '../../assets/logo.png';

export default function Main(){
    return(
        <div className='container'>
            <Header/>
            <section className='image-container'>
                <img src={Image} alt='image-background' className='image-background'/>
                <div className='content'>
                    <img src={Logo} alt='logo'/>
                    <div className='title'>
                        <h1 className='cssanimation typing'>Seu lugar na bolsa</h1>
                        <p>Explore as oportunidades do mercado financeiro.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}