const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbutton = document.getElementById("qr-button");
console.log(qrimg, qrinput, qrbutton);
qrbutton.addEventListener("click", () => {
  const inputValue = qrinput.value;
  console.log(inputValue);
  if (!inputValue) {
    alert("Please enter a QR code.");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=stripchat.com`;
    qrimg.alt = `qr code for ${inputValue}`;
  }
});
