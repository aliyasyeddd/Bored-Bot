
const idea = document.getElementById("activity")
 
document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      idea.className = "activity";
      idea.classList.add("activity-idea");
      idea.style.display = "block"
      idea.textContent = data.activity
    })
})