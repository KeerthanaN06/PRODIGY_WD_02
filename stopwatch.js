let startTime;
          let elapsedTime = 0;
          let timerInterval;
          let laps = [];

          function start() {
              if (!startTime) {
                  startTime = Date.now() - elapsedTime;
                  timerInterval = setInterval(updateTime, 10);
              }
          }

          function pause() {
              clearInterval(timerInterval);
              startTime = null;
          }

          function reset() {
              clearInterval(timerInterval);
              startTime = null;
              elapsedTime = 0;
              document.getElementById('display').innerText = '00:00:00:00';
              laps = [];
              document.getElementById('laps').innerHTML = '';
          }

          function updateTime() {
              const currentTime = Date.now();
              elapsedTime = currentTime - startTime;
              displayTime(elapsedTime);
          }

          function displayTime(time) {
              const formattedTime = new Date(time).toISOString().slice(11, -1);
              document.getElementById('display').innerText = formattedTime;
          }

          function lap() {
              if (startTime) {
                  const currentTime = Date.now();
                  const currentElapsedTime = currentTime - startTime;
                  const formattedTime = new Date(currentElapsedTime).toISOString().slice(11, -1);
                  laps.push(formattedTime);
                  const lapsList = document.getElementById('laps');
                  const li = document.createElement('li');
                  li.appendChild(document.createTextNode(formattedTime));
                  lapsList.appendChild(li);
              }
          }
