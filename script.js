// menu bar ........

const menuBtn= document.querySelector("#menuBtn");
// console.log(menuBtn);
const sidebar=document.querySelector("#sidebar");
// console.log(sidebar);

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
})



// from validation and add 

products=[]; 
const from=document.querySelector('#productFrom');
const AddBtn=document.getElementById('addBtn');
// console.log(AddBtn);
const ProductName=document.getElementById('productName');
// console.log(ProductName);
const Categories=document.getElementById('Categories');
// console.log(Categories);
const Price=document.getElementById('Price');
// console.log(Price);
const Quantity=document.getElementById('Quantity');
// console.log(Quantity);

AddBtn.addEventListener("click", () => {

    // create object
   const product ={
    name: ProductName.value,
    category:Categories.value,
    price: Price.value,
    quantity: Quantity.value
   };


    // push array
    
    products.push(product);
  
   console.log(products);
   from.reset();

    
});


