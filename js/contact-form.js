(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var note = document.getElementById("form-note"), via = "wa";
  form.querySelectorAll("button[type=submit]").forEach(function (b) { b.addEventListener("click", function () { via = b.getAttribute("data-via"); }); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements, name = f.name.value.trim(), phone = f.phone.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
    var okMail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    note.style.display = "block";
    if (!name || !msg || (via === "mail" && !okMail) || (via === "wa" && !phone && !okMail)) {
      note.style.color = "#c00";
      note.textContent = via === "mail" ? "Please add your name, a valid email and your details." : "Please add your name, a phone number or email, and your details.";
      return;
    }
    var text = "Hello BSU Prints, I need: " + f.product.value + ".\n" + msg + "\n\nName: " + name + (phone ? "\nPhone: " + phone : "") + (email ? "\nEmail: " + email : "");
    note.style.color = "#080";
    if (via === "mail") {
      note.textContent = "Opening your email app...";
      window.location.href = "mailto:bsuprints@gmail.com?subject=" + encodeURIComponent("Printing quote: " + f.product.value + " (" + name + ")") + "&body=" + encodeURIComponent(text);
    } else {
      note.textContent = "Opening WhatsApp...";
      window.open("https://wa.me/923333181139?text=" + encodeURIComponent(text), "_blank", "noopener");
    }
  });
})();
