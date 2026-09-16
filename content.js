function showError(message) {
 document.getElementById("result").innerHTML = `
 <div class="warning error">
 ${escapeHTML(message)}
 </div>
 `;
}
function escapeHTML(value) {
 return String(value)
 .replaceAll("&", "&amp;")
 .replaceAll("<", "&lt;")
 .replaceAll(">", "&gt;")
 .replaceAll('"', "&quot;")
 .replaceAll("'", "&#039;");
}
