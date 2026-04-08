import express from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
