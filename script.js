

var weight = document.getElementById('weight').value;
var pricePerKilo = document.getElementById('price').value;

    function paySalary()
    {
        var weight = document.getElementById('weight').value;
        var pricePerKilo = document.getElementById('price').value;
        var weight1 = weight;
        var price = pricePerKilo;

        var totalPay = weight1 * price;

        document.getElementById("amount").value = totalPay;
    
    
    }

    
