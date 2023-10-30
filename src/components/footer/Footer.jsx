import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Inezita</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portofolio" className="footer__link">Projects</a>
                    </li>

                    {/* <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li> */}
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/katarinainezita" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/katarinainezita" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/katarinainezita/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; KatarinaInezita. All rights reserved</span>
            </div>
        </footer>

    )
}

export default Footer