const getMenu = (menu) => {
  return {
      type:'FETCH_MENU',
      payload: menu
  }
}

const addOrder = (id) => {
  return {
    type: 'ADD_ORDER',
    payload: id
  }
}

const postOrder = (id) => {
  return {
    type: 'POST_ORDER',
    payload: id
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getMenu, addOrder, postOrder }