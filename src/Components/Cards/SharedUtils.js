// SharedUtils.js

export const calculateTotalPrice = (product, serviceTypes) => {
    let totalPrice = 0;
  
    serviceTypes.forEach((serviceType) => {
      totalPrice +=
        product[
          `price${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}`
        ];
    });
  
    return totalPrice;
  };
  
  export const calculateTotalCartPrice = (cart) => {
    return cart.reduce((total, item) => {
      const itemTotalPrice =
        item.quantity * calculateTotalPrice(item.product, item.serviceTypes);
      return total + itemTotalPrice;
    }, 0);
  };
  