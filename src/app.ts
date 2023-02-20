import * as express from "express";
import { Category } from "./entity/Category";
import { User } from "./entity/User";

const app = express();

app.use(express.json());

app.get("/insert", async (req: express.Request, res: express.Response) => {
  const daniel = new User();
  daniel.firstName = "Daniel";
  daniel.age = 22;
  daniel.lastName = "Valdez";

  daniel.save();

  const book = new Category();
  book.name = "Books";
  book.descripcion = "Only Books";

  book.save();

  return res.json({ daniel, book });
});

app.get("/user", async (req: express.Request, res: express.Response) => {
  const users = await User.getRepository().find();
  const categories = await Task.getRepository().find();
  res.json({ users });
});

export default app;
