function askMyName() {
   const name = prompt("Please Enter Your Name"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

   if (name != null) {
       document.getElementById("askMyName").innerHTML = "My name is " + name;
   }
}

function helloWorld() {
   const h1message = document.getElementById("askMyName").innerHTML // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
   alert(h1message + 'ถ้ารีบขนาดนี้ทำไมไม่มาตั้งแต่เมื่อวาน')
}


function calAge() {
   const Yofbirth = prompt("Please enter your year of birth");
   const date = new Date()
   let year = date.getFullYear()
   const age = year - Yofbirth;
   alert("ยินดีด้วย นายอยู่ในประเทศนี้มา"+ age +"ปีแล้ว")
}

function loadProfile() {
   const MyName = prompt("Please enter your name");
   const Province = prompt("Please enter your province");
   document.getElementById("my-name").innerHTML = MyName;
   document.getElementById("my-province").innerHTML = Province;
}