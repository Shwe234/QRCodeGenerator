const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.getElementById("imgBox");
const qrBox = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const button = document.querySelector("button");

const generateQRCode = () => {
    const qrData = qrText.value.trim();
    if (qrData) {
        qrBox.src = `${URL}${encodeURIComponent(qrData)}`;
        imgBox.style.display = 'block'; 
    }
};

button.addEventListener("click", generateQRCode);
