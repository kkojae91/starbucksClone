// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    // 최초 재생할 유튜브 영상 ID
    videoId: "An6LvWQuj_8",
    playerVars: {
      // 자동 재생 유무
      autoplay: true,
      // 반복 재생 유무
      loop: true,
      // 반복 재생할 유뷰브 영상 ID 목록
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: (event) => {
        // 음소거
        event.target.mute();
      },
    },
  });
}
