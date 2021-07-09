import React from 'react';
import Header from '../Header';
import Footer from '../footer/Footer';
import {useSelector} from "react-redux"
import "./style.css"
import  CurrencyFormatter  from "currency-formatter";
import {Link} from "react-router-dom"
const Home = () => {
    const {courses} = useSelector(state => state.ProductReducer);
    // console.log(courses)
    
    return (
        <>
        <div>
            <Header />
            
        </div>
        <Footer />
        </>
    );
}

export default Home;