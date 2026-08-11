// EDIT THIS ONE VALUE when Mnyovu gives you the real WhatsApp number.
// Use country code format without +, spaces or brackets. Example: 27821234567
const WHATSAPP_NUMBER = "2779XXXXXXX";

const message = encodeURIComponent(
  "Hi Mnyovu's Sneaker Wash 👟 I would like to book a sneaker/shoe cleaning service. I can send photos of my pair."
);

document.querySelectorAll('[id^="whatsapp"]').forEach(link => {
  if (!WHATSAPP_NUMBER.includes("X")) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  } else {
    link.href = "#contact";
    link.removeAttribute("target");
    link.addEventListener("click", e => {
      e.preventDefault();
      alert("Add Mnyovu's real WhatsApp number in script.js first.");
    });
  }
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
