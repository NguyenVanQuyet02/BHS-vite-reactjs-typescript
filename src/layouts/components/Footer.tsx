import React from 'react'
import tw from 'twin.macro'

const Footer = () => {
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="bottom-bg" />
        <div className="footer-bg" />
        <div className="footer__logo">
          <a href="#">
            <img
              tw="flex items-center justify-center max-w-[258px] h-auto shrink-0 object-contain mt-[17px]"
              src="/assets/imgs/common/footer_logo.png"
              alt="logo bottom"
            />
          </a>
          <div className="footer__logo-text block-center">
            <p className="footer__logo-desc-top">
              <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
            </p>
            <em className="footer__logo-desc-mid">
              Baker Steet 101, NY, United States.
            </em>
            <p className="footer__logo-desc-bottom">
              <em>+521 569 8966.</em>
              <em>mail@company.com.</em>
            </p>
          </div>
        </div>
        <div className="footer__pages">
          <p className="footer__pages-title">Pages</p>
          <ul>
            <li className="footer__pages-item">
              <a href="#">Home</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">About</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">Services</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">Gallery</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">Team</a>
            </li>
          </ul>
        </div>
        <div className="footer__infor">
          <p className="footer__pages-title position-parent-copyright">
            Informations
          </p>
          <ul>
            <li className="footer__pages-item">
              <a href="#">Terms &amp; conditions</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">Privacy policy</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">Blog</a>
            </li>
            <li className="footer__pages-item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <p className="footer__copyright">
            © AltDesain Studio 2021 - All right reserved.
          </p>
          <button
            id="scrollBtn"
            className="footer__arrow-up icon-center"
            onClick={scrollToTop}
          >
            <img
              src="/assets/icons/common/arrow_up.png"
              alt="arrow up button"
            />
          </button>
        </div>
        <div className="footer-social-icons">
          <img
            className="footer-social-icon"
            src="/assets/icons/common/facebook_f_white.png"
            alt="facebook"
          />
          <img
            className="footer-social-icon"
            src="/assets/icons/common/twitter_white.png"
            alt="twitter"
          />
          <img
            className="footer-social-icon"
            src="/assets/icons/common/linkedin_in_white.png"
            alt="linkedin"
          />
          <img
            className="footer-social-icon"
            src="/assets/icons/common/youtube_white.png"
            alt="youtube"
          />
          <img
            className="footer-social-icon"
            src="/assets/icons/common/instagram_white.png"
            alt="instagram"
          />
        </div>
      </footer>
    </div>
  )
}

export default Footer
