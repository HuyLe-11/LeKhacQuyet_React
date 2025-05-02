import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero21.css'

const Hero21 = (props) => {
  return (
    <div className="hero21-header5 thq-section-padding">
      <img
        alt={props.image1Alt}
        src="https://res.cloudinary.com/dqnsjiku6/image/upload/v1745951020/lekhacquyet_selfpic_ypf8ss.jpg"
        className="hero21-image"
      />
      <div className="hero21-column">
        <div className="hero21-content">
          <h1 className="hero21-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero21-text2">
                  CAPTURE THE PURE BEAUTY OF WILDLIFE
                </span>
              </Fragment>
            )}
          </h1>
          <div className="hero21-actions">
            <div className="hero21-container1"></div>
            <div className="hero21-container2"></div>
          </div>
        </div>
      </div>
      <div className="hero21-container3">
        <div className="hero21-max-width thq-section-max-width"></div>
      </div>
    </div>
  )
}

Hero21.defaultProps = {
  image1Alt: 'Digital product creation',
  heading1: undefined,
}

Hero21.propTypes = {
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero21
