import React, { useState, Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import selfpic from '../assets/lekhacquyet_selfpic.jpg'

import './features24.css'


const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  const history = useHistory(); 

  const handleClick = () => {
    history.push('/about'); // Navigate to the new page
  }

  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt="Le Khac Quyet Wildlife Photography"
              src="/res/photogrph_banner.jpg"
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt="Le Khac Quyet Wildlife Photography for Biodiversity conversation"
              src="/res/Bio_conv_banner.jpg"
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={selfpic}
              className="features24-image3 thq-img-ratio-16-9"
              onClick={handleClick}
              style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Capturing the Beauty of Wildlife
                    </span>
                  </Fragment>
                )}
              <span class="arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M15 18l-6-6 6-6" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </span>
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Immerse yourself in the world of wild animals through
                      captivating photography.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text3">
                      Diverse Wildlife Collections 
                    </span>
                  </Fragment>
                )}
              <span class="arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M15 18l-6-6 6-6" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </span>
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text4">
                      Explore stunning galleries showcasing wildlife from around
                      the world. 
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title  ?? (
                  <Fragment>
                    <span className="features24-text6">About Le Khac Quyet</span>
                  </Fragment>
                )}
              <span class="arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M15 18l-6-6 6-6" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </span>
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text2">
                      Learn more about the photographer behind the lens.
                    </span>
                  </Fragment>
                )}
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1564106273112-91110b39f7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1740111079446-f4ae65470ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1580867397881-54e0910f6b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Wildlife Gallery Preview',
  feature2Title: undefined,
  feature1ImgAlt: 'Wildlife Photography Gallery',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3Title: undefined,
  feature3ImgAlt: 'Chien C. Lee Portrait',
}

Features24.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
}

document.querySelectorAll('.arrow').forEach(arrow => {
  arrow.style.animation = 'none';
  void arrow.offsetWidth; // Force reflow
  arrow.style.animation = 'bounce-left 1.2s infinite ease-in-out';
});


export default Features24
