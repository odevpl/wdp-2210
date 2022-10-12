/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const editStars = payload => ({ type: 'EDIT', payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case 'EDIT':
      return statePart.map(products =>
        products.id === action.payload.id
          ? { ...products, ...action.payload }
          : products
      );
    default:
      return statePart;
  }
}
