// backend/server.js
import dotenv from "dotenv";
dotenv.config(); // ✅ This must come FIRST

import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
