document.getElementById("confirm").addEventListener("click",evoke());

function evoke(){
    setTimeout(function(){
        alert("Your order is accepted")
    },0);

    setTimeout(function(){
        alert("Your order is being prepared")
    },3000);

    setTimeout(function(){
        alert("Your order is being packed")
    },8000);

    setTimeout(function(){
        alert("Your order is out for delivery")
    },10000);

    setTimeout(function(){
        alert("Order Delivered")
    },12000);

}