const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const loginDialog = document.querySelector("#login-dialog");
const closeDialog = document.querySelector(".dialog-close");
const searchForm = document.querySelector("#centre-search");
const directoryStatus = document.querySelector("#directory-status");
const centreQuery = document.querySelector("#centre-query");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

document.querySelectorAll(".login-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => loginDialog.showModal());
});

closeDialog.addEventListener("click", () => loginDialog.close());

loginDialog.addEventListener("click", (event) => {
  if (event.target === loginDialog) {
    loginDialog.close();
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = centreQuery.value.trim();
  directoryStatus.querySelector("h3").textContent = query
    ? "No verified listings found"
    : "Centre profiles are on the way";
  directoryStatus.querySelector("p").textContent = query
    ? "There are no public profiles available to match this search yet. Listings will appear after review and consent."
    : "There are no verified public listings yet. Please check back as the directory develops.";
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
