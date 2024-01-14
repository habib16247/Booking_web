// src/components/Footer.js

import React from 'react';
import styles from "./Footer.module.css";
import { FaCheck, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMap, FaMessage, FaPaperPlane, FaPhone, FaTwitter } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { BsCheck2Circle } from 'react-icons/bs';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.supportContent}>
                {/* Column 1 */}
                <div className={styles.column1}>
                    <div className={styles.support}>
                      <a href="#">
                          <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-headphone.png" alt="Headphone Icon" />
                      </a>
                      <h2>
                        <a className={styles.supportText} href="https://gaviaspreview.com/wp/gowilds/contact/">Need any support for tour & travels?</a>
                      </h2>
                    </div>
                    <div className={styles.supportBtn}>
                      <FaLocationArrow />
                    </div>
                </div>
                {/* Column 2 */}
                <div className={styles.column1}>
                    <div className={styles.support}>
                      <a href="#">
                          <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-travel.png" alt="Travel Icon" />
                      </a>
                      <h2>
                        <a className={styles.supportText} href="https://gaviaspreview.com/wp/gowilds/contact/">Ready to Get Started With Vacations!</a>
                      </h2>
                    </div>
                    <div className={styles.supportBtn1}>
                      <FaLocationArrow />
                    </div>
                </div>
            </div>
            <div className={styles.mainFooter}>
              <div className={styles.col_1}>
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/logo-white.png" alt="" />
                <p className={styles.col_1_text}>
                  To take trivial example which us ever undertakes laborious physica exercise except obsome.
                </p>
                <div className={styles.socialIcons}>
                  <div className={styles.icon}>
                    <FaFacebook />
                  </div>
                  <div className={styles.icon}>
                    <FaTwitter />
                  </div>
                  <div className={styles.icon}>
                    <FaLinkedin />
                  </div>
                  <div className={styles.icon}>
                    <FaInstagram />
                  </div>
                </div>
              </div>

              <div className={styles.col_2}>
                <h2 className={styles.footerHead}>Pages</h2>
                <ul>
                  <li><a className={styles.pageInfo}>About us</a></li>
                  <li><a className={styles.pageInfo}>Community Blog</a></li>
                  <li><a className={styles.pageInfo}>Work With Us</a></li>
                  <li><a className={styles.pageInfo}>Privacy Policy</a></li>
                  <li><a className={styles.pageInfo}>Contact us</a></li>
                </ul>
              </div>

              <div className={styles.col_3}>
                <h2 className={styles.footerHead}>Newsletter <img style={{position: "absolute", top: "15px", marginLeft: "10px"}} src="https://gaviaspreview.com/wp/gowilds/wp-content/themes/gowilds/assets/images/arrow.png" alt="" /></h2>
                <p className={styles.newsText}>Subscribe our newsletter to get our latest update & news.</p>
                <div className={styles.searchBox}>
                  <input style={{border: 0, outline: "none", fontSize: "18px", fontFamily: "KumbhSans"}} type="text" placeholder='Email address' />
                  <div className={styles.paperPlane}>
                    <FaPaperPlane />
                  </div>
                </div>
                <div className={styles.checkText}>
                  <div className={styles.checkMark}>
                    <BsCheck2Circle />
                  </div>
                  <p style={{fontFamily: "KumbhSans"}}>
                  I agree to all terms and policies
                  </p>
                </div>
              </div>
              <div className={styles.col_4}>
                <h2 className={styles.footerHead}>Contact</h2>
                <ul>
                  <li>
                    <div className={styles.phone}>
                      <FaPhone className={styles.contactIcon} />
                    </div>
                    <div className={styles.phoneText}>
                      <p className={styles.infoTitle}>Drop a Line</p>
                      <h3 className={styles.infoText}>+880 1972-279431</h3>
                    </div>
                  </li>
                  <li>
                    <div className={styles.phone}>
                      <FaMessage className={styles.contactIcon} />
                    </div>
                    <div className={styles.phoneText}>
                      <p className={styles.infoTitle}>Email Address</p>
                      <h3 className={styles.infoText}>habibullah162470@gmail.com</h3>
                    </div>
                  </li>
                  <li>
                    <div className={styles.phone}>
                      <SiGooglemaps className={styles.contactIcon}/>
                    </div>
                    <div className={styles.phoneText}>
                      <p className={styles.infoTitle}>Visit office</p>
                      <h3 className={styles.infoText}>583 Main Street, NY, USA</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </footer>
    );
}

export default Footer;
