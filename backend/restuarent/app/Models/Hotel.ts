import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Hotel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public branch: string

  @column()
  public doorNumber: number

  @column()
  public street: string

  @column()
  public landmark: string

  @column()
  public pincode: number

  @column()
  public customerId: number

}
