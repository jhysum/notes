import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(3003, () => console.log("Server running on port 3003"));
