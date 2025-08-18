let greeting = document.querySelector("#degiskenrenk");
greeting.addEventListener("mouseover", domClick);

function domClick() {
    console.log("etkinlik denetlendi");
    // Renk kontrolü için güvenilir bir yöntem kullanın
    this.style.color = (this.style.color === "black") ? "#dc8528" : "black";
}