import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Pricing14 from '../components/pricing14'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Le Khac Quyet</title>
        <meta property="og:title" content="Le Khac Quyet" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Galleries</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Booking information</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Login</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              &quot;Capturing Wildlife’s Beauty with Precision&quot;
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">
              Capturing the Beauty of Wildlife
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Diverse Wildlife Collections</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">About Le Khac Quyet</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Immerse yourself in the world of wild animals through captivating
              photography.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Explore stunning galleries showcasing wildlife from around the
              world.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Learn more about the photographer behind the lens.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Explore Galleries</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Browse through stunning galleries of wildlife photography captured
              by Le Khac Quyet
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Ready to explore the wild?</span>
          </Fragment>
        }
      ></CTA26>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text127">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text128">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text129">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text130">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text131">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text132">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text133">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text134">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text135">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text136">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text137">$149/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text138">$199/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text139">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text140">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text141">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text142">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text143">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text144">$1499/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text145">Explore More</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text146">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text147">$1999/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text149">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text150">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text151">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text152">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text153">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text154">Unlimited photo uploads</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text155">24/7 customer support</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text156">
              Access to exclusive wildlife photography tutorials
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">All features in Plan 1</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text158">Priority email support</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text159">Advanced photo editing tools</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text160">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text161">All features in Plan 2</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text162">Customizable portfolio website</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text163">
              Discounts on wildlife photography workshops
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text167">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text178">
              Working with Chien C. Lee was an absolute pleasure. The website
              design perfectly showcases my wildlife photography in a
              professional and captivating manner.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text179">
              I highly recommend Chien C. Lee for any photography website design
              needs. The attention to detail and focus on wildlife truly sets
              them apart.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text180">
              The galleries on the website are simply stunning. Chien C. Lee has
              a unique ability to capture the essence of wild animals in their
              natural habitat.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text181">
              As a wildlife blogger, having a visually appealing website is
              crucial. Chien C. Lee exceeded my expectations and I couldn&apos;t
              be happier with the results.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text182">
              Read what our clients have to say about their experience working
              with us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text183">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text184">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text185">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text186">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text187">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text188">Wildlife Photographer</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text189">Animal Conservationist</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text190">Nature Enthusiast</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text191">Wildlife Blogger</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text192">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text193">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text194">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text195">Los Angeles Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text196">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text197">
              456 Park Avenue, Los Angeles, CA 90001
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        termsLink={
          <Fragment>
            <span className="home-text198">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text199">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text200">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}


export default Home
