import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// const Container = styled.div`
//   margin: 0 auto;
//   padding-left: ${GUTTER_MOBILE};
//   padding-right: ${GUTTER_MOBILE};
//   max-width: ${PAGE_WIDTH + GUTTER_MOBILE}px;

//   @media print, (min-width: ${MIN_MOBILE}px) {
//     max-width: ${PAGE_WIDTH + GUTTER_MOBILE * 2}px;
//   }

//   @media print, (min-width: ${MIN_TABLET}px) {
//     padding-left: ${GUTTER_TABLET}PX;
//     padding-right: ${GUTTER_TABLET}PX;
//     max-width: ${PAGE_WIDTH + GUTTER_TABLET * 2}px;
//   }

//   @media print, (min-width: ${MIN_DESKTOP}px) {
//     padding-left: ${GUTTER_DESKTOP}px;
//     padding-right: ${GUTTER_DESKTOP}px;
//     max-width: ${PAGE_WIDTH + GUTTER_DESKTOP * 2}px;
//   }
// `

export default class Footer extends PureComponent {
  static propTypes = {
    logo: PropTypes.object,
    slogan: PropTypes.string,
    address: PropTypes.string,
    copyright: PropTypes.string,
    phone: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    contact: PropTypes.object,
    subscribe: PropTypes.object,
  }

  static defaultProps = {
    links: [],
  }

