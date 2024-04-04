import { Comic } from "../../types/comic";

const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "comic",
});

export const listComic = async (): Promise<Comic[]> => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM comic";
    con.query(sql, (err: any, results: any[]) => {
      if (err) {
        reject(err);
        return;
      }

      const comicList: Comic[] = results.map((item: any) => ({
        title: item.title,
        category: item.category,
        volume: item.volume,
        story: item.story,
      }));

      resolve(comicList);
    });
  });
};
