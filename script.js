import products from "./products.js";
// get product listing container
const productListingContainer = document.querySelector(".product-listing");

for (let i = 0; i < products.length; i++) {
    // create div element -product card
  const product = document.createElement("div")
  product.classList.add("product","product-1",  "cursor")
//   create product image element
  const productImage = document.createElement("img")
  productImage.classList.add("images")
  productImage.setAttribute("id", "product-image")
  productImage.setAttribute("src", products[i].image);
  productImage.setAttribute("alt", products[i].name);
//   create product name
  const productName = document.createElement("h2")
  productName.setAttribute("id","product-name")
  productName.textContent = products[i].name;
//   create a product price paragraph 
  const productPrice = document.createElement("p")
   productPrice.setAttribute("id","product-price")
   productPrice.classList.add("price")
  productPrice.innerHTML = `$${products[i].price}`;
  product.appendChild(productImage)
  product.appendChild(productName)
  product.appendChild(productPrice)
  productListingContainer.appendChild(product)
}
