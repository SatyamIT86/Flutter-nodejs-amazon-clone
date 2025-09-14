
// import from packages
const express = require("express");
const mongoose = require("mongoose");
// import from files
const  authRouter = require("./routes/auth");
// INIT
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://admin:admin@flutter-amazon-clone.0epx64o.mongodb.net/?retryWrites=true&w=majority&appName=Flutter-Amazon-clone";
// middlewares
app.use(authRouter);

// DB Connection
mongoose.connect(DB).then(() => {
    console.log("DB connected");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connection at port ${PORT}`);
})