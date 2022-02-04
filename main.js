addEventListener("DOMContentLoaded", function() {

    let swapped = false;

    //wait for an option tag to be selected
    document.querySelectorAll(".custo-form").forEach(element => {
        element.addEventListener("change", function() {
            calculate()
        })
    })
    
    function calculate() {
        console.log("Oh yuuurrrrr")
    }
})

