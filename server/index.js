const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require("cors");

app.use(cors());
// // Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.json());

let localStorage = {}; // globle var to mock db

// get all exp list
app.get("/api", (req, res) => {
  const items = { ...localStorage };
  res.json({ expList: items });
});
// get exp meta data by id
app.get("/api/exp", (req, res) => {
  const expId = req.query.id;
  res.json({ message: localStorage[expId] });
});
// create exp
app.post("/api/exp", (req, res) => {
  const bodyContent = req.body;
  localStorage[bodyContent.id] = bodyContent;
  res.json({ message: bodyContent });
});
// update exp
app.put("/api/exp", (req, res) => {
  const bodyContent = req.body;
  const expId = bodyContent.id;
  const expData = localStorage[expId];
  if (!expData) res.json({ message: "No record fund when try updating" });
  localStorage[expId] = bodyContent;
  res.json({ message: "updated" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
