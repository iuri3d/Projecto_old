$(".hamburger").click(function() {
    $(".sidebar").toggleClass("open");
    $(".contentbox").toggleClass("open");

});

new Chart (document.getElementById('sellers'),{
    type: 'pie',
    data: {
        labels:["João", "Maria", "Sandra", "Francisco"],
        datasets:[{
            label: "Vendedores",
            backgroundColor:["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
            data: [1234,234,4567,789]
        }]
    },
    options: {
        title:{
            display:true,
            text:'Vendedores'
        }
    }
});