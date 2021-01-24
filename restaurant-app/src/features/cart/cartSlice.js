import { createSlice, current } from '@reduxjs/toolkit';

// alt: "3"
// description: "is a course that concludes a meal. The course usually consists of sweet foods"
// id: 3
// image: "/images/foods_thai/t3.jpg"
// price: 70
// rate: 4
// title: "Pizza"

export const getCartTotal = (items) => {


    var helper = {};
    var result = items.reduce(function (r, o) {
        var key = o.id;

        if (!helper[key]) {
            helper[key] = Object.assign({}, o); // create a copy of o
            helper[key].count = 1
            r.push(helper[key]);
        } else {
            helper[key].price += o.price;
            helper[key].count += 1;
        }

        return r;
    }, []);

    console.log("result", result);
    return result;
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        items: []
    },
    reducers: {
        addToCart: (state, action) => {

            state.items.push(action.payload.item)
            console.log(state);
        },
        increaseItem: (state, action) => {
            console.log(current(state))
            let targetItem = state.items.find((item) => item.id == action.payload.id);
            console.log("action", current(targetItem));
            state.items.push(targetItem)
        },
        decreaseItem: (state, action) => {
            // let targetItem = state.items.find((item) => item.id == action.payload.id);
            // state.items.pop(targetItem);
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            console.log("index",index);
            state.items.splice(index, 1)
        },
        resetCart:(state)=>{
            state.items = []
        },
        cancelAllItem: (state, action) => {
            const newitems = state.items.filter((item) => item.id !== action.payload.id)
              state.items= newitems

        },
        
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    addToCart,
    increaseItem,
    decreaseItem,
    cancelAllItem,
    resetCart
} = cartSlice.actions;


export const selectCount = state => state.cart.value;
export const selectCart = state => state.cart.items;
export default cartSlice.reducer;