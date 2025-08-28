const loveCounterEl = document.getElementById("loveCounter");
const coinCounterEl = document.querySelector(".coains100");
const copyCounterEl = document.getElementById("copY");
const historyContainer = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearID");

let loveCount = 0;
let copyCount = 0;
let coins = 100;

function syncCounters() {
  loveCounterEl.textContent = loveCount;
  coinCounterEl.textContent = coins;
  copyCounterEl.innerHTML = copyCount + " <span>Copy</span>";
}

function formatLocalTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const day = currentDate.getDate();
  let hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");
  const formattedSecond = second.toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");

  return `${formattedDay}-${month}-${year} ${formattedHour}:${formattedMinute}:${formattedSecond} ${ampm}`;
}

function addHistoryItem(name, number) {
  const div = document.createElement("div");
  div.className = "p-2 border-b";
  div.innerHTML =
    "<p class='font-semibold'>" +
    name +
    " <span class='opacity-70'>(" +
    number +
    ")</span></p>" +
    "<p class='text-sm opacity-70'>" +
    formatLocalTime() +
    "</p>";
  historyContainer.prepend(div);
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const i of cards) {
  const heartBtn = document.getElementById("heartCount" + i);
  const copyBtn = document.getElementById("copy" + i);
  const callBtn = document.getElementById("callBtn" + i);
  const titleEl = document.querySelector(".title" + i);
  const numberEl = document.querySelector(".number" + i);

  if (!heartBtn || !copyBtn || !callBtn) continue;

  const serviceName = titleEl ? titleEl.textContent.trim() : "Service " + i;
  const serviceNumber = numberEl ? numberEl.textContent.trim() : "";

  heartBtn.addEventListener("click", function () {
    loveCount++;
    loveCounterEl.classList.add("scale-150");
    setTimeout(function () {
      loveCounterEl.classList.remove("scale-150");
    }, 300);
    syncCounters();
  });

  copyBtn.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(serviceNumber);
      copyCount++;
      syncCounters();
      alert("Copied: " + serviceNumber);
    } catch {
      alert("Copy failed!");
    }
  });

  callBtn.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coins -= 20;
    syncCounters();
    alert("Calling " + serviceName + " at " + serviceNumber);
    addHistoryItem(serviceName, serviceNumber);
  });
}

syncCounters();

clearHistoryBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});
