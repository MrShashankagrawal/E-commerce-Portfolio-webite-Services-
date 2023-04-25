// // Define an array to store the products in the cart
// var cartItems = [];

// // Function to add products to the cart
// function addToCart(productId) {
//   // Get the product details based on the productId
//   var product = getProductById(productId);
  
//   // Add the product to the cartItems array
//   cartItems.push(product);
  
//   // Update the cart count in the UI
//   updateCartCount();
  
//   // Show a success message
//   alert(`Product "${product.name}" added to cart.`);
// }

// // Function to get product details by productId
// function getProductById(productId) {
//   // In a real-world scenario, this function would fetch product details from a database or an API based on the productId
//   // For the sake of this example, we'll simulate fetching product details using a hardcoded array of products
  
//   var products = [
//     {id: 1, name: "Product 1", description: "Product 1 description", price: 19.99},
//     {id: 2, name: "Product 2", description: "Product 2 description", price: 29.99},
//     // Add more products here
//   ];
  
//   // Find the product with the given productId
//   var product = products.find(function(p) {
//     return p.id === productId;
//   });
  
//   return product;
// }

// // Function to update the cart count in the UI
// function updateCartCount() {
//   var cartCount = cartItems.length;
//   var cartCountElement = document.getElementById("cart-count");
  
//   // Update the cart count element
//   cartCountElement.innerText = cartCount;
// }

// // Function to display the cart items in the cart page
// function displayCartItems() {
//   var cartItemsElement = document.getElementById("cart-items");
  
//   // Clear the cart items element
//   cartItemsElement.innerHTML = "";
  
//   // Loop through the cartItems array and display the cart items in the UI
//   cartItems.forEach(function(item) {
//     var itemElement = document.createElement("li");
//     itemElement.textContent = `Product: ${item.name}, Price: $${item.price}`;
//     cartItemsElement.appendChild(itemElement);
//   });
// }
