import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Todo } from "./types/todo";
import { listComic } from "./usecase/list_comic/list_comic";

const app: Express = express();
const port = 3001;

app.use(cors());

const sampleData = [
  { id: 1, title: "牛乳を買う", completed: false },
  { id: 2, title: "洗濯をする", completed: true },
  { id: 3, title: "請求書を支払う", completed: false },
];

let todoList: Todo[] = sampleData;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/todo-list", (req: Request, res: Response) => {
  res.json(todoList);
});

app.get("/comic-list", async (req: Request, res: Response) => {
  try {
    const comics = await listComic();
    res.json(comics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comic list" });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
