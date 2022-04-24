let time = document.getElementById('time');
let start = document.getElementById('startbtn');
let stop = document.getElementById('stopbtn');
let reset = document.getElementById('resetbtn');

let hour = 0;
let minute = 0;
let second = 0;
let m_second= 0;
let interval;

// スタートボタンクリック時の動作
function clickStart() {
  m_second++;
  if(m_second / 10 == 1){
    second++;
    m_second = 0;
    if(second / 10 == 1){
      minute++;
      second = 0;
      if (minute / 10 ==1) {
        hour++;
        minute = 0;
      }
    }
  }
  time.innerHTML = hour + ':' + minute + ':' + second + ':' + m_second;
}
startbtn.addEventListener("click", function(){
  interval = setInterval(clickStart, 100);
  startbtn.disabled = true;
  stopbtn.disabled = false;
})

// ストップボタンクリック時の動作
stopbtn.addEventListener("click", function(){
  clearInterval(interval);
  startbtn.disabled = false;
  stopbtn.disabled = true;
  resetbtn.disabled = false;
})

// リセットボタンクリック時の動作
resetbtn.addEventListener("click", function(){
  clearInterval(interval);
  time.innerHTML = "0:0:0:0";
  hour = minute = second = m_second = 0;
  startbtn.disabled = false;
  stopbtn.disabled = true;
  resetbtn.disabled = true;
})