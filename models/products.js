const conn = require('../database')
module.exports = {
  async add(name, price) {
    let result = await conn.query(
      `insert into products
        (name, price)
        values
        ($1, $2)`,
      [name, price]
    )
    return result
  },
  async get() {
    const result = await conn.query('select id, name, price from products')
    return result.rows
  },
  async getById(id) {
    const result = await conn.query(`select id, name, price from products where id = $1`, [id])
    return result.rows[0]
  },
  async update(id, name, price) {
    const result = conn.query(
      `update products
        set name = $1,
        price = $2
        where id = $3`,
      [name, price, id]
    )
    return result
  },
  async remove(id) {
    const result = conn.query(
      `delete from products
        where id = $1`,
      [id]
    )
    return result
  }
}
