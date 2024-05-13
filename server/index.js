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
  const exp = localStorage.getItem("Sharilyn");
  res.json({ message: exp });
});

app.post("/api/exp", (req, res) => {
  const bodyContent = req.body;
  localStorage.setItem("Sharilyn", JSON.stringify(bodyContent));
  res.json({ message: bodyContent });
});

app.put("/api/exp", (req, res) => {
  const exp = localStorage.getItem("Sharilyn");
  res.json({ message: "put request" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
