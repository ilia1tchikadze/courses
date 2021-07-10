import React, {useEffect, useState}from 'react';
import { useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import css from "./details.module.css";
import classNames from 'classnames';
import  CurrencyFormatter  from "currency-formatter";
import {Link} from "react-router-dom"


function Details(props) {
    const {totalquantity} = useSelector(state => state.CartReducer)
    // console.log(totalquantity)
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const {id} = useParams();
   
    // console.log(id)
    const {course} = useSelector(state => state.ProductReducer)

    console.log(course)

   useEffect(()=>{
        dispatch({type : "COURSE", id})
   }, [id])

   const dec = () => {
       if(quantity > 1){
           setQuantity(quantity - 1 )
       }

   }

    return (
        <div className={classNames("container mt", css.mt)}>
            <div className="row">
                <div className="col-6">
                    <div className={classNames("courseimg", css.courseimg)}>
                        <img src={`/images/${course.image}`} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className={classNames("courseName", css.courseName)}>
                        {course.name}
                    </div>

                    <div className={classNames("coursePrice", css.coursePrice)}>
                        <span className={classNames("actual", css.actual)}>{CurrencyFormatter.format(course.price, {code: "USD"})}</span>
                        <span className={classNames("discount", css.discount)}>{CurrencyFormatter.format(course.discountPrice, {code: "USD"})}</span>
                    </div>

                    <div className={classNames("detail_info", css.detail_info)}>
                        <div className={classNames("detail", css.detail)}>
                            <span className={classNames("dec", css.dec)} onClick={dec}><i className="fas fa-minus"></i></span>
                            <span className={classNames("quantity", css.quantity)}>{quantity}</span>
                            <span className={classNames("inc", css.inc)} onClick={()=> setQuantity(quantity + 1)}><i className="fas fa-plus"></i></span>
                            
                            <button
                            className={classNames("hero", css.hero)}
                            onClick={() => dispatch({type: "ADD TO CART", payload : {course, quantity}})}>
                            Add to card
                            </button>
                        </div>
                        <div className={classNames("basket_icon", css.basket_icon)}>
                            <Link to="/card">
                            <div className={classNames("basket", css.basket)}>
                                <i className={classNames("fas fa-shopping-cart cardicon", css.cardicon)}></i>
                                <span className={classNames("span", css.span)}>{totalquantity}</span>
                            </div>
                            </Link>
                        </div>
                        
                    </div>
                    <div className={classNames("info", css.info)}>
                        <h4>Details</h4>
                        {course.desc}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Details;