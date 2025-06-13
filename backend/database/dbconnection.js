import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Restaurant",
    })
    
    .then(() => {
        console.log("Connecting to MongoDB with:", process.env.MONGO_URL);

      console.log("✅ Connected to MongoDB!");
    })
    .catch((err) => {
      console.log(`❌ Error connecting to DB: ${err}`);
    });
};
