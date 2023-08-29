import mobile from "../assets/img/mobile-app.png";
import ui from "../assets/img/ui-ux-design.png";
import website from "../assets/img/website.png";
import backend from "../assets/img/backend.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import React from "react";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In this section, I'll cover my technical skills and broad expertise,<br></br> enabling strong support for projects and teams.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={mobile} alt="" />
                                <h5>Mobile Development</h5>
                            </div>
                            <div className="item">
                                <img src={ui} alt="" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={website} alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={backend} alt="" />
                                <h5>Backend Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
