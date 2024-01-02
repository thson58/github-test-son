// var boxElement = document.querySelector('.box');

// console.log(boxElement.style);

var listFood = [
    {
        name : "mi tom" ,
        price : 3000 ,
        quantity : 20,
    },

    {
        name : "mi tron" ,
        price : 5000 ,
        quantity : 20,
    },

    {
        name : "mi xao" ,
        price : 5000 ,
        quantity : 20,
    },

    {
        name : "mi goi",
        price : 5000 ,
        quantity : 20,
    }

]
 
var showName = listFood.map( function(food,index){
    return `${food.name}: ${food.price} vnd` ;
});

['mi tom : 3000 vnđ' ]

console.log(showName);

