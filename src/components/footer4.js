import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import logo from '../assets/logo1.jpg'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={logo}
              className="footer4-logo2"
            />
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2025 Le Khac Quyet</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text2 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text6">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text7">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text5">Cookies Settings</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  cookiesLink: undefined,
  privacyLink: undefined,
  termsLink: undefined,
  logoAlt: 'Logo',
}

Footer4.propTypes = {
  logoSrc: PropTypes.string,
  cookiesLink: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Footer4
