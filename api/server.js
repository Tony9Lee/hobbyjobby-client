import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.set("strictQuery", true);

const handleError = (error) => {
  console.error(error);
};
try {
  await mongoose.connect("");
} catch (error) {
  handleError(error);
}

app.listen(8800, () => {
  console.log("Backend server is running");
});
