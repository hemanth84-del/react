import React,{useState} from 'react'
import "./Pricing.css"
import Offcanvas from 'react-bootstrap/Offcanvas'
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';




const Pricing = () => {

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
      <Dropdown.Item ><Link to="/tools" style={{textDecorationLine:"none", color:"unset"}}>Tools</Link>  </Dropdown.Item>
        <Dropdown.Item ><Link to="/pricing" style={{textDecorationLine:"none", color:"unset"}}>Pricing</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Support</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Login</Link></Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        
        </Offcanvas.Body>
      </Offcanvas>

    <div class="l-page" id="app">
      

    <aside class="bm-sidebar">
    <div class="bm-sidebar-brand">
      {/* <!-- begin sidebar branding--> */}
      <img class="bm-brand-logo" src="/images/logo.svg" width="160" alt="Brand Logo"/>
      {/* <!-- end sidebar branding--> */}
      <div class="ml-auto">
        {/* <!-- sidebar close for mobile device--> */}
        <a href="#" class="bm-close-sidebar"></a>
      </div>
    </div>
    <div class="bm-sidebar-wrapper js-scrollbar">
      <ul class="menu">
        <li class="menu-item opened">
          <a href="#" class="open-dropdown menu-link">
            <span class="menu-label">
              <span class="menu-name">Menu
                <span class="menu-arrow"></span>
              </span>
            </span>
            <span class="menu-icon rounded-circle">
              <i class="icon-placeholder fe fe-more-horizontal"></i>
            </span>
          </a>
          {/* <!--submenu--> */}
          <ul class="sub-menu" style={{display: "block"}}>
            <li class="menu-item ">
              <a href='/tools/' class=' menu-link'>
                <span class="menu-label">
                  <span class="menu-name">Tools</span>
                </span>
                <span class="menu-icon rounded-circle">
                  <i class="icon-placeholder fe fe-box"></i>
                </span>
              </a>
            </li>
            <li class="menu-item active">
              <a href='/pricing/' class=' menu-link'>
                <span class="menu-label">
                  <span class="menu-name">Pricing</span>
                </span>
                <span class="menu-icon rounded-circle">
                  <i class="icon-placeholder fe fe-dollar-sign"></i>
                </span>
              </a>
            </li>
            <li class="menu-item">
              <a href='' class=' menu-link'>
                <span class="menu-label">
                  <span class="menu-name">Support</span>
                </span>
                <span class="menu-icon rounded-circle">
                  <i class="icon-placeholder fe fe-mail"></i>
                </span>
              </a>
            </li>
            <li class="menu-item">
              <a href='' class=' menu-link'>
                <span class="menu-label">
                  <span class="menu-name">Login</span>
                </span>
                <span class="menu-icon rounded-circle">
                  <i class="icon-placeholder fe fe-log-in"></i>
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  
  
    <div class="page">
      <div class="page__box">
  
        {/* <!-- header block --> */}
  <header class="header  header--pricing  ">
    <div class="header__box">
  
        <h1 class="header__logo">
          
          <a href="/" class="header__logo-link">
            <span class="header__logo-note header__logo-note--b">Brand</span>
            <span class="header__logo-note header__logo-note--m">Mark</span>
          </a>
          
        </h1>
  
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a href="/tools/"
                 class="header__nav-link "
              >Tools</a>
            </li>
            <li class="header__nav-item">
              <a href="/pricing/" class="
                header__nav-link
                 header__nav-link--current
              ">Pricing</a>
            </li>
            <li class="header__nav-item">
              <a href="" class="header__nav-link">Support</a>
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
          <IoMdMenu onClick={handleShow} style={{color:"black"}}/>
        </a>
  
    </div>
  </header>
  {/* <!-- /End header block --> */}
  
  
        {/* <!-- tariffs block --> */}
  <section class="tariffs">
    <div class="tariffs__box">
      <h2 class="tariffs__title">Choose the right package for your brand</h2>
      <ul class="tariffs__list">
        <li class="tariffs__item tariffs__item--c1">
          <div class="tariffs__item-header">
            <div class="tariffs__item-wrapper">
              <div class="tariffs__item-icon">
                <svg class="ico-svg ico-svg__basic">
                  {/* <use xlink:href="/images/icons.svg#basic"></use> */}
                </svg>
              </div>
              
              <h3 class="tariffs__item-title">Basic</h3>
            </div>
            <div class="tariffs__item-price">
              <p class="tariffs__price">
                <span class="tariffs__price-num">25</span>
                <span class="tariffs__price-currency">$</span>
                <span class="tariffs__item-note">one-time</span>
              </p>
            </div>
  
          </div>
          <div class="tariffs__item-content">
            <ul class="tariffs__item-list">
              <li class="tariffs__item-text">Logo files in PNG format</li>
            </ul>
          </div>
        </li>
        <li class="tariffs__item tariffs__item--c2">
          <div class="tariffs__item-header">
            <div class="tariffs__item-wrapper">
              <div class="tariffs__item-icon">
                <svg class="ico-svg ico-svg__desinger">
                  {/* <use xlink:href="/images/icons.svg#desinger"></use> */}
                </svg>
              </div>
              <h3 class="tariffs__item-title">Designer</h3>
            </div>
            <div class="tariffs__item-price">
              <p class="tariffs__price">
                <span class="tariffs__price-num">65</span>
                <span class="tariffs__price-currency">$</span>
                <span class="tariffs__item-note">one-time</span>
              </p>
            </div>
  
          </div>
          <div class="tariffs__item-content">
            <ul class="tariffs__item-list">
              <li class="tariffs__item-text">Logo source files</li>
              <li class="tariffs__item-text">Brand style guide</li>
              <li class="tariffs__item-text">Business card designs</li>
              <li class="tariffs__item-text">Facebook cover</li>
              <li class="tariffs__item-text">Profle &amp; app icons</li>
              <li class="tariffs__item-text">Letterhead designs</li>
            </ul>
            <a href="" target="_blank" class="tariffs__btn">See sample assets</a>
          </div>
        </li>
        <li class="tariffs__item tariffs__item--c3">
          <div class="tariffs__item-header">
            
            <div class="tariffs__item-wrapper">
              <div class="tariffs__item-icon">
                <svg class="ico-svg ico-svg__full">
                  {/* <use xlink:href="/images/icons.svg#full"></use> */}
                </svg>
              </div>
              <h3 class="tariffs__item-title">Enterprise</h3>
            </div>
  
            <div class="tariffs__item-price">
              <p class="tariffs__price">
                <span class="tariffs__price-num">175</span>
                <span class="tariffs__price-currency">$</span>
                <span class="tariffs__item-note">one-time</span>
              </p>
            </div>
  
          </div>
          <div class="tariffs__item-content">
            <ul class="tariffs__item-list">
              <li class="tariffs__item-text">Everything in the designer package</li>
              <li class="tariffs__item-text">Up to 10 fully original concepts created by our design team</li>
            </ul>
          </div>
          
        </li>
      </ul>
    </div>
  </section>
  {/* <!-- /End tariffs block --> */}
  
        {/* <!-- slider block --> */}
  <div class="slider-price">
  
    <div class="slider-price__list" data-simple-slider data-active="0">
  
  
      <div class="slider-price__item  slider-price__item--active">
  
        <div class="slider-price__box">
  
          <div class="slider-price__box-review">
            <div class="slider-price__box-review-box">
              <div class="slider-price__box-review-quote">
                I'm not a designer, when I had to make a logo I found myself staring at a blank screen. Brandmark made the process actually enjoyable
                <svg class="ico-svg ico-svg__quote">
                  {/* <use xlink:href="/images/icons.svg#quote"></use> */}
                </svg>
              </div>
  
              <div class="slider-price__box-user">
                <div class="slider-price__box-user-in">
                  <img src="/images/userpic3.png" srcset="/images/userpic3@2x.png 2x" alt="img" class="slider-price__box-user-ico"/>
                  <div class="slider-price__box-user-info">
                    <div class="slider-price__box-user-name">Valentyna Kuzmych</div>
                    <div class="slider-price__box-user-position">CEO, PubLaw Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="slider-price__box-cover">
            <img class="slider-price__box-cover-img slider-price__box-cover-img--s2" src="/images/slider/slide3.png"
                 srcset="/images/slider/slide3@2x.png 2x" alt="img"/>
          </div>
  
          <div class="slider-price__box-logo slider-price__box-logo--small slider-price__box-logo--s1">
            <div class="slider-price__box-logo-in">
              <div class="slider-price__box-logo-wrap">
                <img src="/images/slider-logos/m1.svg" alt="img"  style={{width: "6.8125em", height: "4.25em",}}/>
              </div>
            </div>
          </div>
  
          <div class="slider-price__box-logo slider-price__box-logo--big">
            <div class="slider-price__box-logo-in">
              <div class="slider-price__box-logo-wrap">
                <img src="/images/slider-logos/m2.svg" alt="img"  style={{width: "9em", height: "1.5em"}}/>
              </div>
            </div>
          </div>
  
        </div>
      </div>
  
      <div class="slider-price__item">
        <div class="slider-price__box">
          <div class="slider-price__box-review">
            <div class="slider-price__box-review-box">
              <div class="slider-price__box-review-quote">
                I tried other logo makers and MarkBrand is the best value. Quality is exceptional and includes a complete branding solution for my company
                <svg class="ico-svg ico-svg__quote">
                  {/* <use xlink:href="/images/icons.svg#quote"></use> */}
                </svg>
                <svg class="ico-svg ico-svg__quote-r">
                  {/* <use xlink:href="/images/icons.svg#quote-r"></use> */}
                </svg>
              </div>
  
              <div class="slider-price__box-user">
                <div class="slider-price__box-user-in">
                  <img src="/images/userpic2.png" srcset="/images/userpic2@2x.png 2x" alt="img" class="slider-price__box-user-ico"/>
                  <div class="slider-price__box-user-info">
                    <div class="slider-price__box-user-name">Courtney Costrino</div>
                    <div class="slider-price__box-user-position">Founder, Noble Tide LLC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slider-price__box-cover">
            <img class="slider-price__box-cover-img slider-price__box-cover-img--s3" src="/images/slider/slide2.png"
                 srcset="/images/slider/slide2@2x.png 2x" alt="img"/>
          </div>
  
  
          <div class="slider-price__box-logo slider-price__box-logo--small slider-price__box-logo--s2">
            <div class="slider-price__box-logo-in">
              <div class="slider-price__box-logo-wrap">
                <img src="/images/slider-logos/l1.svg" alt="img"  style={{width: "6em", height: "6em"}}/>
              </div>
            </div>
          </div>
  
          <div class="slider-price__box-logo slider-price__box-logo--big">
            <div class="slider-price__box-logo-in">
              <div class="slider-price__box-logo-wrap">
                <img src="/images/slider-logos/l2.svg" alt="img"  style={{width: "8em", height: "5.05125em"}}/>
              </div>
            </div>
          </div>
  
        </div>
      </div>
      <div class="slider-price__item">
        <div class="slider-price__box">
          <div class="slider-price__box-review">
            <div class="slider-price__box-review-box">
  
              <div class="slider-price__box-review-quote">
                I was afraid to pay thousands for a logo that didn't turn out right for my business. The MarkBrand team helped me create a logo that I love!
                <svg class="ico-svg ico-svg__quote">
                  {/* <use xlink:href="/images/icons.svg#quote"></use> */}
                </svg>
                <svg class="ico-svg ico-svg__quote-r">
                  {/* <use xlink:href="/images/icons.svg#quote-r"></use> */}
                </svg>
              </div>
  
              <div class="slider-price__box-user">
                <div class="slider-price__box-user-in">
                  <img src="/images/userpic1.png" srcset="/images/userpic1@2x.png 2x" alt="img" class="slider-price__box-user-ico"/>
                  <div class="slider-price__box-user-info">
                    <div class="slider-price__box-user-name">Sarah Locatelli</div>
                    <div class="slider-price__box-user-position">Founder, Loctia</div>
                  </div>
                </div>
              </div>
  
            </div>
  
          </div>
          <div class="slider-price__box-cover">
            <img class="slider-price__box-cover-img slider-price__box-cover-img--s1" src="/images/slider/slide1.png"
                 srcset="/images/slider/slide1@2x.png 2x" alt="img"/>
          </div>
  
  
  
          <div class="slider-price__box-logo slider-price__box-logo--small slider-price__box-logo--s3">
            <div class="slider-price__box-logo-in">
              <div class="slider-price__box-logo-wrap">
                <img src="/images/slider-logos/h1.svg" alt="img"  style={{width: "6.8125em", height: "4.25em"}}/>
              </div>
            </div>
          </div>
  
          <div class="slider-price__box-logo slider-price__box-logo--big">
            <div class="slider-price__box-logo-in">
              <div class="slider-price__box-logo-wrap">
                <img src="./images/h2.svg" alt="img"  style={{width: "11.875em", height: "2.5em"}}/>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
    <div class="slider-price__page">
      <div class="slider-price__page-box">
        <div class="slider-price__page-item slider-price__page-item--active" data-index="0"></div>
        <div class="slider-price__page-item" data-index="1"></div>
        <div class="slider-price__page-item" data-index="2"></div>
      </div>
    </div>
  </div>
  {/* <!-- /End slider block --> */}

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  
        {/* <!-- features block --> */}
  <div class="features-price">
    <div class="features-price__box">
  
      <div class="features-price__list">
  
        <div class="features-price__item features-price__item--s1">
          <div class="features-price__item-cover">
            <svg class="ico-svg ico-svg__s1 features-price__item-ico">
                {/* <use xlink:href="/images/icons.svg#s1"></use> */}
            </svg>
          </div>
          <div class="features-price__item-box">
            <div class="features-price__item-title">No more designer anxiety</div>
            <div class="features-price__item-note">Get your logo instantly, not in weeks.</div>
          </div>
        </div>
  
        <div class="features-price__item features-price__item--s2">
          <div class="features-price__item-cover">
            <svg class="ico-svg ico-svg__s2 features-price__item-ico">
                {/* <use xlink:href="/images/icons.svg#s2"></use> */}
            </svg>
          </div>
          <div class="features-price__item-box">
            <div class="features-price__item-title">Need a tweak to your design?</div>
            <div class="features-price__item-note">We’ll do it for you, absolutely free</div>
          </div>
        </div>
  
        <div class="features-price__item features-price__item--s3">
          <div class="features-price__item-cover">
            <svg class="ico-svg ico-svg__s3 features-price__item-ico">
                {/* <use xlink:href="/images/icons.svg#s3"></use> */}
            </svg>
          </div>
          <div class="features-price__item-box">
            <div class="features-price__item-title">No monthly charges</div>
            <div class="features-price__item-note">Pay once, get access to our branding tools forever.</div>
          </div>
        </div>
  
  
        <div class="features-price__item features-price__item--s4">
          <div class="features-price__item-cover">
            <svg class="ico-svg ico-svg__s4 features-price__item-ico">
                {/* <use xlink:href="/images/icons.svg#s4"></use> */}
            </svg>
          </div>
          <div class="features-price__item-box">
            <div class="features-price__item-title">Full copyright included</div>
            <div class="features-price__item-note">For use in commercial and personal projects</div>
          </div>
        </div>
  
        <div class="features-price__item features-price__item--s5">
          <div class="features-price__item-cover">
            <svg class="ico-svg ico-svg__s5 features-price__item-ico">
                {/* <use xlink:href="/images/icons.svg#s5"></use> */}
            </svg>
          </div>
          <div class="features-price__item-box">
            <div class="features-price__item-title">Unlimited revisions</div>
            <div class="features-price__item-note">Modify your logo at any time, even after purchase</div>
          </div>
        </div>
  
      </div>
  
      <div class="features-price__action">
        <div class="features-price__action-title">Create your unique logo design</div>
        <div class="features-price__action-note">generate unlimited logos for free</div>
  
        <a class="features-price__action-btn ui-btn ui-btn--size-normal ui-btn--theme-normal ui-btn--skin-normal" href="" target="_blank" tabindex="0"><span class="ui-btn__box" tabindex="-1"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Create my logo</Link></span></a>
      </div>
  
    </div>
  </div>
  {/* <!-- /End features block --> */}
  
  
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

export default Pricing