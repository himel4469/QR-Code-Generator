'use strict';
document.getElementById('qr-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const text = document.getElementById('text-input').value;
  const size = parseInt(document.getElementById('size-input').value);
  const color = document.getElementById('color-input').value;
  const bgColor = document.getElementById('bgColor-input').value;
  QRCode.toDataURL(
    text,
    {
      width: size,
      color: {
        dark: color,
        light: bgColor,
      },
    },
    (text, url) => {
      if (text) {
        alert('Enter your Information To Get QR code');
      } else {
        document.getElementById('qr-code').src = url;
      }
      return;
    }
  );
});
