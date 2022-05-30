// Add the coffee to local storage with key "coffee"
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`

let data= JSON.parse(localStorage.getItem("coffee")) || [];

fetch(url).then(function(res){
    return res.json();

}).then(function(res){
    appendData(res.menu.data);
}).
catch(function(err){
    console.log('err:', err)
    
})


function appendData(data){
    data.forEach(function(el){
        let box = document.createElement("div")
        box.setAttribute("id","box");

        let tittle = document.createElement("h2")
        tittle.innerText = el.tittle;

        let image = document.createElement("img")
        image.src = el.image;
        image.setAttribute("id","image")

        let price = document.createElement("h4")
        price.innerText = el.price;

        let btn = document.createElement("h4");
        btn.innerText="Add to Bucket";
        btn.addEventListener("click",function(){
            addtocart(el)
        });

        box.append(image,tittle,price,btn);
        document.getElementById("menu").append(box)
    });
}

// function calculate(){
//     let data = JSON.parse(localStorage.getItem("coffee")) || [];

//     let obj = {};

//     for (let i = 0; i<data.length;i++){
//         if(obj[data[i].coffee_count]){

//         }
//     }
// }


function addtocart(el){
    data.push(el);
    localStorage.setItem("coffee",JSON.stringify(data));
}
let length = data.length
document.getElementById("coffee-count").innerText=length;