const init = {
    courses : [],
    prices : 0 ,
    totalquantity : 0

}


const CartReducer =(state = init, action) => {
    let findCourse;
    let index;
    switch (action.type) {
        case "ADD TO CART":
        
        const {course, quantity} = action.payload
        // console.log(course.id, quantity)
        const check = state.courses.find(c => c.id === course.id)
        if(check){
            return state
        }else{
            const price = state.prices + course.discountPrice * quantity
            const tquantity = state.totalquantity + quantity
            course.quantity = quantity
            return{
                ...state, courses: [...state.courses, course], prices : price, totalquantity: tquantity
            }
        }
        case "INC":
            findCourse = state.courses.find(course => course.id === action.payload)
            index = state.courses.findIndex(course => course.id === action.payload)
            findCourse.quantity += 1
            state.courses[index] = findCourse;
            return{
                ...state, prices: state.prices + findCourse.discountPrice, totalquantity:state.totalquantity + 1
                 
            }

            case "DEC":
                findCourse = state.courses.find(course => course.id === action.payload)
                index = state.courses.findIndex(course => course.id === action.payload)
                if(findCourse.quantity > 1){
                    
                }
                
                findCourse.quantity -= 1
                state.courses[index] = findCourse;
                return{
                ...state, prices: state.prices - findCourse.discountPrice, totalquantity:state.totalquantity - 1
                 
            }

            case "REMOVE":
                findCourse = state.courses.find(course => course.id === action.payload)
                const filtered = state.courses.filter(course => course.id !== action.payload)
                return{
                    ...state,
                    courses: filtered,
                    prices: state.prices - findCourse.discountPrice * findCourse.quantity, 
                    totalquantity: state.totalquantity - findCourse.quantity


                     
                }

           



                

                
        default:
        return state
    }
}

export default CartReducer