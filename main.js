addEventListener("DOMContentLoaded", function() {

    index = 0;

    //hide all of the feature divs
    document.querySelectorAll(".w3-animate-opacity").forEach(element => {
        element.style.display = "none";
    })

    //wait for an option tag to be selected
    document.querySelectorAll(".custo-form").forEach(element => {
        element.addEventListener("change", function() {
            calculate()
        })
    })

    //features window
    //wait for the left and right buttons to be pushed
    document.getElementById("lb").addEventListener("click", function() {

        document.querySelectorAll(".dot").forEach(element => {
            element.style.backgroundColor = "white";
        })

        document.querySelectorAll(".w3-animate-opacity").forEach(element => {
            element.style.display = "none";
        })
        
        if (index == 0) {
            
            index = 5;
        }

        if (index - 1 == 0) {
            index = 4;
        }
        else {
            index --;
        }

        console.log(index)

        var dot = document.querySelector(`#d${index}`);
        dot.style.backgroundColor = "black";

        var div = document.querySelector(`#b${index}`);
        div.style.display = "block";
    })

    document.getElementById("rb").addEventListener("click", function() {

        document.querySelectorAll(".dot").forEach(element => {
            element.style.backgroundColor = "white";
        })

        document.querySelectorAll(".w3-animate-opacity").forEach(element => {
            element.style.display = "none";
        })

        if (index + 1 == 5) {
            index = 1;
        }
        else {
            index ++;
        }

        console.log(index)

        var dot = document.querySelector(`#d${index}`);
        dot.style.backgroundColor = "black";

        var div = document.querySelector(`#b${index}`);
        div.style.display = "block";



    });
    
})

function calculate() {
        
    var addTo = 4500000;
    var tags = document.querySelectorAll(".custo-form")
    tags.forEach(element => {
        
        if (element.value == "M299") {
            addTo += 1500000;
        }
        else if (element.value == "M260") {
            addTo += 2000000;
        }
        else if (element.value == "GAU19") {
            addTo += 1000000;
        }
        else if (element.value == "M134") {
            addTo += 500000;
        }
        else if (element.value == "Goliath") {
            addTo += 50000;
        }
        else if (element.value == "1T") {
            addTo += 15000;
        }
        else if (element.value == "2T") {
            addTo += 30000;
        }

    })

    addTo = addTo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var final = document.querySelector("#final-price")
    final.innerHTML = `Total Price: USD $${addTo}`
}
