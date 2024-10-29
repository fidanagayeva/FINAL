require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db"); 
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const giftcardRoutes = require("./routes/giftcards");
const salecardRoutes = require("./routes/salecards");
const plntscardRoutes = require("./routes/plntscards");
const houseCardRoutes = require('./routes/housecards');
const potsCardRoutes = require('./routes/potscards');
const careCardRoutes = require('./routes/carecards');
const accessoriesCardRoutes = require('./routes/accessoriescards');
const detailCardRoutes = require('./routes/detailcards');
const instcardRoutes = require('./routes/instcards');
const packingRoutes = require('./routes/packing');
const inspirationRoutes = require('./routes/inspiration');

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
app.use("/api/plntscards", plntscardRoutes);
app.use('/housecards', houseCardRoutes);
app.use('/potscards', potsCardRoutes);
app.use('/carecards', careCardRoutes);
app.use('/accessoriescards', accessoriesCardRoutes);
app.use('/detailcards', detailCardRoutes);
app.use('/cards', instcardRoutes);
app.use('/api/packing', packingRoutes);
app.use('/api/inspirations', inspirationRoutes);

const port = process.env.PORT || 3001; 
app.listen(port, () => console.log(`Server running on port ${port}`));