/* eslint-disable react/no-array-index-key, react/no-danger */
import React, { useState, useEffect, useRef } from 'react';
// import { Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import GlideComponent from 'components/carousel/GlideComponent';
import { buyUrl, adminRoot } from 'constants/defaultValues';
import image from 'assets/img/landing-page/banner_img.png';
import article from 'assets/img/landing-page/article.png'
import article2 from 'assets/img/landing-page/article2.png'
// import imageForMobileView from 'assets/img/landing-page/checking.png';
import classes from 'assets/css/cutom_css/LandingPage/home.module.css';
import Review from './components/Review';

const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    600: { perView: 1 },
    992: { perView: 2 },
    1200: { perView: 3 },
  },
};

const slideItems = [
  {
    icon: 'iconsminds-mouse-3',
    title: 'Right Click Menu',
    detail:
      'Increases overall usability of the project by providing additional actions menu.',
  },
  {
    icon: 'iconsminds-electric-guitar',
    title: 'Video Player',
    detail:
      'Carefully themed multimedia players powered by Video.js library with Youtube support.',
  },
  {
    icon: 'iconsminds-keyboard',
    title: 'Keyboard Shortcuts',
    detail:
      'Easily configurable keyboard shortcuts plugin that highly improves user experience.',
  },
  {
    icon: 'iconsminds-three-arrow-fork ',
    title: 'Two Panels Menu',
    detail:
      'Three states two panels icon menu that looks good, auto resizes and does the job well.',
  },
  {
    icon: 'iconsminds-deer',
    title: 'Icons Mind',
    detail:
      '1040 icons in 53 different categories, designed pixel perfect and ready for your project.',
  },
  {
    icon: 'iconsminds-palette',
    title: '20 Color Schemes',
    detail:
      'Colors, icons and design harmony that creates excellent themes to cover entire project.',
  },
  {
    icon: 'iconsminds-air-balloon-1',
    title: '3 Applications',
    detail:
      'Applications that mostly made of components are the way to get started to create something similar.',
  },
  {
    icon: 'iconsminds-resize',
    title: 'Extra Responsive',
    detail:
      'Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.',
  },
];

const features = [
  {
    title: 'BUYERS',
    img:article,
    detail:
      '<b>Increasing traffic, leads and sales:</b> Placing your content on relevant websites will help you reach your target audience, bring more loyal customers & boost your sales.<br><br><b>Backlinks from sites with real traffic</b>: Get backlinks from relevant websites which will pull organic and relevant traffic who will be interested in your products/services.<br /><br /><b>Greater savings in the budget:</b> Guest blogging is considered to be a cheaper alternative to the famous paid advertising approach.<br/><br/><b>As a Buyer, Never Pay Until You’re 100% Satisfied</b><br/><br/><b> Higher rankings on SERP: </b>Getting link placed on websites will help you skyrocket your ranking on google.',
  },
  {
    title: 'PUBLISHERS',
    img:article2,
    detail:
      '<b>Opportunity to control prices for your services:</b> Our platform allows you to set your own prices for creating and placing content on your website.<br/><br/><b> Control over your preferred tasks:</b>It is your right to accept or reject any tasks without any coercion<br/><br/><b>Authority to raise voice in case of any violation related to task:</b>In case the buyer is giving unnecessary & repeated revisions, you have the right to raise voice and complain to us<br/><br/><b>Free & unique data/ content:</b>Great opportunity to receive endless content from buyers and make money by placing them on your website.<br/><br/><b> Get paid every week:</b>Publishers get paid every Monday via Paypal.',
  },
  
];

// const layouts = [
//   {
//     title: 'Menu Default',
//     img: '/assets/img/landing-page/layouts/menu-default.jpg',
//   },
//   {
//     title: 'Menu Subhidden',
//     img: '/assets/img/landing-page/layouts/menu-subhidden.jpg',
//   },
//   {
//     title: 'Menu Hidden',
//     img: '/assets/img/landing-page/layouts/menu-hidden.jpg',
//   },
//   {
//     title: 'Image List',
//     img: '/assets/img/landing-page/layouts/image-list.jpg',
//   },
//   {
//     title: 'Thumb List',
//     img: '/assets/img/landing-page/layouts/thumb-list.jpg',
//   },
//   { title: 'Data List', img: '/assets/img/landing-page/layouts/data-list.jpg' },
//   { title: 'Details', img: '/assets/img/landing-page/layouts/details.jpg' },
//   {
//     title: 'Authentication',
//     img: '/assets/img/landing-page/layouts/authentication.jpg',
//   },
//   {
//     title: 'Search Results',
//     img: '/assets/img/landing-page/layouts/search-result.jpg',
//   },
//   {
//     title: 'Single Page Application',
//     img: '/assets/img/landing-page/layouts/spa.jpg',
//   },
//   {
//     title: 'Data List App Menu Hidden',
//     img: '/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg',
//   },
//   { title: 'Tabs', img: '/assets/img/landing-page/layouts/tabs.jpg' },
// ];

