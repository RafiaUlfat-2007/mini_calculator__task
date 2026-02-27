// document.getElementById("addition").addEventListener("click", ()=>{
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
    
//     document.getElementById("result").innerHTML = parseFloat(a) + parseFloat(b);
// })

// // FOR SUBTRACTION
// document.getElementById("subtraction").addEventListener("click", ()=>{
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
    
//     document.getElementById("result").innerHTML = parseFloat(a) - parseFloat(b);
// })

// // FOR MULTIPLICATION
// document.getElementById("multiplication").addEventListener("click", ()=>{
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
    
//     document.getElementById("result").innerHTML = parseFloat(a) * parseFloat(b);
// })

// // FOR DIVIDE
// document.getElementById("divition").addEventListener("click", ()=>{
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
    
//     document.getElementById("result").innerHTML = parseFloat(a) / parseFloat(b);
// })

// FOR RESULT
// document.getElementById("result").addEventListener("click", ()=>{
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
    
//     document.getElementById("result").innerHTML = parseFloat(a) + parseFloat(b);'';
// })

// ADD
document.getElementById("addition").addEventListener("click", () => {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a + b;
});

// SUBTRACT
document.getElementById("subtraction").addEventListener("click", () => {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a - b;
});

// MULTIPLY
document.getElementById("multiplication").addEventListener("click", () => {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a * b;
});

// DIVIDE
document.getElementById("divition").addEventListener("click", () => {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a / b;
});

// CLEAR BUTTON
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("result").innerHTML = "Result";
});