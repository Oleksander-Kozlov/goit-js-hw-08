import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const timeUpd = JSON.parse(localStorage.getItem('videoplayer_current_time'))??[];
const player = new Player('vimeo-player');

let userTime = Number
  if (JSON.parse(localStorage.getItem('videoplayer_current_time')
  )) {
    userTime = Number(JSON.parse(
      localStorage.getItem('videoplayer_current_time')
    ).slice(-1)[0]);
  }
 else { userTime = 0 } ;


    console.log(userTime);
const onTimeupdate = function (data) { 
  timeUpd.push(data.seconds);
  localStorage.setItem('videoplayer_current_time', JSON.stringify(timeUpd));
 
};

player.on('timeupdate', throttle(onTimeupdate, 1000));


 


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
