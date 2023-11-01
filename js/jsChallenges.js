function challenge1(checkboxelement){
    console.log("In Challenge 1")
    if (checkboxelement.checked){
    document.querySelector("#emailDiv").style.display = "block";
    }
    else{
        document.querySelector('#emailDiv').style.display = "none"
    }
}

function challenge2(checkboxelement){
    console.log("In Challenge 2")
    let bill = document.querySelector('#bill')
    console.log("The value in bill is..." + bill.value)
    let home = document.querySelector('#home')
    console.log("The value in home is..." + home.value)
    if (checkboxelement.checked==true){
        home.value = bill.value
        home.disabled = true
    }
    else{
        home.value = ""
        home.disabled = false
    }
}

function challenge5(imageElement){
    console.log("In Challenge 5")
    console.log(imageElement.src) //Print out image src
    console.log(imageElement.alt) //Print out image alt
    displayImage = document.querySelector("#display")
    displayImage.innerHTML = imageElement.alt
}

function reset() {
    displayImage.innerHTML = "Hover over an image"
    displayImage.style.backgroundImage = "url("+ imageElement.src+ ")"
}