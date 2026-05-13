// script.js

const video = document.getElementById("video");

const channelsDiv = document.getElementById("channels");

fetch("https://raw.githubusercontent.com/sm-monirulislam/Toffee-Auto-Update-Playlist/refs/heads/main/toffee_data.json")

.then(res => res.json())

.then(data => {

  const channels = data.response;

  channels.forEach(channel => {

    const div = document.createElement("div");

    div.className = "channel";

    div.innerHTML = `

      <img src="${channel.logo}" alt="logo">

      <p>${channel.name}</p>

    `;

    div.onclick = () => {

      if (Hls.isSupported()) {

        const hls = new Hls();

        hls.loadSource(channel.link);

        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, function () {

          video.play();

        });

      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {

        video.src = channel.link;

        video.addEventListener('loadedmetadata', function () {

          video.play();

        });

      }

    };

    channelsDiv.appendChild(div);

  });

})

.catch(error => {

  console.log(error);

});
