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

var mapNameFood = listFood.map(function (food , index){
    return food.name
});

console.log(mapNameFood)