import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
{/*         <div className="container-fluid bg-primary"> */}
{/*           <div className="row "> */}
{/*             <div className="col-md-9 py-3 text-white"> */}
{/*               Get connected with us on social networks! */}
{/*             </div> */}
{/*             <div className="col-md-3 py-3 text-center text-white"> */}
{/*               <Link to="/" title="Apple"> */}
{/*                 <FontAwesomeIcon icon={faApple} className="text-light me-3" /> */}
{/*               </Link> */}
{/*               <Link to="/" title="Windows"> */}
{/*                 <FontAwesomeIcon icon={faWindows} className="text-light me-3" /> */}
{/*               </Link> */}
{/*               <Link to="/" title="Android"> */}
{/*                 <FontAwesomeIcon icon={faAndroid} className="text-light me-3" /> */}
{/*               </Link> */}
{/*               | */}
{/*               <Link to="/" title="Twitter"> */}
{/*                 <FontAwesomeIcon */}
{/*                   icon={faTwitter} */}
{/*                   className="text-light ms-3 me-3" */}
{/*                 /> */}
{/*               </Link> */}
{/*               <Link to="/" title="Facebook"> */}
{/*                 <FontAwesomeIcon */}
{/*                   icon={faFacebookF} */}
{/*                   className="text-light me-3" */}
{/*                 /> */}
{/*               </Link> */}
{/*               <Link to="/" title="Instagram"> */}
{/*                 <FontAwesomeIcon */}
{/*                   icon={faInstagram} */}
{/*                   className="text-light me-3" */}
{/*                 /> */}
{/*               </Link> */}
{/*               <Link to="/" title="Youtube"> */}
{/*                 <FontAwesomeIcon icon={faYoutube} className="text-light me-3" /> */}
{/*               </Link> */}
{/*             </div> */}
{/*           </div> */}
{/*         </div> */}
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">LL Health Club</div>
              <hr />
              <p>

A gym health club is a facility that provides fitness equipment,
group exercise classes, personal training, and other services to help
individuals improve their physical fitness and overall health.
              </p>
            </div>
            <div className="col-md-3 py-3">
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Headquarter Address</div>
              <hr />
              <address>
                <strong>LL Health Club, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
              </div>
              <div className="col-md-3 py-3">
              <div className="h6">Customer Care</div>
              <hr />
              <IconTelephone /> +1800 100 1000
              <br />
              <IconEnvelope /> support@llhealthclub.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">


            <div className="col-md-3 py-2">
              ©{new Date().getFullYear()} LL Health Club. All rights
            </div>
            
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
