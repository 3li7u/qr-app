// lestening to form submitting
const generatingForm = document.querySelector('.qr-generator form');
generatingForm.onsubmit = event => genetateQRCodeHandler(event);

// handle generating QR code
function genetateQRCodeHandler(e) {
  e.preventDefault();
  if (e.target['url'].value !== '') {
    const qrCode = generateQRCode(e.target['url'].value, e.target['size'].value);
    setTimeout(() => downloadHandler(qrCode), 1);
  }
  e.target['url'].value = '';
  e.target['size'].value = '200';
};

// generate QR code
function generateQRCode(url, size) {
  document.querySelector('#qr-code').innerHTML = '';
  return new QRCode("qr-code", {
    text: url,
    width: size,
    height: size,
    colorDark: "#555",
    colorLight: "#fff",
  });
}
// handle download button click
function downloadHandler(qrCode) {
  const imgSrc = qrCode._el.childNodes[1].currentSrc;
  const downloadBtn = document.querySelector('.qr-image a');
  downloadBtn.classList.remove('disabled');
  downloadBtn.href = imgSrc;
}