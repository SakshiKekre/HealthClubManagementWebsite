import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";



const Banner = lazy(() => import("../components/carousel/Banner"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);
const GymClassSchedule = lazy(() => import("../components/GymClassSchedule"));
const Memberships = lazy(() => import("../components/Memberships"));

class HomeView extends Component {

    render() {


     return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />

        <div className="bg-dark p-3 text-center mb-3 text-white">
          <h4 className="m-0">Locations</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/image7_191x191.jpeg"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <div className="text-center h6">Newpark Mall Road</div>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/image3_191x191.jpeg"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <div className="text-center h6">Fremont</div>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src=".../../images/image5_191x191.jpeg"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <div className="text-center h6">San Jose</div>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/image6_191x191.jpeg"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
                <div className="text-center h6">San Franciso</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-dark p-1 text-center mb-3 text-white">
        </div>

  <div class="row">
    <div class="col-4">
      <Memberships/>
    </div>

    <div class="col-8">
      <div class="container">
        <div className="bg-dark p-3 text-center mb-3 text-white">
          <h4 className="m-0">Gym Schedules</h4>
        </div>
        <GymClassSchedule />
      </div>
    </div>
  </div>

      </React.Fragment>
    );
  }
}

export default HomeView;