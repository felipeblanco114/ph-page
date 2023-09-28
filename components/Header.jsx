import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Header = () => {
  return (
    <header>
        <div className="header">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    {/* <li><FontAwesomeIcon icon={ faLinkedin } style={{maxWidth: "1rem", marginBottom: "-3px"}} /></li>
                    <li><FontAwesomeIcon icon={ faInstagram } style={{maxWidth: "1rem", marginBottom: "-3px"}} /></li> */}
                    <li><h1>Benjamín Aguirre</h1></li>
                    <li>Info</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <div style={{width: '100vw', height: '85vh', position: 'relative'}}>
                <Image
                    alt='Caballos en el campo.'
                    src='/img/header.jpg'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
    </header>
  )
}

export default Header