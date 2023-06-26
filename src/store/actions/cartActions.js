

export const addToCart = () => {
     return(dispatch) => {
       dispatch({
        type: "ADD_CART"
       })
     }
}

export const deleteCart = (index) => {
  
  return(dispatch) => {
    dispatch({
      type: "DELETE_CART",
      action: index
    })
  }
}


export const getProducts = () => {
  const api = 'https://fakestoreapi.com/products';
    return async (dispatch) => {

  const response = await fetch(api);
  const data = await response.json();
  console.log(data)
      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: data
      })
    }
   
}


export const getCategory = (category) => {

  return(dispatch) => {
    dispatch({
      type:'GET_CATEGORY',
      payload: category
    })
  }
}

export const selectedProducts = (cartProduct) => {


  return(dispatch) => {
    dispatch({
      type: 'SELECTED_PRODUCTS',
      payload: cartProduct
    })
  }
};

export const removeSelectedProducts = (index) => {
  return(dispatch) => {
    dispatch({
      type: "REMOVE_ITEMS",
      payload: index
    })
  }

}


export const getNewPrice = (itemInfo) => {
  return(dispatch) => {
    dispatch({
      type: "NEW_PRICE",
      payload: itemInfo
    })
  }
}

export const getDuplciateProducst = (index) => {
  return(dispatch) => {
    dispatch({
      type: "EXISTING_PRODUCT",
      payload: index
    })
  }
}

export const deleteProduct = (index) => {
  return(dispatch) => {
    dispatch({
      type: "REMOVE_CART",
      payload: index
    })
  }
}

export const showDescription = (index) => {
  return(dispatch) => {
    dispatch({
      type: "SHOW_DESCRIPTION",
      payload: index
    })
  }
}