// const applications = [
//   {
//     title: 'Survey',
//     path: `${adminRoot}/applications/survey`,
//     img: '/assets/img/landing-page/applications/survey.jpg',
//   },
//   {
//     title: 'Chat',
//     path: `${adminRoot}/applications/chat`,
//     img: '/assets/img/landing-page/applications/chat.jpg',
//   },
//   {
//     title: 'Todo',
//     path: `${adminRoot}/applications/todo`,
//     img: '/assets/img/landing-page/applications/todo.jpg',
//   },
// ];

// const themes = [
//   { title: 'Navy Blue', class: 'bluenavy' },
//   { title: 'Olympic Blue', class: 'blueolympic' },
//   { title: 'Yale Blue', class: 'blueyale' },
//   { title: 'Moss Green', class: 'greenmoss' },
//   { title: 'Lime Green', class: 'greenlime' },
//   { title: 'Carrot Orange', class: 'carrotorange' },
//   { title: 'Ruby Red', class: 'rubyred' },
//   { title: 'Monster Purple', class: 'monsterpurple' },
//   { title: 'Steel Grey', class: 'steelgrey' },
//   { title: 'Granola Yellow', class: 'granolayellow' },
// ];

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  // const [activeTab, setActiveTab] = useState(0);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = `${homeRect.x - 580}px`;

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  // const toggle = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <a
          className="logo-mobile c-pointer"
          href="#scroll"
          onClick={(event) => scrollTo(event, 'home')}
        >
          <span />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'features')}
            >
              FEATURES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'layouts')}
            >
              LAYOUTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'components')}
            >
              COMPONENTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'apps')}
            >
              APPS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'themes')}
            >
              THEMES
            </a>
          </li>
          <li className="nav-item">
            <div className="separator" />
          </li>
          <li className="nav-item text-center">
            <a
              className="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              rel="noopener noreferrer"
              href={buyUrl}
            >
              Log In
            </a>
          </li>
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a
                className="navbar-logo pull-left c-pointer"
                href="#scroll"
                onClick={(event) => scrollTo(event, 'home')}
              >
                <span className="white" />
                <span className="dark" />
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'features')}
                  >
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'layouts')}
                  >
                    LAYOUTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'components')}
                  >
                    COMPONENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'apps')}
                  >
                    APPS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'themes')}
                  >
                    THEMES
                  </a>
                </li>
                <li className="nav-item pl-4">
                  <a
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={buyUrl}
                  >
                    Log In
                  </a>
                </li>
              </ul>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <span
                className="mobile-menu-button"
                onClick={(event) => {
                  setShowMobileMenu(!showMobileMenu);
                  event.stopPropagation();
                }}
              >
                <i className="simple-icon-menu" />
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img
                      alt="mobile hero"
                      className={classes.img}
                      src={image}
                    />
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-5">
                  <div >
                    <div className="display-1">
                      <div className={classes['main-heading']}>
                        <b>GUEST POSTING SERVICE</b>
                      </div>
                    </div>
                    <p className="white mb-5">
                      Get quality posts from relevant sites with traffic: 45,511
                      publishers & outreachers
                      {/* <br />
                      <br />
                      We used same design language for components, layouts, apps
                      and other parts of the template. <br />
                      <br />
                      Hope you enjoy it! */}
                    </p>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <NavLink
                      className="btn btn-light btn-xl mr-2 mb-2"
                      href={adminRoot}
                      target="_blank"
                    >
                      <b>SIGN UP</b><i className="simple-icon-arrow-right" />
                      </NavLink>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-7  d-none d-sm-block">
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}

                  <img alt="heroL" src={image}  className={classes.img}/>
                </div>
              </div>

              <div className="row">
                <div className="col-12 p-0">
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {slideItems.map((f, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={`slide_${index}`} className="card">
                          <Review/>
                          {/* <div className="card-body text-center">

                            ////////////////////////////////////////////
                            <div>
                              <i className={`${f.icon} large-icon`} />
                              <h5 className="mb-3 font-weight-semibold">
                                {f.title}
                              </h5>
                            </div>
                            <div>
                              <p className="detail-text">{f.detail}</p>
                            </div>
                            ///////////////////////////////////////////////
                          </div> */}
                        </div>
                      ))}
                    </GlideComponent>
                  </div>
                </div>
              </div>

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                  onClick={(event) => scrollTo(event, 'features')}
                >
                  <i className="simple-icon-arrow-down" />
                </a>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container" id="features">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Features At a Glance</h1>
                  {/* <p>
                    We tried to create an admin theme that we would like to use
                    ourselves so we listed our priorities. We would like to have
                    a theme that is not over complicated to use, does the job
                    well, contains must have omponents and looks really nice.
                  </p> */}
                </div>
              </div>
              {features.map((feature, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`feature_${i}`}>
                  {i % 2 === 0 && (
                    <div className="row feature-row mb-5 mt-5">
                      <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                        <div className="feature-text-container">
                          <h2><b>{feature.title}</b></h2>
                          <div
                            dangerouslySetInnerHTML={{ __html: feature.detail }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative mb-5 mt-5">
                        <img
                          alt={feature.title}
                          src={feature.img}
                          // className="feature-image-right feature-image-charts position-relative"
                          className={classes.img}
                        />
                      </div>
                    </div>
                  )}
                  {i % 2 === 1 && (
                    <div className="row feature-row mb-5 mt-5">
                      <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1 mb-5 mt-5">
                        <img
                          alt={feature.title}
                          src={feature.img}
                          className={classes.img}
                        />
                      </div>
                      <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                        <div className="feature-text-container">
                        <h2><b>{feature.title}</b></h2>
                          <div
                            dangerouslySetInnerHTML={{ __html: feature.detail }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* <div className="section background">
            <div className="container" id="layouts">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Structures &amp; Layouts</h1>
                  <p>
                    We did our best to create layouts for various needs that
                    developers might have and best experience for users.
                    <br />
                    They are clean and slick. They function well and look good
                    at the same time.
                  </p>
                </div>
              </div>

              <div className="row pt-5">
                {layouts.map((l, index) => (
                  <div
                    key={`layout_${index}`}
                    className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"
                  >
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt={l.title}
                      src={l.img}
                    />
                    <h4 className="text-center">{l.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="components">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Components</h1>
                  <p>
                    We used most popular and well managed open source components
                    with bootstrap components. Combined them into even more
                    useful ones. Themed them with same design principles and
                    created a design harmony between components and layouts.
                    <br />
                    <br />
                    From carousels to charts, switches to list we tried to
                    provide components that we like to use on our development
                    processes.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="components-image mb-5 pb-5"
              alt="Components"
              src="/assets/img/landing-page/components.jpg"
            />
          </div>

          <div className="section background">
            <div className="container" id="apps">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
                  <h1>Applications</h1>
                  <p className="section-text">
                    With the help of components and layouts, we created four
                    different applications. They are a good way to get you
                    started if you want to build something similar.
                  </p>
                </div>
              </div>
              <div className="row screenshots">
                <div className="col-12 text-center mb-4">
                  <Nav tabs className="justify-content-center">
                    {applications.map((app, index) => (
                      <NavItem key={`app_nav_${index}`}>
                        <a
                          href="#tab"
                          className={classnames({
                            'nav-link': true,
                            active: activeTab === index,
                          })}
                          onClick={(event) => {
                            event.preventDefault();
                            toggle(index);
                          }}
                        >
                          {app.title}
                        </a>
                      </NavItem>
                    ))}
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    {applications.map((app, index) => (
                      <TabPane key={`app_tab_${index}`} tabId={index}>
                        <NavLink to={app.path}>
                          <img
                            alt={app.title}
                            src={app.img}
                            className="app-image"
                          />
                        </NavLink>
                      </TabPane>
                    ))}
                  </TabContent>
                </div>
              </div>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="themes">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Themes</h1>
                  <p>
                    We carefully choosed colors and created 10 different themes
                    with dark and light versions. You may also create your own
                    themes easily since all the theme related styling is managed
                    by Sass variables.
                  </p>
                </div>
              </div>
              {themes.map((t, index) => (
                <div key={`theme_${index}`} className="row mb-5">
                  <div className="col-12 text-center mb-3">
                    <h4 className="text-center">{t.title}</h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                    <div className="depth-2 color-container">
                      {['left', 'center', 'right'].map((align, i) => (
                        <div
                          key={`light_${index}_${i}`}
                          className={`${t.class}-light-${i + 1} color-${align}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="depth-2 color-container">
                      {['left', 'center', 'right'].map((align, i) => (
                        <div
                          key={`dark_${index}_${i}`}
                          className={`${t.class}-dark-${i + 1} color-${align}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section background background-no-bottom mb-0 pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Enjoying so Far?</h1>
                  <p>
                    Purchase Gogo to get a fresh start with your new project.
                  </p>
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div className="text-center mb-3">
                    <a
                      className="btn btn-secondary btn-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={buyUrl}
                    >
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">2021 © ColoredStrategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
