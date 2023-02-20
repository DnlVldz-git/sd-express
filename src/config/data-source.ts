import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../entity/Category";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "administrador",
  password: "123",
  database: "ejercicioJairo",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export const AppDataSourceMongo = new DataSource({
  type: "mongodb",
  url: "mongodb+srv://jairo:MJaPINHHDUwjcwYO@typeorm.o7clbrf.mongodb.net/?retryWrites=true&w=majority",
  entities: [Category],
  synchronize: true,
  logging: false,
});

export const connectDB = async () => {
  try {
    let init1 = await AppDataSource.initialize();
    let init2 = await AppDataSourceMongo.initialize();
  } catch (error) {
    console.log(error);
  }
};
