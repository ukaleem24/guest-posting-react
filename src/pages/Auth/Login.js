import React from 'react';
import classes from 'assets/css/cutom_css/auth-css/login.module.css';
import image from 'assets/img/login/attachment.png';
import { Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Login = () => {
  const isSmallerThan62 = useMediaQuery({
    query: '(max-width: 62rem)',
  });
  return (
    <>
      <div className={classes.container}>
        <Row>
          <Col>
            <a href="Dashboard.Default.html" className={classes.logo}>
              <span className="logo-single" />
            </a>
          </Col>
          {!isSmallerThan62 && (
            <Col>
              <h6 className={classes['signup-container']}>
                New User?<NavLink className={classes.signup}> Sign Up</NavLink>
              </h6>
            </Col>
          )}
        </Row>

        <Row>
          <Col className={classes['img-container']} lg={5}>
            <img alt="anything" src={image} className={classes.img} />
          </Col>
          <Col className={classes['data-col']} lg={7}>
            <div>
              <h1>
                <b>Welcome Back!</b>
              </h1>
              <h6 className="mb-4">Login</h6>
              <form>
                <h6 className="form-group has-float-label mb-4">
                  <input className="form-control" />
                  <span>E-mail</span>
                </h6>

                <h6 className="form-group has-float-label mb-4">
                  <input
                    className="form-control"
                    type="password"
                    placeholder=""
                  />
                  <span>Password</span>
                </h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Forget password?</p>
                  <button
                    className="btn btn-primary btn-lg btn-shadow"
                    type="submit"
                  >
                    LOGIN
                  </button>
                </div>
                {isSmallerThan62 && (
                  <div>
                    <h6 className={classes['signup-container-mobile']}>
                      New User?
                      <NavLink className={classes.signup}> Sign Up</NavLink>
                    </h6>
                  </div>
                )}
              </form>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="row feature-row mb-5 mt-5">
                      <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1 mb-5 mt-5">
                        <img
                          alt="anything"
                          src={image}
                          className={classes.img}
                        />
                      </div>
                      <div className="form-side">
                        <a href="Dashboard.Default.html">
                          <span className="logo-single" />
                        </a>
                        <h6 className="mb-4">Login</h6>
                        <form>
                          <h6 className="form-group has-float-label mb-4">
                            <input className="form-control" />
                            <span>E-mail</span>
                          </h6>

                          <h6 className="form-group has-float-label mb-4">
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
                            />
                            <span>Password</span>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p>Forget password?</p>
                            <button
                              className="btn btn-primary btn-lg btn-shadow"
                              type="submit"
                            >
                              LOGIN
                            </button>
                          </div>
                        </form>
                      </div>
                    </div> */}
    </>
  );
};

export default Login;
