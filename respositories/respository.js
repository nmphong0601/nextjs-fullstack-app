import DB from './dao';

class Respositiory {
  constructor(table, key) {
    //Để khởi tạo một đối tượng từ class table Respositiory chúng ta cần truyền một đối tượng AppDAO cho nó
    this.db = new DB(table, key);
  }

  getAll() {
    return this.db.getAll();
  }

  getById(id){
    return this.db.getById(id);
  }

  getPage(page, pageSize){
    return this.db.getPage(page, pageSize);
  }
}

module.exports = Respositiory;