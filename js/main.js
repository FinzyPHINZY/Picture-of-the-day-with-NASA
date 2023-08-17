//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("input").addEventListener("click", getPicture);

function getPicture() {
  const date = document.querySelector("input").value;
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=cjeRMtumMvQw0G3liXLvEBVS5OegIENMxh4Mhf4W&date=${date}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".date").textContent = date;
      document.querySelector(".description").textContent = data.explanation;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h2").textContent = data.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
