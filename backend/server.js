const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.send("🔥 BACKEND RUNNING ✅");
});

app.post("/login", (req, res) => {
const { email, password } = req.body;

if (email === "[test@gmail.com](mailto:test@gmail.com)" && password === "1234") {
return res.json({
token: "demo-token",
user: { email }
});
}

res.json({ message: "Invalid login ❌" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
