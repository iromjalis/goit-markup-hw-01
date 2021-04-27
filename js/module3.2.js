/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */
const cart = {
  quantity: 0,
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    product.quantity += 1;
    this.items.push(product);
  },
  remove(product) {},
  clear() {
    items = [];
  },
  countTotalPrice() {
    const totalPrice = price * quantity;
    return totalPrice;
  },
  increaseQuality(product) {
    product.quantity += 1;
  },
  decreaseQuality(product) {
    product.quantity -= 1;
  },
};
cart.add({
  name: 'apple',
  price: '50',
});

console.table(cart.getItems());
