const express = require("express");
const app = express();

let currentPercentage = 0;
let lastUpdate = Date.now();

// generování každých 10 sekund (synchronizované na čas)
function updatePercentage() {
  currentPercentage = Math.floor(Math.random() * 101);
  lastUpdate = Date.now();
  console.log("Nové procento:", currentPercentage);
}

// spustit hned
updatePercentage();

// pak přesně každých 10s podle času
setInterval(updatePercentage, 10000);

// API endpoint
app.get("/percentage", (req, res) => {
  res.json({
    percentage: currentPercentage,
    timestamp: lastUpdate
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server běží na portu", PORT);
});
