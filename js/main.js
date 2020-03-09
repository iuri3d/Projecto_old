$(".hamburger").click(function() {
    $(".sidebar").toggleClass("open");
    $(".contentbox").toggleClass("open");

});

/*new Chart (document.getElementById('sellers'),{
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
});*/

$(document).ready(function(){

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("login");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
});