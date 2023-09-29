import React from 'react';
import '../css/Footer.css'

const SocialShare = ({FbLink , InsLink , InLink}) => {
  return (
    <div className="SocialShare">
            <div className="SocialShare-wrapper">
              <div className="SocialShare-carousel">
                <div className="SocialShare-carousel__item">
                  <div className="SocialShare-carousel__item-head">
                  <a href={FbLink} target='-blank'>
                        <img
                          className="SocialImages"
                          src="/Images/facebook-f.svg"
                          alt=""
                        />
                      </a>
                  </div>
                  <div className="SocialShare-carousel__item-body">
                    <p className="Footer-title">Let's Be Friends</p>
                  </div>
                </div>
                <div className="SocialShare-carousel__item">
                  <div className="SocialShare-carousel__item-head">
                    <a href={InsLink} target='-blank'>
                    <img
                      className="SocialImages"
                      src="Images/instagram.svg"
                      alt=""
                    /></a>
                  </div>
                  <div className="SocialShare-carousel__item-body">
                    <p className="Footer-title">Know More About Me</p>
                  </div>
                </div>
                <div className="SocialShare-carousel__item">
                  <div className="SocialShare-carousel__item-head">
                    <a href={InLink} target='-blank'>
                    <img
                      className="SocialImages"
                      src="Images/linkedin-in.svg"
                      alt=""
                    /> </a>
                  </div>
                  <div className="SocialShare-carousel__item-body">
                    <p className="Footer-title">Let's Connect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default SocialShare;
