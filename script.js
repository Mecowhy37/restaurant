fetch("https://kea-alt-del.dk/t5/api/productlist").then(function(response){
    return response.json();

})
.then(function(data){
    dataRecived(data);
})

function dataRecived(products) {
    products.forEach(showProduct);
    const card = document.querySelectorAll("div.card");

    card.forEach(el=>{
        el.addEventListener("click", evt=>{
            el.classList.toggle("expand");
        })
    })

}

 function showProduct(myProduct){
    //  console.log(myProduct);
    const temp = document.querySelector(".productTemplate").content;
    const myCopy = temp.cloneNode(true);

    myCopy.querySelector(".name").textContent = myProduct.name;
    myCopy.querySelector(".firstPrice").textContent = myProduct.price + ",-";
    myCopy.querySelector(".descr").textContent = myProduct.shortdescription;

    if(myProduct.discount){
        // console.log(myProduct.discount);
        myCopy.querySelector(".price p:nth-child(3)").textContent = (myProduct.price*(100-myProduct.discount)/100) + ",-";
        myCopy.querySelector(".price").classList.add("newprice");
    }

    if(myProduct.soldout){
        // myCopy.querySelector(".price").classList.remove("newprice");
        myCopy.querySelector(".price").classList.add("soldout");
    }

    const parentElem = document.querySelector("#courses");
    parentElem.appendChild(myCopy);
 }

 fetch("https://kea-alt-del.dk/t5/api/categories").then(function(response){
    return response.json();

})
.then(function(data){
    categoriesRecived(data);
})

function categoriesRecived(categories){
    categories.forEach(type =>{
        console.log(type);

    // js selectors without #id ??
    
    const temp = document.querySelector(".categoryTemplate").content;
    const myCopy = temp.cloneNode(true);

    myCopy.querySelector(".cat").textContent = type;

    const parentElem = document.querySelector(".menu");
    parentElem.appendChild(myCopy);

    })
}


 

