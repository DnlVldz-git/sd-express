import "reflect-metadata";
import app from "./app";

import { connectDB } from "./config/data-source";

const main = async () => {
  try {
    await connectDB();
    app.listen(3006);
  } catch (error) {
    console.log(error);
  }
};

main();
