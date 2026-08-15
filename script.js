const menuBtn= document.querySelector("#menuBtn");
console.log(menuBtn);
const sidebar=document.querySelector("#sidebar");
console.log(sidebar);



menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
})