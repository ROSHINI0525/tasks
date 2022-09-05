import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public teamName: string

  @column()
  public totMember: number
}
