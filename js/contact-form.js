(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var note = document.getElementById("form-note");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    var ok = name && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && msg;
    note.style.display = "block";
    if (!ok) { note.style.color = "#c00"; note.textContent = "Please fill in your name, a valid email and a message."; return; }
    var subject = encodeURIComponent("Website enquiry from " + name);
    var body = encodeURIComponent(msg + "\n\n-- " + name + " (" + email + ")");
    note.style.color = "#080"; note.textContent = "Opening your email app to send the message...";
    window.location.href = "mailto:bsuprints@gmail.com?subject=" + subject + "&body=" + body;
  });
})();
