const express = require("express");
var cors = require("cors");
const notFound = require("./middleware/NotFound");
const handleErrors = require("./middleware/handleErrors");
const app = express();

const userRouter = require("./routes/userRouter");
const agencyRouter = require("./routes/agencyRouter");
const routeRouter = require("./routes/routeRouter");
const promotionRouter = require("./routes/promotionRouter");

app.use(cors());
app.use(express.json()); //->for parsing application/json
app.use(express.urlencoded({ extended: true })); //->for parsing application/x-www-form-urlencoded
app.use(express.static("static")); //-> service static files with express

//routes
app.use("/api/user", userRouter);
app.use("/api/agency", agencyRouter);
app.use("/api/route", routeRouter);
app.use("/api/promotion", promotionRouter);

app.use(notFound);
app.use(handleErrors);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
