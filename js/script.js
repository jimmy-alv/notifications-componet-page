const anchor = document.getElementById("mark-as-read");

anchor.addEventListener("click", () => {
  const elements = document.querySelectorAll("div.notification-card.unread");
  if (elements.length == 0) return;
  document.getElementById("count").innerText = 0;
  for (unread of elements) {
    const bullet = unread.querySelectorAll("span.bullet-notification")[0];
    bullet.style.display = "none";
    unread.classList.remove("unread");
  }
});