  render() {
    return (
      <div className="DxuRJ43A4P">
        <div className="_1bvcLqopQQ">
          <div className="_33AAH9-9d7">
            <div className="_1ofnUPkdkG">
              <div className="_1yhpZcUO9I">
                <span className="_1I_7GXU_Kl">
                  <svg
                    id="ctia-logo-w"
                    style={{ enableBackground: 'new 0 0 99.1 51.3' }}
                    version="1.1"
                    viewBox="0 0 99.1 51.3"
                    x="0px"
                    y="0px"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M84.5,11.2v5c-1.2-1.8-2.9-3.2-4.8-4.3c-1.9-1-3.9-1.4-6-1.4c-3.7-0.1-7.3,1.5-9.9,4.2c-2.7,2.6-4.2,6.2-4.1,10 c-0.1,3.8,1.4,7.5,4.1,10.2c4.1,4.2,10.5,5.4,15.8,2.8c1.9-1,3.6-2.3,4.9-4v4.7H88V11.2H84.5z M81.7,17c2.1,2.1,3.2,4.9,3.1,7.9 c0,1.9-0.5,3.9-1.4,5.6c-0.9,1.6-2.3,3-3.9,3.9c-1.6,1-3.5,1.5-5.4,1.5s-3.7-0.5-5.3-1.5c-1.7-1-3.1-2.4-4-4.1 c-1-1.7-1.5-3.6-1.5-5.5s0.5-3.8,1.5-5.5c1.9-3.4,5.5-5.5,9.3-5.5C76.9,13.8,79.7,14.9,81.7,17"
                      fill="#FFFFFF"
                    />
                    <rect
                      height="27.2"
                      width="3.5"
                      fill="#FFFFFF"
                      x="50.2"
                      y="11.2"
                    />
                    <path
                      d="M49.9,0.9c-0.6,0.5-0.9,1.2-0.9,2s0.3,1.5,0.8,2c1.1,1.1,2.9,1.1,4,0l0,0c0.5-0.5,0.9-1.2,0.8-2 c0-0.8-0.3-1.5-0.8-2C52.8-0.2,51-0.2,49.9,0.9L49.9,0.9"
                      fill="#FFFFFF"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="36.4,1.1 36.4,11.2 31.6,11.2 31.6,14.2 36.4,14.2 36.4,38.4 39.9,38.4 39.9,14.2 45.4,14.2 45.4,11.2 39.9,11.2 39.9,1.1 "
                    />
                    <path
                      d="M24.7,13.5c-1.3-0.9-2.7-1.7-4.2-2.2c-1.7-0.5-3.4-0.8-5.2-0.8c-2.7,0-5.4,0.6-7.8,1.9c-2.3,1.2-4.2,3-5.4,5.3 c-1.3,2.2-2,4.8-2,7.3C0,28.8,1.6,32.4,4.3,35c2.9,2.7,6.7,4.2,10.7,4.1c2.6,0,5.1-0.5,7.5-1.6c2.1-1,3.9-2.6,5.2-4.5l-2.8-1.8 C22.6,34.3,19,36,15.1,36c-2.1,0-4.1-0.5-5.9-1.5c-1.7-1-3.2-2.4-4.2-4.1c-1-1.7-1.5-3.6-1.5-5.6c0-3,1.2-5.8,3.3-7.8 C9,14.9,12,13.7,15,13.8c3.9-0.1,7.5,1.7,9.8,4.8l2.8-1.7C26.9,15.5,25.9,14.4,24.7,13.5"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M5.9,51.3c2.4,0.1,4.5-1.7,4.6-4.2c0.1-2.4-1.7-4.5-4.2-4.6c-0.1,0-0.3,0-0.4,0c-2.4-0.1-4.5,1.7-4.6,4.2 c-0.1,2.4,1.7,4.5,4.2,4.6C5.6,51.3,5.7,51.3,5.9,51.3"
                      fill="#78CDD1"
                    />
                    <path
                      d="M18.9,51.3c2.4,0,4.3-2,4.3-4.4s-2-4.3-4.4-4.3s-4.3,2-4.3,4.4C14.5,49.3,16.5,51.3,18.9,51.3L18.9,51.3"
                      fill="#78CDD1"
                    />
                    <path
                      d="M32,51.3c2.4,0,4.3-2,4.3-4.4s-2-4.3-4.4-4.3s-4.3,2-4.3,4.4C27.6,49.3,29.6,51.3,32,51.3L32,51.3"
                      fill="#78CDD1"
                    />
                    <path
                      d="M84.3,51.3c2.4,0,4.3-2,4.3-4.4s-2-4.3-4.4-4.3s-4.3,2-4.3,4.4C79.9,49.3,81.9,51.3,84.3,51.3L84.3,51.3"
                      fill="#78CDD1"
                    />
                    <path
                      d="M45.1,51.3c2.4,0,4.3-2,4.3-4.4s-2-4.3-4.4-4.3s-4.3,2-4.3,4.4C40.7,49.3,42.7,51.3,45.1,51.3L45.1,51.3"
                      fill="#78CDD1"
                    />
                    <path
                      d="M58.2,51.3c2.4,0,4.3-2,4.3-4.4s-2-4.3-4.4-4.3s-4.3,2-4.3,4.4C53.8,49.3,55.7,51.3,58.2,51.3L58.2,51.3"
                      fill="#78CDD1"
                    />
                    <path
                      d="M71.2,51.3c2.4,0,4.3-2,4.3-4.4s-2-4.3-4.4-4.3s-4.3,2-4.3,4.4C66.8,49.3,68.8,51.3,71.2,51.3L71.2,51.3"
                      fill="#78CDD1"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="93.2,11.5 91.8,11.5 91.8,11.2 94.9,11.2 94.9,11.5 93.5,11.5 93.5,15.6 93.2,15.6 "
                    />
                    <path
                      d="M95.8,11.2h0.4l0.9,2.6l0.2,0.5c0,0.2,0.1,0.3,0.2,0.5l0,0c0.1-0.2,0.1-0.3,0.2-0.5l0.2-0.5l0.9-2.6h0.4v4.4 h-0.3v-2.9c0-0.2,0-0.4,0-0.6s0-0.4,0-0.6l0,0l-0.3,1l-0.9,2.6h-0.3l-0.9-2.6l-0.3-1l0,0c0,0.2,0,0.4,0,0.6s0,0.4,0,0.6v2.9h-0.3 L95.8,11.2z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </span>
                <span className="NB_3tjhhH7">Everything Wireless™</span>
              </div>
            </div>
            <div className="_3WGf19d7mK">
              <div className="_1xB08DWB3J">
                {/* <h2 className="o7z26Atybt">
                  <span className="_3x8DsS1Hbl">
                    <svg height="25px" width="25px">
                      <path
                        d="M6.171,2.670 C7.861,1.612 9.859,1.000 12.000,1.000 C18.075,1.000 23.000,5.925 23.000,12.000 C23.000,18.075 18.075,23.000 12.000,23.000 C5.925,23.000 1.000,18.075 1.000,12.000 C1.000,10.553 1.280,9.171 1.788,7.905 "
                        fill="none"
                        stroke="rgb(255, 255, 255)"
                        strokeLinecap="round"
                        strokeWidth="2px"
                      />
                      <path
                        d="M12.000,8.000 L12.000,13.000 L16.000,13.000 "
                        fill="none"
                        stroke="rgb(120, 205, 209)"
                        strokeLinecap="round"
                        strokeWidth="2px"
                      />
                    </svg>
                  </span>
                  <span>CTIA Mobile Minute™ Subscription</span>
                </h2> */}
                {/* <div className="Vyd6ztSqu9">
                  <div className="_2eHSmpI7Lf">
                    Get features on wireless products and services by email.
                  </div>
                  <div>
                    <button className="_12V6SDHOYb _3LycWtddSK">
                      <div className="_10f7Raf7Jf">
                        {" "}
                        Sign up
                        <span className="_2YjINVNA39" style={{ width: 0 }} />
                        <svg className="_1UJRvs_yBs" width="36px" height="36px">
                          <path
                            fill-rule="evenodd"
                            stroke="rgb(120, 205, 209)"
                            strokeWidth="2px"
                            strokeLinecap="round"
                            stroke-linejoin="miter"
                            fill="none"
                            d="M2.500,32.000 C13.096,32.000 22.388,26.413 27.590,18.024 C30.386,13.515 32.000,8.196 32.000,2.500"
                            style={{
                              strokeDashoffset: 47.3451,
                              strokeDasharray: "0px, 999999px"
                            }}
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="_33AAH9-9d7">
            <div className="_1ofnUPkdkG _3Dou_IQ42a">
              <div className="_3BUkALh8cP">
                <span className="_24KXeVzuDO">
                  1400 16th St NW #600, Washington, DC 20036
                </span>
                <span>(202) 736-3200</span>
              </div>
              <span className="_1rk4mlG9nD">
                Copyright © CTIA 2019. All rights reserved.
              </span>
              <ul className="_2NkqQ6KOq7">
                <li className="_3zFxe-lUi8">
                  <a className="_2A8DSz47bw" href="https://ctia.org/sitemap">
                    Sitemap
                  </a>
                </li>
                <li className="_3zFxe-lUi8">
                  <a className="_2A8DSz47bw" href="https://ctia.org/terms">
                    Terms and Conditions
                  </a>
                </li>
                <li className="_3zFxe-lUi8">
                  <a
                    className="_2A8DSz47bw"
                    href="https://ctia.org/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="_3zFxe-lUi8">
                  <a
                    className="_2A8DSz47bw"
                    href="https://ctia.org/about-ctia/careers/"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="_3WGf19d7mK _2B9OavFrRm">
              <div>
                <h2 className="_2ZND7gOzbT">Get in Touch</h2>
                <div className="ZQcQV0UVNI">
                  <ul className="_1ssGK71Yw_">
                    <li className="_1uKkEVfhXn">
                      <a
                        href="https://www.facebook.com/CTIA.EverythingWireless/"
                        rel="noopener noreferrer"
                        title="Facebook"
                        target="_blank"
                      >
                        <span className="l6E953cOMl">
                          <svg height="27px" role="img" width="27px">
                            <path
                              d="M5.000,5.000 C5.552,5.000 6.000,5.448 6.000,6.000 L6.000,9.000 C6.000,9.552 5.552,10.000 5.000,10.000 C4.448,10.000 4.000,9.552 4.000,9.000 L4.000,6.000 C4.000,5.448 4.448,5.000 5.000,5.000 Z"
                              fill="rgb(120, 205, 209)"
                            />
                            <path
                              d="M5.000,4.000 L9.000,4.000 C9.552,4.000 10.000,4.448 10.000,5.000 C10.000,5.552 9.552,6.000 9.000,6.000 L5.000,6.000 C4.448,6.000 4.000,5.552 4.000,5.000 C4.000,4.448 4.448,4.000 5.000,4.000 Z"
                              fill="rgb(120, 205, 209)"
                            />
                            <path
                              d="M3.000,19.000 L3.000,4.000 C3.000,2.895 2.895,3.000 4.000,3.000 L22.000,3.000 C23.105,3.000 23.000,2.895 23.000,4.000 L23.000,22.000 C23.000,23.105 23.105,23.000 22.000,23.000 L5.000,23.000 "
                              fill="none"
                              stroke="rgb(255, 255, 255)"
                              strokeLinecap="butt"
                              strokeWidth="2px"
                            />
                            <path
                              d="M16.543,23.000 L16.543,16.158 L18.607,16.158 L18.916,13.491 L16.543,13.491 L16.543,11.789 C16.543,11.017 16.736,10.491 17.731,10.491 L18.999,10.490 L18.999,8.105 C18.780,8.073 18.027,8.000 17.151,8.000 C15.321,8.000 14.069,9.243 14.069,11.525 L14.069,13.491 L12.000,13.491 L12.000,16.158 L14.069,16.158 L14.069,23.000 L16.543,23.000 Z"
                              fill="rgb(255, 255, 255)"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="_1uKkEVfhXn">
                      <a
                        href="https://twitter.com/CTIA"
                        rel="noopener noreferrer"
                        title="Twitter"
                        target="_blank"
                      >
                        <span className="l6E953cOMl">
                          <svg height="25px" role="img" width="29px">
                            <path
                              d="M6.000,15.000 C0.564,10.462 2.908,3.359 3.000,3.000 C3.095,2.842 3.042,2.674 3.232,2.659 C3.421,2.646 3.604,2.721 3.724,2.861 C6.063,5.612 9.447,7.356 13.097,7.715 C13.081,7.547 13.073,7.376 13.073,7.208 C13.073,4.206 15.619,1.763 18.748,1.763 C20.201,1.763 21.607,2.303 22.657,3.257 C23.622,3.045 24.547,2.689 25.410,2.198 C25.617,2.083 25.876,2.099 26.064,2.241 C26.251,2.385 26.328,2.625 26.255,2.844 C26.253,2.850 26.805,3.830 26.157,4.105 C26.389,4.003 26.667,4.066 26.833,4.256 C26.999,4.445 27.013,4.716 26.871,4.921 C26.200,5.882 25.381,6.719 24.437,7.414 C24.440,7.534 24.441,7.655 24.441,7.774 C24.441,14.885 18.800,22.241 9.361,22.241 C6.472,22.241 3.006,21.052 1.000,19.000 "
                              fill="none"
                              stroke="rgb(255, 255, 255)"
                              strokeLinecap="butt"
                              strokeWidth="2px"
                            />
                            <path
                              d="M13.000,16.000 C13.000,16.000 16.930,15.040 18.000,12.000 C19.010,9.130 19.000,9.000 19.000,9.000 "
                              fill="none"
                              stroke="rgb(120, 205, 209)"
                              strokeLinecap="butt"
                              strokeWidth="2px"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="_1uKkEVfhXn">
                      <a
                        href="https://www.linkedin.com/company/ctia"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        target="_blank"
                      >
                        <span className="l6E953cOMl">
                          <svg height="27px" role="img" width="27px">
                            <path
                              d="M3.000,19.000 L3.000,4.000 C3.000,2.895 2.895,3.000 4.000,3.000 L22.000,3.000 C23.104,3.000 23.000,2.895 23.000,4.000 L23.000,22.000 C23.000,23.105 23.104,23.000 22.000,23.000 L5.000,23.000 "
                              fill="none"
                              stroke="rgb(255, 255, 255)"
                              strokeLinecap="butt"
                              strokeWidth="2px"
                            />
                            <path
                              d="M7.001,9.099 C7.001,8.713 7.136,8.394 7.406,8.143 C7.676,7.892 8.028,7.767 8.460,7.767 C8.885,7.767 9.228,7.891 9.491,8.138 C9.761,8.393 9.896,8.724 9.896,9.134 C9.896,9.504 9.765,9.813 9.502,10.060 C9.232,10.315 8.877,10.442 8.437,10.442 L8.425,10.442 C8.000,10.442 7.657,10.315 7.395,10.060 C7.132,9.806 7.001,9.485 7.001,9.099 ZM7.152,19.233 L7.152,11.496 L9.722,11.496 L9.722,19.233 L7.152,19.233 ZM11.147,19.233 L13.718,19.233 L13.718,14.913 C13.718,14.643 13.749,14.434 13.811,14.287 C13.919,14.025 14.083,13.803 14.303,13.622 C14.523,13.440 14.799,13.350 15.131,13.350 C15.996,13.350 16.428,13.932 16.428,15.098 L16.428,19.233 L18.999,19.233 L18.999,14.797 C18.999,13.654 18.729,12.788 18.188,12.197 C17.648,11.607 16.934,11.311 16.046,11.311 C15.050,11.311 14.274,11.739 13.718,12.597 L13.718,12.620 L13.706,12.620 L13.718,12.597 L13.718,11.496 L11.147,11.496 C11.163,11.744 11.170,12.512 11.170,13.801 C11.170,15.090 11.163,16.901 11.147,19.233 Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M17.000,4.000 L20.000,4.000 C20.552,4.000 21.000,4.448 21.000,5.000 C21.000,5.552 20.552,6.000 20.000,6.000 L17.000,6.000 C16.448,6.000 16.000,5.552 16.000,5.000 C16.000,4.448 16.448,4.000 17.000,4.000 Z"
                              fill="rgb(120, 205, 209)"
                            />
                            <path
                              d="M21.000,4.000 C21.552,4.000 22.000,4.448 22.000,5.000 L22.000,9.000 C22.000,9.552 21.552,10.000 21.000,10.000 C20.447,10.000 20.000,9.552 20.000,9.000 L20.000,5.000 C20.000,4.448 20.447,4.000 21.000,4.000 Z"
                              fill="rgb(120, 205, 209)"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="_1uKkEVfhXn">
                      <a
                        href="https://www.youtube.com/user/CTIATheWirelessAssoc"
                        rel="noopener noreferrer"
                        title="YouTube"
                        target="_blank"
                      >
                        <span className="l6E953cOMl">
                          <svg height="27px" role="img" width="35px">
                            <path
                              d="M7.430,22.754 C10.812,22.787 16.999,22.879 16.999,22.879 C16.999,22.879 25.708,22.879 27.880,22.290 C29.078,21.965 30.022,21.009 30.343,19.794 C30.925,17.593 30.925,13.000 30.925,13.000 C30.925,13.000 30.925,8.407 30.343,6.206 C30.022,4.991 29.078,4.035 27.880,3.710 C25.708,3.120 16.999,3.120 16.999,3.120 C16.999,3.120 8.290,3.120 6.118,3.710 C4.919,4.035 3.975,4.991 3.655,6.206 C3.073,8.407 3.073,13.000 3.073,13.000 C3.073,13.000 3.202,16.837 3.785,19.038 "
                              fill="none"
                              stroke="rgb(255, 255, 255)"
                              strokeLinecap="butt"
                              strokeWidth="2px"
                            />
                            <path
                              d="M13.636,17.543 L13.636,8.532 L21.632,13.038 L13.636,17.543 Z"
                              fill="rgb(255, 255, 255)"
                            />
                            <path
                              d="M15.000,19.000 L22.000,15.000 "
                              fill="none"
                              stroke="rgb(120, 205, 209)"
                              strokeLinecap="butt"
                              strokeWidth="2px"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="_1uKkEVfhXn">
                      <a
                        href="https://www.instagram.com/ctia.everythingwireless/"
                        rel="noopener noreferrer"
                        title="Instagram"
                        target="_blank"
                      >
                        <span className="l6E953cOMl">
                          <svg
                            height="27px"
                            id="Layer_1"
                            style={{ enableBackground: 'new 0 0 28.5 28.5' }}
                            width="27px"
                            version="1.1"
                            viewBox="0 0 28.5 28.5"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                className="st0"
                                d="M24.6,26.2H6.3c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h18v-20h-20v16c0,0.6-0.4,1-1,1s-1-0.4-1-1V4 C2.2,3.5,2.3,3,2.7,2.6C3,2.3,3.5,2.2,4,2.3h20.5c0.5-0.1,1,0.1,1.4,0.4C26.1,3,26.3,3.5,26.2,4v20.5c0.1,0.5-0.1,1-0.4,1.4 C25.5,26.1,25.1,26.3,24.6,26.2z"
                                fill="#ffffff"
                              />
                              <path
                                className="st0"
                                d="M14.3,20.2c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6s6,2.7,6,6C20.3,17.6,17.6,20.2,14.3,20.2z M14.3,10.3 c-2.2,0-4,1.8-4,4s1.8,4,4,4c2.2,0,4-1.8,4-4S16.5,10.3,14.3,10.3z"
                                fill="#ffffff"
                              />
                              <circle
                                className="st1"
                                cx="20.8"
                                cy="7.3"
                                fill="#78CDD1"
                                r="1.6"
                              />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a
                    className="_2gvPzP8xYB"
                    title="Contact Us"
                    href="https://www.ctia.org/about-ctia/contact-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="_1NFaBwdlFY">
                      <svg
                        height="23"
                        role="img"
                        width="32"
                        viewBox="0 0 55.5 40.5"
                      >
                        <path
                          d="M44.500,9.500 L27.500,20.500 L9.500,9.500 "
                          fill="none"
                          stroke="rgb(255, 255, 255)"
                          strokeLinecap="round"
                          strokeWidth="3px"
                        />
                        <path
                          d="M1.500,22.500 C1.500,12.861 1.500,6.500 1.500,6.500 C1.500,3.739 3.739,1.500 6.500,1.500 L47.500,1.500 C50.261,1.500 52.500,3.739 52.500,6.500 L52.500,32.500 C52.500,35.261 50.261,37.500 47.500,37.500 C47.500,37.500 21.196,37.500 9.500,37.500 "
                          fill="none"
                          opacity="0.988"
                          stroke="rgb(255, 255, 255)"
                          strokeLinecap="round"
                          strokeWidth="3px"
                        />
                        <path
                          d="M27.500,26.500 L42.500,26.500 "
                          fill="none"
                          stroke="rgb(120, 205, 209)"
                          strokeLinecap="round"
                          strokeWidth="3px"
                        />
                      </svg>
                    </span>
                    <span className="Rwu1ujiMKc">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
