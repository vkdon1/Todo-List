const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/tasks", taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
