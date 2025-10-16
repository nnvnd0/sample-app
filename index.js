const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello from Git + GitHub + Heroku!"));
app.get("/about", (req, res) => res.send("About: demo route."));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
