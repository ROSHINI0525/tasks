import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('department')
      table.integer('arrear')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
