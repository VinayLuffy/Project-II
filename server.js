const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/", require("./routes/api"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started at http://localhost:${PORT}`));
