import React from 'react';
import  CurrencyFormatter  from "currency-formatter";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {courseProtect} from "../../HOC/courseProtect/courseProtect"
import classNames from 'classnames';
import css from "./course.module.css"
import {logOut} from "../../../services/service"
import {useHistory} from "react-router-dom"

function Course(props) {
    const {courses} = useSelector(state => state.ProductReducer);
    console.log(courses)
   

    const history = useHistory();
    const LogOut = async () => {
    await logOut();
    history.push('/Login');
  };

    
    return (
        <>
                <div className="container mtb-30">
                    <div className="row">
                        {courses.map(course => (
                            <div className="col-3" key={course.id}>
                                <div className="product">
                                    <div className="product-img">
                                        <Link to={`/details/${course.id}`}><img className="img-1" src={`/images/${course.image}`}/></Link>        
                                
                                </div>
                                <div className="product-name">
                                    {course.name}
                                
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product-price">
                                          
                                            <span className="activeCourse">{CurrencyFormatter.format(course.price, {code: "USD"})}</span>
                                            
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product-discountPrice">
                                        {CurrencyFormatter.format(course.discountPrice, {code: "USD"})}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>            
            </div>
                        <div className={classNames("container btn", css.btn)}>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={LogOut}>LOG OUT</button>            
                        </div>
            
            </>
    );
}

export default courseProtect(Course);