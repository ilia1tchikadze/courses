import React from 'react';
import css from "./nav.module.css";
import classNames from 'classnames';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
function Nav(props) {
    
    return (
        <section className={classNames("header", css.header)}>
            <div className={classNames(css.nav)}>
                <div className={classNames( css.container)}>
                    <div className={classNames(css.navContainer)}>
                        <div className="left">
                            <Link to="/"><img src="../../../images/logo.png" className={classNames("img", css.img)} /></Link>
                        </div>
                        <div className="right">
                        <div className={classNames("nav_links", css.nav_links)} id="navLinks">
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/course">COURSE</Link></li>
                                <li><Link to="/Login">LOGIN</Link></li>
                            </ul>
                        </div>
                            

                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Nav;
