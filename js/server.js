import express from "express";

const app = express();

// routing
app.all("/", (req, res) => {
  res.send("<h>Hello!</h><div id='root'></div>"); // static한 html SSG(Static Server Generation)
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Hong" });
});

app.listen(3000, () => console.log("server started..."));
