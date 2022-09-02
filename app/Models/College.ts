import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class College extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public college_name: string
  @column()
  public mobile_num: number
}
