import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero21 from '../components/hero21'
import './about.css'
import Navbar8 from '../components/navbar8'
import Footer4 from '../components/footer4'


const Home = (props) => {
  return (
    <div className="home-container1">
        <Navbar8>
        </Navbar8>
      <Hero21
        heading1={
          <Fragment>
            <span className="home-text1">
              CAPTURE THE PURE BEAUTY OF WILDLIFE
            </span>
          </Fragment>
        }
      ></Hero21>
      <div className="home-faqs">
        <h2 className="home-text2 Section-Heading">About Le Khac Quyet</h2>
        <div className="home-content-container">
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">Basic information</span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer1">
                <span className="Card-Text">
                  Le Khac Quyet is an Vietnamese
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  Primatologist/Zoologist/Wildlife Conservationist/Wildlife
                  Photographer
                </span>
                <br className="Card-Text"></br>
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer3 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className="home-faq3">
            <div className="home-question-container3">
              <span className="home-question3">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container3">
              <span className="home-answer5 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-subscribe">
        <img
          alt="image"
          src="https://res.cloudinary.com/dqnsjiku6/image/upload/v1743590131/pic2_lbnerf.jpg"
          className="home-image"
        />
        <div className="home-container2">
          <div className="home-heading-container">
            <h1 className="home-text6 Section-Heading">Get newest updates</h1>
            <span className="Section-Text home-text7">
              We will send you our monthly freebies on your email. We will not
              share your email address or use it for promotional goals.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput Section-Text input"
          />
          <button className="home-button Anchor button">SEND</button>
        </div>
      </div>
        <Footer4>

        </Footer4>
    </div>
  )
}

export default Home
