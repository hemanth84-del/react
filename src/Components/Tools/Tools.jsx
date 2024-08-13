import React ,{useState}from 'react'
import "./Tools.css"
import { IoMdMenu } from "react-icons/io";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";




const Tools = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>

<Offcanvas show={show} onHide={handleClose} placement={"end"} name={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
      {/* <img class="bm-brand-logo" src="./images/logo.svg" width="160" alt="Brand Logo"/> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Dropdown>
      <Dropdown.Toggle >
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu transition-delay="10sec">
      <Dropdown.Item ><Link to="/tools" style={{}}>Tools</Link>  </Dropdown.Item>
        <Dropdown.Item ><Link to="/pricing" style={{textDecorationLine:"none", color:"unset"}}>Pricing</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Support</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Login</Link></Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        
        </Offcanvas.Body>
      </Offcanvas>
 


    <div class="l-page" id="app">
      
  
  
    <div class="page">
      <div class="page__box">
  
        {/* <!-- header block --> */}
  <header class="header   header--tools ">
    <div class="header__box">
      
  
        <h1 class="header__logo">
          
          {/* <a href="/" class="header__logo-link header__logo-link--tools">
            MarkBrand
          </a> */}
          
        </h1>
  
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a href="/tools/"
                 class="header__nav-link  header__nav-link--current"
              >Tools</a>
            </li>
            <li class="header__nav-item">
              <a href="/pricing/" class="
                header__nav-link
                
              ">Pricing</a>
            </li>
            <li class="header__nav-item">
              <a href="mailto:support@gmail.io" class="header__nav-link">Support</a>
            </li>
            <li class="header__nav-item">
              <a href="" class="header__nav-link highlight">Login</a>
            </li>
          </ul>
        </nav>
  
        <a href="#" class="header__mobile-menu sidebar-toggle" data-toggleclass="sidebar-open" data-target="body">
          {/* <svg class="ico-svg ico-svg__menu" >
            <use xlink:href="/images/icons.svg#menu"></use>
          </svg> */}
          <>
          <IoMdMenu onClick={handleShow} style={{color:"white"}}/>
          </>
        </a>
  
    </div>
  </header>
  {/* <!-- /End header block --> */}
  
  
        {/* <!-- hero block --> */}
  <div class="tools__hero">
    <h2 class="tools__hero-title">
      <div class="tools__hero-title-in">
      
        MarkBrand tools
      </div>
    </h2>
    <div class="tools__hero-note">
      Use our free AI-powered design tools to get <br />
      color and font ideas for your next logo project
    </div>
  </div>
  {/* <!-- /End hero block --> */}
  
        {/* <!-- tools block --> */}
  <div class="tools">
    <div class="tools__box">
      <div class="tools__list">
        <a href="../color-wheel/" class="tools__item tools__item--s1">
          <img class="tools__item-logo" src="./images/color-wheel.svg" />
          <div class="tools__item-title">AI Color Wheel</div>
          <div class="tools__item-note">
            Automatically colorize your graphic and logo designs
          </div>
        </a>
        <a href="" class="tools__item tools__item--s2">
          <img class="tools__item-logo" src="./images/logo-rank.svg" />
          <div class="tools__item-title">Logo Rank</div>
          <div class="tools__item-note">
            Upload your logo and see how it rates on a number of objective measures
          </div>
        </a>
        <a href="" class="tools__item tools__item--s3">
          <img class="tools__item-logo" src="./images/logo-crunch.svg" />
          <div class="tools__item-title">Logo Crunch</div>
          <div class="tools__item-note">
            Make a multi-resolution logo for use in favicons, Android and iOS apps
          </div>
        </a>
        <a href="" class="tools__item tools__item--s4">
          <img class="tools__item-logo" src="./images/font-generator.svg" />
          <div class="tools__item-title">Font Generator</div>
          <div class="tools__item-note">
            Get font pairing ideas for your website, shop or blog
          </div>
        </a>
      </div>
    </div>
  </div>
  
  
  {/* <!-- /End tools block --> */}
  
  
        {/* <!-- footer block --> */}
  <footer class="footer">
    <div class="footer__box">
      <div class="footer__row">
        <div class="footer__section">
          <a href="" target="_blank" class="footer__section-title footer__section-title--style1"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Create your logo</Link></a>
          <div class="footer__section-note">Try MarkBrand for free, no account needed</div>
        </div>
        
        <div class="footer__section">
          <a href=""  class="footer__section-title footer__section-title--style3">Support</a>
          <div class="footer__section-note">Have questions or need help? Start here.</div>
        </div>
        <div class="footer__section">
          <a href="" class="footer__section-title footer__section-title--style2"><Link style={{textDecorationLine:"none", color:"unset"}} to="/tools">Tools</Link></a>
          <div class="footer__section-note">Check out our free tools for color, font and logo design</div>
        </div>
  
        
  
      </div>
  
      <div class="footer__decor">
        <div class="footer__decor-item footer__decor-item--s1"></div>
        <div class="footer__decor-item footer__decor-item--s2"></div>
      </div>
    </div>
  </footer>
  {/* <!-- /End footer block --> */}
  
      </div>
    </div>
  
  
      </div>
      </>
  )
}

export default Tools