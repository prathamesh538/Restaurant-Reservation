// backend/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "G:\\Project\\Restorent-reservation\\backend\\.env" });

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);

app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

dbconnection();

app.use(errorMiddleware)

export default app;
