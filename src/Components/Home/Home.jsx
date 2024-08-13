import React,{useState} from 'react'
import "./Home.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { IoMdMenu } from "react-icons/io";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Dropdown from 'react-bootstrap/Dropdown';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Oval } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import axios from "axios";




const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false,
    });
 
    const toDateFunction = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const WeekDays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
            }`;
        return date;
    };
 
    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            await axios
                .get(url, {
                    params: {
                        q: input,
                        units: 'metric',
                        appid: api_key,
                    },
                })
                .then((res) => {
                    console.log('res', res);
                    setWeather({ data: res.data, loading: false, error: false });
                })
                .catch((error) => {
                    setWeather({ ...weather, data: {}, error: true });
                    setInput('');
                    console.log('error', error);
                });
        }
    };

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

      <Dropdown.Menu >
        <Dropdown.Item ><Link to="/tools" style={{textDecorationLine:"none", color:"unset"}}>Tools</Link>  </Dropdown.Item>
        <Dropdown.Item ><Link to="/pricing" style={{textDecorationLine:"none", color:"unset"}}>Pricing</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Support</Dropdown.Item>
        <Dropdown.Item href="#/action-4"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Login</Link></Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        
        </Offcanvas.Body>
      </Offcanvas>

    <div class="l-page" id="app">
      <div class="page">
      <header class="header  ">
  <div class="header__box">

      <h1 class="header__logo">
        
        <a href="/" class="header__logo-link">
        <span class="header__logo-note header__logo-note--m">Mark</span>
          <span class="header__logo-note header__logo-note--b">Brand</span>
        </a>
        
      </h1>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="/tools/" class="header__nav-link ">Tools</a>
          </li>
          <li class="header__nav-item">
            <a href="/pricing/" class="
              header__nav-link
              
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
        {/* <svg class="ico-svg ico-svg__menu">
          <use xlink:href="/images/icons.svg#menu"></use>
        </svg> */}
        <IoMdMenu onClick={handleShow} style={{color:"white"}}/>
      </a>

  </div>
</header>


      <section class="hero">
  <div class="hero__box">
    <div class="hero__box-main">

      <div class="hero__logo">
        <a href="#3" class="hero__logo-link">
        <span class="hero__logo-note hero__logo-note--m">Mark</span>
          <span class="hero__logo-note hero__logo-note--b">Brand</span>
        </a>
      </div>

      <h2 class="hero__title">Create a unique, professional logo for your business</h2>
      <div class="hero__note">
      Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more      </div>

      <div class="hero__action">
				  <a class="hero__action-btn ui-btn ui-btn--size-normal ui-btn--theme-primary ui-btn--skin-normal" href="" target="_blank" tabindex="0"><span class="ui-btn__box" tabindex="-1"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Create my logo</Link></span></a>
			  </div>
    </div>
  </div>
</section>

{/* <AwesomeSlider>
    <div><img src='./images/shadow-btn1@2x.png  ' alt="" /></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>

  </AwesomeSlider> */}


  <div class="logos">
  <div class="logos__box">
    <ul class="logos__list">
      <li class="logos__item">
        <img src="./images/l1.png" data-rjs="/images/logos/l1@2x.png" style={{width: "7.063em"}} alt="img" class="logos__img"/>
      </li>
      <li class="logos__item">
        <img src="./images/l2.png" data-rjs="/images/logos/l2@2x.png" style={{width: "4.625em"}} alt="img" class="logos__img"/>
      </li>
      <li class="logos__item">
        <img src="/images/l3.png" data-rjs="/images/logos/l3@2x.png" style={{width: "4.875em"}} alt="img" class="logos__img"/>
      </li>
      <li class="logos__item">
        <img src="/images/l4.png" data-rjs="/images/logos/l4@2x.png" style={{width: "7.563em"}} alt="img" class="logos__img"/>
      </li>
      <li class="logos__item">
        <img src="/images/l5.png" data-rjs="/images/logos/l5@2x.png" style={{width: "9.063em"}} alt="img" class="logos__img"/>
      </li>
    </ul>
  </div>
</div>

{/* <OwlCarousel className='owl-theme' nav>
    <div class='item'>
        
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
</OwlCarousel> */}


<div class="build">
  <div class="build__box">
    <div class="build__box-row">
      <div class="build__cover">
        <img src="./images/i1.jpg" srcset="/images/i1@2x.jpg 2x" class="build__cover-img" alt="img"/>
        <div class="build__cover-decor">
          <svg class="ico-svg ico-svg--planet">
              {/* <use xlink:href="/images/icons.svg#planet"></use> */}
          </svg>
        </div>
        <div class="build__cover-decor2"></div>
      </div>
      <div class="build__main">

        <div class="build__main-title">
          Build a beautiful brand on time and on budget
        </div>

        <div class="build__main-note">
          Kickstart your business with thousands of <b>ready-to-use</b> design assets.
        </div>

        <div class="build__main-list">

          <div class="build__main-list-item">
            <svg class="ico-svg ico-svg__doc">
                {/* <use xlink:href="/images/icons.svg#doc"></use> */}
            </svg>
            <div class="build__main-list-item-note">Logo design files</div>
          </div>
          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__profile">
                  {/* <use xlink:href="/images/icons.svg#profile"></use> */}
              </svg>
              <div class="build__main-list-item-note">Social profile icons</div>
            </div>
          </div>
          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__card">
                  {/* <use xlink:href="/images/icons.svg#card"></use> */}
              </svg>
              <div class="build__main-list-item-note">Business card designs</div>
            </div>
          </div>
          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__favicon">
                  {/* <use xlink:href="/images/icons.svg#favicon"></use> */}
              </svg>
              <div class="build__main-list-item-note">Animated designs</div>
            </div>
          </div>
          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__paper">
                  {/* <use xlink:href="/images/icons.svg#paper"></use> */}
              </svg>
              <div class="build__main-list-item-note">Letterhead templates</div>
            </div>
          </div>

          {/* <!--<div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__logo">
                  <use xlink:href="/images/icons.svg#logo"></use>
              </svg>
              <div class="build__main-list-item-note">Logo mockups</div>
            </div>
          </div>--> */}

          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__cover">
                  {/* <use xlink:href="/images/icons.svg#cover"></use> */}
              </svg>
              <div class="build__main-list-item-note">Social media designs</div>
            </div>
          </div>
          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__presentation">
                  {/* <use xlink:href="/images/icons.svg#presentation"></use> */}
              </svg>
              <div class="build__main-list-item-note">Presentation templates</div>
            </div>
          </div>
          <div class="build__main-list-item">
            <div class="build__main-list-item-ico">
              <svg class="ico-svg ico-svg__guide">
                  {/* <use xlink:href="/images/icons.svg#guide"></use> */}
              </svg>
              <div class="build__main-list-item-note">Brand guide</div>
            </div>
          </div>
        </div>

        <div class="build__main-action">
          <a href="" target="_blank" class="build__main-action-btn ui-btn ui-btn--size-normal ui-btn--theme-light">
            <span class="ui-btn__box" tabindex="-1">
              <svg class="ico-svg ico-svg--out">
                {/* <use xlink:href="/images/icons.svg#out"></use> */}
              </svg>
              See example assets
            </span>
          </a>

        </div>


      </div>

    </div>

  </div>
</div>

<div class="chat">
  <div class="chat__box">

    <div class="chat__box-line">
      <div class="chat__main">
        <div class="chat__main-title">The only logo maker with free customization</div>
        <div class="chat__main-note">We’ll personally help you customize your logo with the purchase of any package.</div>
      </div>

      <div class="chat__phone">

        <div class="chat__list">

          <div class="chat__list-item chat__list-item--s1">
            <img src="./images/userpic1.png" srcset="/images/userpic4@2x.png 2x" alt="customer" class="chat__list-item-userpic"/>
            <div class="chat__list-item-note">
              Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline
            </div>
          </div>

          <div class="chat__list-item chat__list-item--s2">
            <img src="./images/userpic5.png" srcset="/images/userpic5@2x.png 2x" alt="Jack" class="chat__list-item-userpic"/>
            <div class="chat__list-item-note">
              <div class="chat__list-item-extra">
                <img src="./images/la.png" srcset="/images/logos2/la@2x.png 2x" alt="Monkspace" class="chat__list-item-extra-img"/>
                <div class="chat__list-item-txt">
                  Sure thing, how does this look?
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</div>


<div class="instantly">
  <div class="instantly__box">
    <div class="instantly__main">
      <div class="instantly__title">Instantly customize and export</div>
      <div class="instantly__note">Right in your browser, no designer or software needed</div>
    </div>
    <div class="instantly__preview">
      <div class="instantly__preview-box">
        <img src="./images/settings.gif" alt="img" class="instantly__preview-img"/>
      </div>
      <div class="instantly__preview-note">
        <div class="instantly__preview-info instantly__preview-info--s1">
          <div class="instantly__preview-title">Export to all major formats</div>
          <div class="instantly__preview-text">Including SVG, EPS, PNG and PDF</div>
        </div>
        <div class="instantly__preview-info instantly__preview-info--s2">
          <div class="instantly__preview-title">Adjust text and image size</div>
          <div class="instantly__preview-text">Perfecly sized for web and print</div>
        </div>

        <div class="instantly__preview-info instantly__preview-info--s3">
          <div class="instantly__preview-title">Easily edit and customize</div>
          <div class="instantly__preview-text">Double click to edit text</div>
        </div>

      </div>
    </div>

  </div>
</div>


<section class="creations">

  <div class="creations__box">


    <div class="creations__list">


      <div class="creations__item creations__item--info">
        <div class="creations__main">
          <div class="creations__main-title">Latest customer creations</div>
          <div class="creations__main-note">See why over 108,704 users have
            created a logo with MarkBrand.io</div>
        </div>
      </div>


      <div class="creations__item creations__item--s1">
        <img class="creations__item-img" src="./images/i0.svg" alt="CIELA MONTESSORI"/>
      </div>

      <div class="creations__item creations__item--s2">
        <img class="creations__item-img" src="./images/i2.jpg" srcset="/images/i2@2x.jpg 2x" alt="No BS"/>
      </div>

      <div class="creations__item creations__item--s3">
        <img class="creations__item-img" src="./images/i1.svg" alt="The Local Know"/>
      </div>

      <div class="creations__item creations__item--s4">
        <img class="creations__item-img" src="./images/i2.svg" alt="YOUTUI"/>
      </div>

      <div class="creations__item creations__item--s5">
        <img class="creations__item-img" src="./images/i3.svg" alt="Monkspace"/>
      </div>

      <div class="creations__item creations__item--s6">
        <img class="creations__item-img" src="./images/i4.svg" alt="COCO"/>
      </div>

      <div class="creations__item creations__item--s7">
        <img class="creations__item-img" src="./images/i5.svg" alt="funfit"/>
      </div>

      <div class="creations__item creations__item--s8">
        <img class="creations__item-img" src="./images/i6.svg" alt="GOOMOE"/>
      </div>

      <div class="creations__item creations__item--s9">
        <img class="creations__item-img" src="./images/i7.svg" alt="Wooly Waif"/>
      </div>

      <div class="creations__item creations__item--s10">
        <img class="creations__item-img" src="./images/i8.svg" alt="PathBase"/>
      </div>

      <div class="creations__item creations__item--s11">
        <img class="creations__item-img" src="./images/i9.svg" alt="BENSON"/>
      </div>
      <div class="creations__item creations__item--s12">
        <img class="creations__item-img" src="./images/i10.svg" alt="Lizzty"/>
      </div>
      <div class="creations__item creations__item--s13">
        <img class="creations__item-img" src="./images/i12.svg" alt="lighten"/>
      </div>
      <div class="creations__item creations__item--s14"></div>
      <div class="creations__item creations__item--s15">
        <img class="creations__item-img" src="./images/i11.svg" alt="COLONETICS"/>
      </div>
      <div class="creations__item creations__item--s16"></div>

    </div>
  </div>

</section>


<div class="features">
  <div class="features__box">

    <div class="features__list">

      <div class="features__item features__item--s1">
        <div class="features__item-cover">
          <svg class="ico-svg ico-svg__s1 features__item-ico">
              {/* <use xlink:href="/images/icons.svg#s1"></use> */}
          </svg>
        </div>
        <div class="features__item-box">
          <div class="features__item-title">No more designer anxiety</div>
          <div class="features__item-note">Get your logo instantly, not in weeks.</div>
        </div>
      </div>

      <div class="features__item features__item--s2">
        <div class="features__item-cover">
          <svg class="ico-svg ico-svg__s2 features__item-ico">
              {/* <use xlink:href="/images/icons.svg#s2"></use> */}
          </svg>
        </div>
        <div class="features__item-box">
          <div class="features__item-title">Need a tweak to your design?</div>
          <div class="features__item-note">We’ll do it for you, absolutely free</div>
        </div>
      </div>

      <div class="features__item features__item--s3">
        <div class="features__item-cover">
          <svg class="ico-svg ico-svg__s3 features__item-ico">
              {/* <use xlink:href="/images/icons.svg#s3"></use> */}
          </svg>
        </div>
        <div class="features__item-box">
          <div class="features__item-title">No monthly charges</div>
          <div class="features__item-note">Pay once, get access to our branding tools forever.</div>
        </div>
      </div>


      <div class="features__item features__item--s4">
        <div class="features__item-cover">
          <svg class="ico-svg ico-svg__s4 features__item-ico">
              {/* <use xlink:href="/images/icons.svg#s4"></use> */}
          </svg>
        </div>
        <div class="features__item-box">
          <div class="features__item-title">Full copyright included</div>
          <div class="features__item-note">For use in commercial and personal projects</div>
        </div>
      </div>

      <div class="features__item features__item--s5">
        <div class="features__item-cover">
          <svg class="ico-svg ico-svg__s5 features__item-ico">
              {/* <use xlink:href="/images/icons.svg#s5"></use> */}
          </svg>
        </div>
        <div class="features__item-box">
          <div class="features__item-title">Unlimited revisions</div>
          <div class="features__item-note">Modify your logo at any time, even after purchase</div>
        </div>
      </div>

    </div>

    <div class="features__action">
      <div class="features__action-title">Create your unique logo design</div>
      <div class="features__action-note">generate unlimited logos for free</div>

      <a class="features__action-btn ui-btn ui-btn--size-normal ui-btn--theme-normal ui-btn--skin-normal" href="" target="_blank" tabindex="0"><span class="ui-btn__box" tabindex="-1"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Create my logo</Link></span></a>
    </div>

  </div>
</div>

<div className="App ">
            <h2 className="app-name">
                Check Weather Conditon Based on City
            </h2>
            <div className="search-bar">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Enter City Name.."
                    name="query"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={search}
                />
            </div>
            {weather.loading && (
                <>
                    <br />
                    <br />
                    <Oval type="Oval" color="black" height={100} width={100} />
                </>
            )}
            {weather.error && (
                <>
                    <br />
                    <br />
                    <span className="error-message">
                        <FontAwesomeIcon icon={faFrown} />
                        <span style={{ fontSize: '20px' }}>City not found</span>
                    </span>
                </>
            )}
            {weather && weather.data && weather.data.main && (
                <div>
                    <div className="city-name">
                        <h2>
                            {weather.data.name}, <span>{weather.data.sys.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{toDateFunction()}</span>
                    </div>
                    <div className="icon-temp">
                        <img
                            className=""
                            src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                            alt={weather.data.weather[0].description}
                        />
                        {Math.round(weather.data.main.temp)}
                        <sup className="deg">°C</sup>
                    </div>
                    <div className="des-wind">
                        <p>{weather.data.weather[0].description.toUpperCase()}</p>
                        <p>Wind Speed: {weather.data.wind.speed}m/s</p>
                    </div>
                </div>
            )}
        </div>


<footer class="footer">
  <div class="footer__box">
    <div class="footer__row">
      <div class="footer__section">
        <a href="" target="_blank" class="footer__section-title footer__section-title--style1"><Link style={{textDecorationLine:"none", color:"unset"}} to="/log">Create my logo</Link></a>
        <div class="footer__section-note">Try MarkBrand for free, no account needed</div>
      </div>
      
      <div class="footer__section">
        <a href="" class="footer__section-title footer__section-title--style3">Support</a>
        <div class="footer__section-note">Have questions or need help? Start here.</div>
      </div>
      <div class="footer__section">
        <a href="" class="footer__section-title footer__section-title--style2"><Link style={{textDecorationLine:"none", color:"unset"}} to="/tools">Tools</Link></a>
        <div class="footer__section-note">Check out our free tools for color, font and logo design</div>
      </div>

      <div class="footer__section">
        <a href="" target="_blank" class="footer__section-title" style={{color: "#8e999b", marginRight: "3em"}}>Terms of service</a>
      </div>

      <div class="footer__section">
        <a href="" target="_blank" class="footer__section-title" style={{color: "#8e999b"}}>Privacy policy</a>
      </div>

    </div>

    <div class="footer__decor">
      <div class="footer__decor-item footer__decor-item--s1"></div>
      <div class="footer__decor-item footer__decor-item--s2"></div>
    </div>
  </div>
</footer>



      </div>
    </div>
    </>
  )
}

export default Home