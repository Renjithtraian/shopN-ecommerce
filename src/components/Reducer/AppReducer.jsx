
export const initialState = {
    cartItems : []
}

export const reducer = (stateValue,{type,payload}) => {
    switch(type){
        case "EXISTING":
            return {...stateValue}
        case "ADD_TO_CART":
            return {...stateValue,cartItems:[...stateValue.cartItems,payload]}
        case "REMOVE":
            return {...stateValue,cartItems:stateValue.cartItems.filter(item => item.id !== payload)}    
        default:
            return stateValue;
    }
}