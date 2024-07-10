import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS user_info (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL
      );
    `,
      (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log("user_info table created successfully.");
      }
    );
  });
}