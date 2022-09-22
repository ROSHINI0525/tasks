import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'hotels'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('customer_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
