window.addEventListener("load", function () {
    console.log("Good job opening the window");

    // Get the video element
    var video = document.getElementById("player1");

    // Initialize the video element
    // video.autoplay = false;
    video.loop = false;

    // Get references to the buttons
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var slowButton = document.getElementById("slower");
    var fastButton = document.getElementById("faster");
    var skipButton = document.getElementById("skip");
    var muteButton = document.getElementById("mute");
    var volumeSlider = document.getElementById("slider");
    var vintageButton = document.getElementById("vintage");
    var origButton = document.getElementById("orig");

    // Update the volume information
    function updateVolumeInfo() {
        document.querySelector('#volume').innerHTML = `${video.volume * 100}%`;
    }

    // Play the video and update the volume information
    playButton.addEventListener("click", function () {
        video.play();
        updateVolumeInfo();
    });

    // Pause the video
    pauseButton.addEventListener("click", function () {
        video.pause();
    });

    // Slow down the video
    slowButton.addEventListener("click", function () {
        video.playbackRate *= 0.9;
        console.log("New speed: " + video.playbackRate.toFixed(2));
    });

    // Speed up the video
    fastButton.addEventListener("click", function () {
        video.playbackRate /= 0.9;
        console.log("New speed: " + video.playbackRate.toFixed(2));
    });

    // Skip ahead 10 seconds
    skipButton.addEventListener("click", function () {
        video.currentTime += 10;
        if (video.currentTime > video.duration) {
            video.currentTime = 0;
        }
        console.log("Current time: " + video.currentTime.toFixed(2));
    });

    // Mute/unmute the video
    muteButton.addEventListener("click", function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Change the volume
    volumeSlider.addEventListener("input", function () {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    // Apply the "oldSchool" class
    vintageButton.addEventListener("click", function () {
        video.classList.add("oldSchool");
    });

    // Remove the "oldSchool" class
    origButton.addEventListener("click", function () {
        video.classList.remove("oldSchool");
    });
});