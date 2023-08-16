import { knex } from "knex";
import path from "path";

class DB {
  constructor(table, key) {
    this.context = knex({
      client: "sqlite3",
      connection: {
        filename: path.resolve("./databases/sales-management.db"),
      },
      useNullAsDefault: true
    });

    this.table = table || "";
    this.key = key || "Id";
  }

  getAll(){
    return this.context.select('*').from(this.table);
  }

  getById(id){
    return this.context.select('*').from(this.table).where("Id", id).first();
  }

  getPage(page, pageSize){
    const offset = (Number(page) - 1) * Number(pageSize);

    return this.context.select('*').from(this.table).limit(Number(pageSize)).offset(offset);
  }

  insert(record){
    return this.context.insert(record).into(this.table);
  }

  update(id, record){
    return this.context(this.table).where("Id", id).update(record);
  }

  delete(id){
    return this.context(this.table).where("Id", id).del();
  }
}

module.exports = DB;
