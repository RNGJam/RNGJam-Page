async function requestTheme() {
    await fetch("https://rngjam-generator.onrender.com/generate")
        .then(res => res.json())
        .then(data => updatePageContent(data))

    
}
async function showRollResults() {
    await fetch("https://rngjam-generator.onrender.com/show_result")
        .then(res => res.json())
        .then(data => updatePageContent(data))
}



function updatePageContent(data) {
    console.log(data.theme)
    document.getElementById('themeObj').innerHTML = data.theme 
    if (data.rolls <= 0) {
        document.getElementById('rollButton').innerHTML = "No rolls left"

    } 
    else if (data.rolls >= 3 && data.theme == null) {
        document.getElementById('rollButton').innerHTML =  "Generate Theme"
        document.getElementById('themeObj').innerHTML =  "No Theme"

    } else {
        document.getElementById('rollButton').innerHTML = "Rolls left:" + data.rolls 
    }
}







/*
const xhr = new XMLHttpRequest()

xhr.open("GET","https://jsonplaceholder.typicode.com/posts/5","true");

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send("Hello World")
*/