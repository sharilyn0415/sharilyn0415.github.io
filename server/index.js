const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require("cors");

app.use(cors());
// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  console.log("==========");
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
