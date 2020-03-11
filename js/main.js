$(document).ready(function(){

    ////// Toggle side bar open //////
    $(".hamburger").click(function() {
        $(".sidebar").toggleClass("open");
        $(".contentbox").toggleClass("open");
    
    });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //var btn = document.getElementById("login");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    $('#login').on('click',function(){
        $('#myModal').css('display',"flex");
    });


    // When the user clicks on <span> (x), close the modal
    $('.close').on('click', function(){
        $('#myModal').css('display','none');
    });
    /*span.onclick = function() {
    modal.style.display = "none";
    }*/

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

          // Load the Visualization API and the corechart package.
          google.charts.load('current', {'packages':['corechart']});

          // Set a callback to run when the Google Visualization API is loaded.
          google.charts.setOnLoadCallback(drawChart);
    
          // Callback that creates and populates a data table,
          // instantiates the pie chart, passes in the data and
          // draws it.
          function drawChart() {
    
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
    
            // Set chart options
            var options = {'title':'How Much Pizza I Ate Last Night'};
    
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
          }

          $(window).resize(function(){
            drawChart();
          });
    
});