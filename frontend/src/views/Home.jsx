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


class HomeView extends Component {

    render() {


     return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        {/* <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-9">
            </div>
           
          </div>
        </div> */}
        {/* <div className="container-fluid bg-light mb-3">
          <div className="row">
            <div className="col-md-12">
            <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                to="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div> */}

        <div className="bg-dark p-3 text-center mb-3 text-white">
          <h4 className="m-0">Locations</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/1189.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">San Jose</div>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/1189.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Fremont</div>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src=".../../images/1189.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">San Francisco</div>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/1189.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Dublin </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-dark p-1 text-center mb-3 text-white">
        </div>

  <div class="row">
    <div class="col-4">
      <div class="container">
          <div className="bg-dark p-3 text-center mb-3 text-white">
                <h4 className="m-0">Memberships</h4>
          </div>
          <div class="card membership-block">
              
            <div class="card-body">
              <h3 class="card-title">Basic Gym Package</h3>
              <ul class="list-unstyled">
                <li>Access to gym equipment during regular business hours</li>
                <li>Locker and shower facilities</li>
                <li>Discounted rates on group fitness classes</li>
                <li>Basic nutritional guidance and support</li>
                
              </ul>
            </div>
          </div>
          <div class="card membership-block">
              <h3>Premium Gym Package</h3>
              <ul>
                <li>24/7 access to gym equipment</li>
                <li>Private locker and shower facilities</li>
                <li>Unlimited access to all location</li>
                <li>Personalized nutrition plan</li>
              </ul>
          </div>
        </div>
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