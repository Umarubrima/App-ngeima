// Toggle dropdown menu
document.getElementById("menuToggle").addEventListener("click", function () {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Tab switching
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    document.querySelector(".tab.active").classList.remove("active");
    this.classList.add("active");
    document.querySelector(
      ".content"
    ).innerHTML = `<p>${this.textContent} content loaded...</p>`;
  });
});

// Hide dropdown on outside click
document.addEventListener("click", function (e) {
  if (
    !document.getElementById("menuToggle").contains(e.target) &&
    !document.getElementById("dropdownMenu").contains(e.target)
  ) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});
const cameraIcon = document.querySelector('.camera-icon');
const cameraView = document.getElementById('camera-view');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');

// Open the camera when the icon is clicked
cameraIcon.addEventListener('click', () => {
  cameraView.style.display = 'block';
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => {
      alert('Camera access denied or not supported');
    });
});

// Take a photo
function takePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const imageData = canvas.toDataURL('image/png');
  photo.src = imageData;
  photo.style.display = 'block';
}
