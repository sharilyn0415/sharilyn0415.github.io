const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require("cors");

app.use(cors());
// // Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.json());

const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");

app.get("/api", (req, res) => {
  const items = { ...localStorage };
  res.json({ expList: items });
});

app.get("/api/exp", (req, res) => {
  const expId = req.query.id;
  localStorage.getItem(expId);
  res.json({ message: bodyContent });
});

app.post("/api/exp", (req, res) => {
  const bodyContent = req.body;
  localStorage.setItem(bodyContent.id, JSON.stringify(bodyContent));
  res.json({ message: bodyContent });
});

app.put("/api/exp", (req, res) => {
  const bodyContent = req.body;
  const expId = bodyContent.id;
  const expData = localStorage.getItem(expId);
  if (!expData) res.json({ message: "No record fund when try updating" });
  localStorage.setItem(expId, JSON.stringify(bodyContent));
  res.json({ message: "updated" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
