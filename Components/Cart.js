import { createStore, action } from 'easy-peasy';
export default createStore({
  size: 0,
  products: {},
  data: [],
  selectedProductId: null,
  addProductToCart: action((state, payload) => {
    if (state.products[`item-${payload.id}`]) {
      state.products[`item-${payload.id}`].quantity += 1;
      state.size += 1;
    } else {
      state.products[`item-${payload.id}`] = { ...payload, quantity: 1 };
      state.size += 1;
    }
  }),
  addData: action((state, payload) => {
    // add merge payload array into to state.data array
    state.data = [...state.data, ...payload];
    
  }),
  setSelectedProductId: action((state, payload) => {
    state.selectedProductId = payload;
  }),
});