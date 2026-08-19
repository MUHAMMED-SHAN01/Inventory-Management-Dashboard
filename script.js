// menu bar ........

const menuBtn= document.querySelector("#menuBtn");
// console.log(menuBtn);
const sidebar=document.querySelector("#sidebar");
// console.log(sidebar);
if(menuBtn && sidebar){
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});
}


// Dashboard.Html

// from validation and add 
// retrive localstorage array 

const products=JSON.parse(localStorage.getItem("inventoryData")) || []; 
// console.log(products);

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


if(AddBtn){
AddBtn.addEventListener("click", () => {

    // check all inputs

    if(  ProductName.value ==="" || Categories.value === "" || Price.value === "" || Quantity.value ==="" ){
        alert("Please fill all fields");
       
    }
    
    else  {


    // create object
   const product ={
    name: ProductName.value,
    category:Categories.value,
    price: Price.value,
    quantity: Quantity.value
   };

    // push array  
    products.push(product);
  // store in localstorage
    localStorage.setItem("inventoryData",JSON.stringify(products));
//    console.log(products);
   from.reset();

}
});
}



// Products.html


const productList=document.getElementById("productsList");

if (productList){
      
    
    products.forEach((product, index) => {

        const card=document.createElement("div");

        card.classList.add("product_cards");

        card.innerHTML= ` <h3>${product.name}
         </h3>
        <p>Category: ${product.category}</p>
        <p>Price: Rs${product.price}</p>
        <p>Quantity:${product.quantity}</p> 
        <button class="delBtn"data-index="${index}">Delete </button> `;


        productList.appendChild(card);


    });
}


 


