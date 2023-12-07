// bygg ihop hela sidans html i en innerHTML

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

// await är nyare och mer populärt

// Elementen jag hämtar in

const channelDiv = document.querySelector("#channels");

async function getData() {
  try {
    const response = await fetch(
      "https://api.sr.se/api/v2/channels?format=json&size=100"
    );

    const data = await response.json();
    console.log(data);

    document.body.style.display = "grid";
    document.body.style.placeContent = "center";

    data.channels.forEach((channel) => {
      const radioEl = document.createElement("div");

      radioEl.style.margin = "20px";
      radioEl.style.width = "500px";
      radioEl.style.backgroundColor = `#${channel.color}`;
      radioEl.style.display = "grid";
      radioEl.style.gridTemplateColumns = "1fr 1fr";
      radioEl.style.fontSize = "26px";

      radioEl.innerHTML = `<img alt="bild" src="${channel.image}" style="height:200px;"><div ><h2>${channel.name}</h2><audio controls style="width: 90%;">
       <source src="${channel.liveaudio.url}" type="audio/mpeg"/>
     </audio></div>`;

      channelDiv.appendChild(radioEl);
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

getData();
