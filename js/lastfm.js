const lastfm_url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=hnrymrtnz&api_key=4478868069a1b7995d4ab57e24abbc16&format=json&limit=5';

document.addEventListener("DOMContentLoaded", function () {
    fetch(lastfm_url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 2));

        const tracksContainer = document.getElementById("tracks-container");

        const tracks = data.recenttracks?.track?.map(track => ({
            name: track.name,
            artist: track.artist?.["#text"] || "Unknown Artist",
            image: track.image.find(img => img.size === "extralarge")?.["#text"] || null,
            time: track.date?.["#text"] || "Now Playing"
        }));

        tracks.forEach(track => {
            const trackElement = document.createElement("div");
            trackElement.classList.add("track");

            trackElement.innerHTML = `
            <img src="${track.image}" alt="Album Art">
            <div>
                <strong>${track.name}</strong> - ${track.artist} <br>
                 - <small>${track.time}</small>
            </div>
            `;

            tracksContainer.appendChild(trackElement);
        });

        console.log(tracks)
    })
    .catch(error => {
        console.error('Error:', error);
    });
});