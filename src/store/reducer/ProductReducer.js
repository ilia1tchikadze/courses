import React from 'react';


const init = {
    courses: [
        {
            id : 1,
            name: "Python",
            image : "1.png",
            price: 20,
            discount : 2,
            discountPrice : 20 - 2 / 100 * 20,
            quantity : 1, 
            desc : "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure"
        },
        {
            id : 2,
            name: "PHP",
            image : "2.jpg",
            price: 30,
            discount : 5,
            discountPrice : 30 - 5 / 100 * 30,
            quantity : 1, 
            desc : "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts"       
        },
        {
            id : 3,
            name: "Kotlin",
            image : "6.png",
            price: 50,
            discountPrice : 50 - 10 / 100 * 50,
            quantity : 1, 
            desc : "JavaScript is one of the 3 languages all web developers must learn: 1. HTML to define the content of web pages. 2. CSS to specify the layout of web pages. 3. JavaScript to program the behavior of"       
        },
      

        {
            id : 4,
            name: "JAVA",
            image : "4.png",
            price: 50,
            discountPrice : 50 - 10 / 100 * 50,
            quantity : 1, 
            desc : "JavaScript is one of the 3 languages all web developers must learn: 1. HTML to define the content of web pages. 2. CSS to specify the layout of web pages. 3. JavaScript to program the behavior of"       
        },

        {
            id : 5,
            name: "C#",
            image : "5.png",
            price: 50,
            discountPrice : 50 - 10 / 100 * 50,
            quantity : 1, 
            desc : "JavaScript is one of the 3 languages all web developers must learn: 1. HTML to define the content of web pages. 2. CSS to specify the layout of web pages. 3. JavaScript to program the behavior of"       
        },

       
        {
            id : 7,
            name: "Swift",
            image : "7.png",
            price: 50,
            discountPrice : 50 - 10 / 100 * 50,
            quantity : 1, 
            desc : "JavaScript is one of the 3 languages all web developers must learn: 1. HTML to define the content of web pages. 2. CSS to specify the layout of web pages. 3. JavaScript to program the behavior of"       
        },

        {
            id : 8,
            name: "C",
            image : "8.png",
            price: 50,
            discountPrice : 50 - 10 / 100 * 50,
            quantity : 1, 
            desc : "JavaScript is one of the 3 languages all web developers must learn: 1. HTML to define the content of web pages. 2. CSS to specify the layout of web pages. 3. JavaScript to program the behavior of"       
        },
        {
            id : 9,
            name: "C++",
            image : "3.png",
            price: 50,
            discountPrice : 50 - 10 / 100 * 50,
            quantity : 1, 
            desc : "JavaScript is one of the 3 languages all web developers must learn: 1. HTML to define the content of web pages. 2. CSS to specify the layout of web pages. 3. JavaScript to program the behavior of"       
        },
    ],

    course:{}

}


const ProductReducer = (state = init, action) => {
    switch (action.type) {
        case "COURSE":
        return {...state, course: state.courses.find(course => course.id === parseInt(action.id)) }
        default:
        return state;
    }
}


export default ProductReducer;