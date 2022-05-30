// On clicking remove button the item should be removed from DOM as well as localstorage.
let data= JSON.parse(localStorage.getItem("coffee")) || [];

data.map(function(el,index){
    let box = document.createElement("div")
    box.setAttribute("id","box");

    let tittle = document.createElement("h2")
    tittle.innerText = el.tittle;

    let image = document.createElement("img")
    image.src = el.image;
    image.setAttribute("id","image")

    let price = document.createElement("h4")
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute("id","remove_coffee");
    btn.addEventListener("click",function(){
        removedata(el,index);
    });

    box.append(image,tittle,price,btn);

    document.getElementById("bucket").append(box)
});

function removedata(el,index){
    data.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(data));
    window.location.reload()
}

var total = data.reduce(function(sum,el,index,arr){
    return sum + el.price
});

document.getElementById("total-amount").innerhtml=total;