import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'teams'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('team_name')
      table.integer('tot_member')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
