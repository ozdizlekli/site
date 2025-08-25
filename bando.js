document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.rotating-badge .word');
    let currentIndex = 0;
  
    // İlk kelimeyi aktif yap
    words[currentIndex].classList.add('active');
  
    function rotateWords() {
      words[currentIndex].classList.remove('active');
  
      currentIndex = (currentIndex + 1) % words.length;
  
      words[currentIndex].classList.add('active');
    }
  
    setInterval(rotateWords, 2000);
let greeting = document.querySelector("#degiskenrenk");
greeting.addEventListener("mouseover", domClick);

function domClick() {
    console.log("etkinlik denetlendi");
    // Renk kontrolü için güvenilir bir yöntem kullanın
    this.style.color = (this.style.color === "black") ? "#dc8528" : "black";
}
let greeting2 = document.querySelector("#hak");
greeting2.addEventListener("mouseover", domClick);

function domClick() {
    console.log("etkinlik denetlendi");
    // Renk kontrolü için güvenilir bir yöntem kullanın
    this.style.color = (this.style.color === "black") ? "#dc8528" : "black";
}
let greeting3 = document.querySelector("#hiz");
greeting3.addEventListener("mouseover", domClick);

function domClick() {
    console.log("etkinlik denetlendi");
    // Renk kontrolü için güvenilir bir yöntem kullanın
    this.style.color = (this.style.color === "black") ? "#dc8528" : "black";
}
let greeting4 = document.querySelector("#biz");
greeting4.addEventListener("mouseover", domClick);

function domClick() {
    console.log("etkinlik denetlendi");
    // Renk kontrolü için güvenilir bir yöntem kullanın
    this.style.color = (this.style.color === "black") ? "#dc8528" : "black";
}
let greeting5 = document.querySelector("#gal");
greeting5.addEventListener("mouseover", domClick);

function domClick() {
    console.log("etkinlik denetlendi");
    // Renk kontrolü için güvenilir bir yöntem kullanın
    this.style.color = (this.style.color === "black") ? "#dc8528" : "black";
}

let myclock = document.querySelector("#myClock")
function updateClock() {
    let now = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[now.getDay()];
    let hours = now.getHours().toString().padStart(2, '0');           // 2 haneli yapmak için
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds} - ${day}`;
    document.getElementById("myClock").textContent = timeString;
}

setInterval(updateClock, 1000);                                       // Her saniye güncelle
updateClock();          
                                              // Sayfa yüklenince çalıştır
                                            });