require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const memberRoutes = require('./routes/member.routes'); // ✅ Corrected path
app.use('/api/members', memberRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Family Management System API");
});

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT}`);
});
