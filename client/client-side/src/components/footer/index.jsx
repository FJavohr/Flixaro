import React from 'react'
import './Footer.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'
// импортировать иконки соц. сетей.
import {
FaInstagram,
FaTwitter,
FaLinkedin,
FaFacebookF
} from 'react-icons/fa'
//

const Footer = () => {
  return (
    <footer className="footer">
    <ContentWrapper>
      <ul className="menuItems">
      <li className="menuItem">SMTH</li>
      <li className="menuItem">SMTH</li>
      <li className="menuItem">SMTH</li>
      <li className="menuItem">SMTH</li>
      <li className="menuItem">SMTH</li>
    </ul>
    <div className="infoText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci repudiandae sapiente, obcaecati soluta recusandae eum, omnis quae error temporibus necessitatibus reiciendis doloribus natus aspernatur vel veniam deleniti ipsum eaque hic itaque doloremque. Beatae minus ducimus vero numquam velit consequuntur saepe ipsam accusamus amet, quis fuga quasi nostrum a sit adipisci voluptates quas illum, inventore, esse enim porro? 
    </div>
    <div className="socialIcons">
      <span className='icon'><FaInstagram/></span>
      <span className='icon'><FaTwitter/></span>
      <span className='icon'><FaLinkedin/></span>
      <span className='icon'><FaFacebookF/></span>
    </div>
    </ContentWrapper>
    </footer>
  )
}

export default Footer;