const images = [
  "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6075185986d092000b192d0a/files/best-free-travel-images-main-image-hd-op.webp",
  "https://img.freepik.com/premium-photo/portrait-smiling-girl-laying-grass-taking-selfie-with-camera_1048944-2795284.jpg?semt=ais_hybrid&w=740&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbWiWIGIG4R4rMlGbixC0OpinwRudeV67Cw&s",
  
  "https://img.freepik.com/premium-photo/portrait-smiling-girl-laying-grass-taking-selfie-with-camera_1048944-2795284.jpg?semt=ais_hybrid&w=740&q=80",
];


let current = 0;

function updateImage() {  
    const heroSection = document.getElementById("hero");
    heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${images[current]})`
}

updateImage();

setInterval(()=>{
    current = (current + 1) % images.length;
    updateImage();
}, 3000);






// linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),