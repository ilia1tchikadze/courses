import classNames from 'classnames';
import React from 'react';
import css from "./card.module.css"
import {useSelector, useDispatch} from "react-redux"
import  CurrencyFormatter  from "currency-formatter";

function Card(props) {
    const {courses, totalquantity, prices} = useSelector(state => state.CartReducer)
    const dispatch = useDispatch();
    return (

        <div className={classNames("cart", css.cart)}>
            <div className={classNames("container", css.container)}>
                <h3>Your cart</h3>
                {courses.length > 0 ? <>
                <div className="row">
                    <div className={classNames("col9", css.col9)}>
                    <div className="cart__heading">
                        <div className="row">
                            <div className={classNames("col2", css.col2)}>Picture</div>
                            <div className={classNames("col2", css.col2)}>Name</div>
                            <div className={classNames("col2", css.col2)}>Price</div>
                            <div className={classNames("col2", css.col2)}>Inc/Dec</div>
                            <div className={classNames("col2", css.col2)}>Total Price</div>
                            <div className={classNames("col2", css.col2)}>Remove</div>
                        </div>
                    </div>
                    {courses.map(course => (
                        <div className={classNames("row vertAlign", css.vertAlign)} key={course.id}>
                         <div className="col-2">
                             <div className={classNames("cartImage", css.cartImage)}>
                                 <img src={`/images/${course.image}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {course.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                {CurrencyFormatter.format(course.discountPrice, {code: "USD"})}
                             </div>
                         </div>
                         <div className="col-2">

                         <div className={classNames("detail_info", css.detail_info)}>
                             <span className={classNames("dec", css.dec)} 
                             onClick={() => dispatch({type: "DEC", payload: course.id})}
                             ><i className="fas fa-minus"></i></span>
                             <span className={classNames("quantity", css.quantity)}>{course.quantity}</span>
                             <span className={classNames("inc", css.inc)}
                              onClick={() => dispatch({type: "INC", payload: course.id})}>
                              
                              <i className="fas fa-plus"></i></span>                   
                     </div>

                         </div>
                         <div className="col-2">
                             <div className="cart__total text-center">
                             {CurrencyFormatter.format(course.discountPrice * course.quantity, {code: 'USD'})}
                                 
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: "REMOVE", payload: course.id})}>
                                <i  className={classNames("far fa-trash-alt delete", css.delete )}
                                
                                ></i>
                             </div>
                         </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary__heading">
                                Summary
                            </div>
                            <div className="summary__details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Items: 
                                    </div>
                                <div className="col-6">{totalquantity}</div>
                                    
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Price 
                                    </div>
                                    <div className="col-6">
                                    {CurrencyFormatter.format(prices, {code: "USD"})}
                                    </div>
                                </div>
                                <button type="button" className="checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                </> : 'Your cart is empty!'}
            </div>
        </div>
    );
}

export default Card;