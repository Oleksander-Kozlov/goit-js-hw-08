import Player from "@vimeo/player";
import throttle from "lodash.throttle";
// перевіряю чи пусте локальне сховище
const timeUpd = JSON.parse(localStorage.getItem('videoplayer_current_time')) ?? 0;
// додаю програвач
const player = new Player('vimeo-player');
// час відтворення користувача
let userTime = Number
  if (JSON.parse(localStorage.getItem('videoplayer_current_time')
  )) {
    userTime = Number(JSON.parse(
      localStorage.getItem('videoplayer_current_time')
    ));
  }
 else { userTime = 0 } ;

// зберігаю актуальний час у сховище 
const onTimeupdate = function (data) { 
  
  localStorage.setItem(
    'videoplayer_current_time',
    JSON.stringify(data.seconds)
  ); 
};
// затримка збереження часу 1с
player.on('timeupdate', throttle(onTimeupdate, 1000));
// установлення поточного часу відтворення відео
player
  .setCurrentTime(userTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
