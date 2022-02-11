import React, {useState} from 'react'
import {Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, ImgLogo, MobileIcon} from './NavbarStyles'
import Logo from '../img/LOGO.png'
import {FaBars, FaPhoneAlt, FaHome, FaTags, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons'


const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: {fontSize: "2em"} }}>
        <LogoContainer>
          <ImgLogo src={Logo} alt='Logo'>
          </ImgLogo> 
        </LogoContainer>
          <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)} href='#Inicio'>
              <div>
                <FaHome />
                INICIO
              </div>
            </MenuItemLink >
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)} href='#Productos'>
            <div>
              <FaTags />
              PRODUCTOS
            </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setshowMobileMenu(!showMobileMenu)} href='#Contacto'>
            <div>
              <FaPhoneAlt />
              CONTACTO
            </div>
            </MenuItemLink>
          </MenuItem>
        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}

export default Navbar