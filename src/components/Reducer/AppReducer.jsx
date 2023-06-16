
export const initialState = {
    cartItems : []
}

export const reducer = (stateValue,{type,payload}) => {
    switch(type){
        case "UPDATE_QTY":
            return {...stateValue,cartItems:payload}
        case "EXISTING":
            return {...stateValue}
        case "ADD_TO_CART":
            return {...stateValue,cartItems:[...stateValue.cartItems,{...payload,quantity:1}]}
        case "REMOVE":
            return {...stateValue,cartItems:stateValue.cartItems.filter(item => item.id !== payload)}    
        default:
            return stateValue;
    }
}