/* =========================================================
   Tala Coffee — small, dependency-free interactions
   1. Mobile navigation toggle
   2. "Open now / Closed" status using Philippine time
   3. Gallery lightbox
   4. Footer year + star animation timing
   ========================================================= */

// ---------- 1. Mobile navigation ----------
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

function setNav(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNav(!isOpen);
});

// Close the menu after tapping a link, or pressing Escape
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) setNav(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("is-open")) {
    setNav(false);
    navToggle.focus();
  }
});

// ---------- 2. Open-now status ----------
// Edit these hours for each client. 0 = Sunday ... 6 = Saturday. 24-hour clock.
const HOURS = {
  0: [8, 23], 1: [7, 23], 2: [7, 23], 3: [7, 23],
  4: [7, 23], 5: [7, 23], 6: [8, 23],
};

function formatHour(h) {
  const suffix = h >= 12 && h < 24 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr} ${suffix}`;
}

function updateOpenStatus() {
  const el = document.querySelector("[data-open-status]");
  if (!el) return;

  // Always use Manila time, even if the visitor's device is set elsewhere
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila", weekday: "short", hour: "numeric", minute: "numeric", hour12: false,
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const hourNow = (Number(get("hour")) % 24) + Number(get("minute")) / 60;

  const [open, close] = HOURS[dayIndex];
  if (hourNow >= open && hourNow < close) {
    el.textContent = `Open now until ${formatHour(close)}`;
    el.classList.add("is-open");
  } else {
    const nextOpen = hourNow < open ? open : HOURS[(dayIndex + 1) % 7][0];
    el.textContent = `Closed now. Opens at ${formatHour(nextOpen)}`;
    el.classList.add("is-closed");
  }
}
updateOpenStatus();

// ---------- 3. Gallery lightbox ----------
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".g-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    lightboxImg.src = img.dataset.full || img.src; // larger version if available
    lightboxImg.alt = img.alt;
    lightbox.showModal(); // <dialog> handles focus trapping and Escape for us
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
// Click on the dark backdrop to close
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

// ---------- 4. Small details ----------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Stagger the stars so the constellation "lights up" one by one
document.querySelectorAll(".c-stars circle:not(.faint)").forEach((star, i) => {
  star.style.setProperty("--i", i);
});
