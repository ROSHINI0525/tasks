import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'hotels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('branch')
      table.integer('door_number')
      table.string('street')
      table.string('landmark')
      table.integer('pincode')

      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
