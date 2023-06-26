const initialState = {
  cart: 0,
  productsData: [],
  category: "men's clothing",
  cartItems: [],
  duplicateItems: [],
  cartAdded: true,
  total: 0,
  description: null
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
 

      return {
        ...state,
        cart: state.cart + 1,
      };
    case "DELETE_CART":
    
      return {
        ...state,
        cart: state.cart - 1
      };
     case "REMOVE_CART":
     
       state.cartItems.splice(action.payload, 1);
     return {
        ...state,
        cartItems: state.cartItems,
        cart: state.cart - 1
     }
     
    case "FETCH_PRODUCTS":
      return {
        ...state,
        productsData: [...action.payload],
      };
    case "GET_CATEGORY":
      
      return {
        ...state,
        category: action.payload,
      };

    case "SELECTED_PRODUCTS":
      
      const checkElem = (payload) => {
        if(!state.cartItems.includes(payload)) {
           state.cartItems.push(payload);
        }  
  }
    
        checkElem(action.payload)
       
      return {
        ...state,
        cartItems: state.cartItems,
      };

      case "NEW_PRICE":

  const updatedCart = state.cartItems.map((item, itemIndex) => {
     if (itemIndex === action.payload.index) {
      const originalPrice = item.originalPrice || item.price;
      const manipulatedPrice = item.price || originalPrice;
      const newPrice = originalPrice * action.payload.quantity;
      return { ...item, price: newPrice, manipulatedPrice, originalPrice };
    } else {
      return item;
    }
  });
  
   


  return {
    ...state,
    cartItems: updatedCart,
  };

   
     case "SHOW_DESCRIPTION":
      console.log(action.payload)
       return {
        ...state,
         description: action.payload
       }

   default:
      return {
        ...state,
      };
  }
};
