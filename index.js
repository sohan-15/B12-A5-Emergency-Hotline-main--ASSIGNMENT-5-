const loveCounterEl = document.getElementById("loveCounter");
const coinCounterEl = document.querySelector(".coains100");
const copyCounterEl = document.getElementById("copY");

const historyContainer = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearID");

let loveCount = 0;
let copyCount = 0;
let coins = 100;
let hearted = new Set();

function syncCounters() {
  loveCounterEl.textContent = loveCount;
  coinCounterEl.textContent = coins;
  copyCounterEl.innerHTML = `${copyCount} <span>Copy</span>`;
}

function formatLocalTime() {
  return new Date().toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

function addHistoryItem(name, number) {
  const div = document.createElement("div");
  div.className = "p-2 border-b";
  div.innerHTML = `
    <p class="font-semibold">${name} <span class="opacity-70">(${number})</span></p>
    <p class="text-sm opacity-70">${formatLocalTime()}</p>
  `;
  historyContainer.prepend(div);
}

for (let i = 1; i <= 9; i++) {
  const heartBtn = document.getElementById(`heartCount${i}`);
  const copyBtn = document.getElementById(`copy${i}`);
  const callBtn = document.getElementById(`callBtn${i}`);
  const titleEl = document.querySelector(`.title${i}`);
  const numberEl = document.querySelector(`.number${i}`);

  if (!heartBtn || !copyBtn || !callBtn) continue;

  const serviceName = titleEl?.textContent.trim() || `Service ${i}`;
  const serviceNumber = numberEl?.textContent.trim() || "";

  heartBtn.addEventListener("click", () => {
    if (!hearted.has(i)) {
      hearted.add(i);
      loveCount++;
      syncCounters();
    }
  });

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(serviceNumber);
      copyCount++;
      syncCounters();
      alert(`Copied: ${serviceNumber}`);
    } catch {
      alert("Copy failed!");
    }
  });

  callBtn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coins -= 20;
    syncCounters();
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    addHistoryItem(serviceName, serviceNumber);
  });
}

syncCounters();
