import { pgTable, text } from "drizzle-orm/pg-core";

export const schema = pgTable("testing", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
});
