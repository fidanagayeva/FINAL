require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db"); 
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const giftcardRoutes = require("./routes/giftcards");
const salecardRoutes = require("./routes/salecards");

const app = express();
const path = require("path");
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


connection(); 

app.use(express.json());
app.use(cors());
app.use(express.json({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/giftcards", giftcardRoutes);
app.use("/api/salecards", salecardRoutes);

const port = process.env.PORT || 3001; 
app.listen(port, () => console.log(`Server running on port ${port}`));