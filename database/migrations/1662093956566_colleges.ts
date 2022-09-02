import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'colleges'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id')
      table.string('college_name')
      table.string('mobile_num')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
