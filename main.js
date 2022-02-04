addEventListener("DOMContentLoaded", function() {

    //wait for an option tag to be selected
    document.getElementsByTagName("option").array.forEach(element => {
        element.addEventListener("click", function() {
            // get values out of all of the select tags
            let values = document.getElementsByClassName("custo-form").value;
            console.log(values)
        })
    });
})