const slider = document.getElementById("slider");
const line1 = document.getElementById("line1_id");
const line2 = document.getElementById("line2_id");
const line3 = document.getElementById("line3_id");
const line4 = document.getElementById("line4_id");
const active = document.getElementById("active_id");

// line1.onclick = function () {
//   slider.style.transform = "translateX(0)";
//   active.style.top = "0px";
// };

// line2.onclick = function () {
//   slider.style.transform = "translateX(-25%)";
//   active.style.top = "80px";
// };

// line3.onclick = function () {
//   slider.style.transform = "translateX(-50%)";
//   active.style.top = "160px";
// };

// line4.onclick = function () {
//   slider.style.transform = "translateX(-75%)";
//   active.style.top = "240px";
// };

line1.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)';
    active.style.top = "0px";
});

line2.addEventListener('click', () => {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = "80px";
});

line3.addEventListener('click', () => {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = "160px";
});

line4.addEventListener('click', () => {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = "240px";
});
