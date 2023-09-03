function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
  } else {
    const lovePercentage = Math.floor(Math.random() * 100) + 1;
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s love percentage is: ${lovePercentage}`;
    if (lovePercentage < 30) {
      result.innerHTML += "<br> Not a Great Match. Keep Searching";
    } else if (lovePercentage < 70) {
      result.innerHTML += "<br>There is Potential. Give it a try";
    } else {
      result.innerHTML += "<br>Great match! Love is in the air";
    }
  }
}
