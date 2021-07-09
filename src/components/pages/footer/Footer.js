import classNames from 'classnames';
import React from 'react';
import css from "./footer.module.css"

function Footer(props) {
    return (
        <>
        <section className={classNames("course", css.course)}>
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className={classNames("row", css.row)}>
            <div className={classNames("course_col", css.course_col)}>
                <h3>Intermediate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit</p>
            </div>

            <div className={classNames("course_col", css.course_col)}>
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit</p>
            </div>

            <div className={classNames("course_col", css.course_col)}>
                <h3>Post-graduate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit adipisicing elit</p>
            </div>
        </div>

    </section>
        <section className={classNames("cta", css.cta)}>
        <h1>Enroll For Our Various Online Course  EveryWhere From The World</h1>
        <button className={classNames("hero_btn", css.hero_btn)}>Contact us</button>

        </section>
        
        <section className={classNames("footer", css.footer)}>
        <h4>About Us</h4>
        <p>call us : 597242714 </p>
        <div className={classNames("icon", css.icon)}>
            <i className={classNames("fab fa-facebook-f", css.fab)}></i>
            <i className={classNames("fab fa-instagram", css.fab)}></i>
            <i className={classNames("fab fa-twitter", css.fab)}></i>
            <i className={classNames("fab fa-linkedin-in", css.fab)}></i>
        </div>
        
        <p>Made With <i className={classNames("far fa-heart", css.fa_heart)}></i> Ilia's Website</p>

    </section>
    </>
    );
}

export default Footer;