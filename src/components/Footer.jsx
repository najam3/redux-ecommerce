import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineAlibaba,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">

        <div className="col-lg-4">
          <h1>THE SHOP</h1>
          <p>
            Start a business and design the life you want -- all in one place
          </p>
          <span className="me-3">
            <AiOutlineInstagram size={25}/>
          </span>
          <span className="me-3">
            <AiOutlineFacebook size={25}/>
          </span>
          <span className="me-3">
            <AiOutlineTwitter size={25}/>
          </span>
          <span className="me-3">
            <AiOutlineAlibaba size={25}/>
          </span>
          <br/>
           <select className="bg-success text-light mt-4 pe-4 ps-2 py-2">
            <option value={'English'}>English</option>
            <option value={'Spanish'}>Spanish</option>
            <option value={'Arabic'}>Arabic</option>
          </select>
        </div>
        <div className="col-lg-2">
            <h6>BUILD YOUR BUSINESS</h6>
            <div className="list-group">
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Business Ideas
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Case Studies
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Design and Branding
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Dropshipping
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Marketing
                </li>
            </div>
        </div>
        <div className="col-lg-2">
            <h6>STORIES</h6>
            <div className="list-group">
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    A day in my life
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    My first 90 days 
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Raise the bar
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Starter stories
                </li>
            </div>
        </div>
        <div className="col-lg-2">
            <h6>YOUR LIFE</h6>
            <div className="list-group">
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Mindset
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Money
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Productivity
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Wellbeing
                </li>
               
            </div>
        </div>
        <div className="col-lg-2">
            <h6>FREE BUSINESS TOOLS</h6>
            <div className="list-group">
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Business Name Generator
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Slogan Generator
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Traffic Calculator
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Profit Margin Calculator
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Buy a ready-made store
                </li>
                <li className="list-group-item bg-transparent text-light fw-light ps-0">
                    Website Builder
                </li>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
