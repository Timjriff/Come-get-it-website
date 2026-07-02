const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const quoteForm = document.querySelector("[data-quote-form]");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent("Come Get It junk removal quote request");
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
      `Phone: ${data.get("phone") || ""}\n` +
      `Email: ${data.get("email") || ""}\n` +
      `Service: ${data.get("service") || ""}\n` +
      `City: ${data.get("city") || ""}\n\n` +
      `Details:\n${data.get("details") || ""}`
    );
    window.location.href = `mailto:comegetit1503@gmail.com?subject=${subject}&body=${body}`;
  });
}
