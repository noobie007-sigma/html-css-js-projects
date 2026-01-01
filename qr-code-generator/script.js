const qrinput = document.getElementById("qr-input");
const qrimage = document.getElementById("qr-img");
const qrbutton = document.getElementById("qr-button");

function generateQR() {
    const inputValue = qrinput.value.trim();
    if(!inputValue) {
        alert("Please enter a valid URL");
        return;
    }
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
}

qrbutton.addEventListener("click", generateQR);
qrinput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQR();
    }
});

