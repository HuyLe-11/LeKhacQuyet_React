import React, { useState, Fragment } from 'react';

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import pic1 from  '../assets/gallery/pic1.jpg'
import pic2 from  '../assets/gallery/pic2.jpg'
import pic3 from  '../assets/gallery/pic3.jpg'
import pic4 from  '../assets/gallery/pic4.jpg'
import pic5 from  '../assets/gallery/pic5.jpg'
import pic6 from  '../assets/gallery/pic6.jpg'  

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import './hero17.css'

const images = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,

];


const Hero17 = (props) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text6">
                  Medium length hero headline goes here
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text7">Main action</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Secondary action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={pic1}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(0);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image2Alt}
              src={pic2}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(1);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image3Alt}
              src={pic3}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(2);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image4Alt}
              src={pic4}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(3);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image5Alt}
              src={pic5}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(4);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image6Alt}
              src={pic6}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(5);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={pic1}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(0);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image2Alt}
              src={pic2}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(1);
                setIsOpen(true);
              }}

            />
            <img
              alt={props.image3Alt}
              src={pic3}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(2);
                setIsOpen(true);
              }}
            />
            <img
              alt={props.image4Alt}
              src={pic4}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"

            />
            <img
              alt={props.image5Alt}
              src={pic5}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(4);
                setIsOpen(true);
              }}
            />
            <img
              alt="Hero Image"
              src={pic6}
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              onClick={() => {
                setIndex(5);
                setIsOpen(true);
              }}
            />
          </div>
        </div>
       
      
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((index + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setIndex((index + 1) % images.length)
          }
        />
      )}
    </div>
  )
}

Hero17.defaultProps = {
  image11Src:
    'https://images.unsplash.com/photo-1580867397881-54e0910f6b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  action2: undefined,
  image12Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  heading1: undefined,
  image3Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1660562925540-44c90f199593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1734669579591-02d089cebae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Hero Image',
  action1: undefined,
  image8Src:
    'https://images.unsplash.com/photo-1564106273112-91110b39f7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  content1: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1569798547051-e2c3b45e8ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1657705887710-5c6ddd3d1949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1644486953378-9f46db2fbf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDUyMzk3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Hero Image',
}

Hero17.propTypes = {
  image11Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  image12Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  image8Src: PropTypes.string,
  image6Alt: PropTypes.string,
  content1: PropTypes.element,
  image2Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image7Src: PropTypes.string,
  image9Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image9Alt: PropTypes.string,
}

export default Hero17

