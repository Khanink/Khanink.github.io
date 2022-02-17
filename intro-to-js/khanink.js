function askMyName() {
    const name = prompt("Please enter your name");
     // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("name").innerHTML = "My name is " + name;
    } }
 
 function helloWorld() {
    const h1message = document.getElementById('name').innerHTML
       alert(h1message + 'ถ้ารีบขนาดนี้ทำไมไม่มาตั้งแต่เมื่อวาน');
    }