addEventListener("DOMContentLoaded", function() {

    //wait for an option tag to be selected
    document.querySelectorAll(".custo-form").forEach(element => {
        element.addEventListener("change", function() {
            calculate()
        })
    })
    
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