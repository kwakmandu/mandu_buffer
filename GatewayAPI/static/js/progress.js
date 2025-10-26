// ⏱ 경과 시간 표시
(function () {
  let startTime = Date.now();
  setInterval(() => {
    const elapsedSec = Math.floor((Date.now() - startTime) / 1000);
    const elapsedTimeEl = document.getElementById("elapsed-time");
    if (elapsedTimeEl) elapsedTimeEl.textContent = elapsedSec;
  }, 1000);
})();

// 🚀 프로그레스바 애니메이션
(function () {
  const progressEl = document.getElementById("progress");
  let progress = 0;

  const interval = setInterval(() => {
    progress += 20;
    progressEl.style.width = progress + "%";
    progressEl.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      window.location.href = "https://www.naver.com";
    }
  }, 1000);
})();
