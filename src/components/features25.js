import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text3">
                      Wildlife Photography Galleries
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Explore stunning wildlife photography galleries showcasing
                      the beauty of wild animals in their natural habitats.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text6">
                      Professional Photographer
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Meet Le Khac Quyet, a professional wildlife photographer
                      with a passion for capturing the essence of wild animals
                      through his lens.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text5">About Chien C. Lee</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Learn more about le Khac Quyet&apos;s journey, inspiration,
                      and dedication to wildlife photography in the
                      &apos;About&apos; section.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Wildlife Photography Galleries Image',
  feature3Description: undefined,
  feature1Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1564106273110-e2965fcabb74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1554713703-b7cadb44ec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature2Title: undefined,
  feature2ImgAlt: 'Professional Photographer Image',
  feature3ImgAlt: 'About Chien C. Lee Image',
}

Features25.propTypes = {
  feature1Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features25
