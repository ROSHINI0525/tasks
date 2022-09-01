import ValValidator from 'App/Validators/ValValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class ConsController {
  public async insert({ request }: HttpContextContract) {
    const val = await request.validate(ValValidator)
    const user = new User()
    user.name = val.name
    user.department = val.department
    user.arrear = val.arrear
    user.save()
    return user
  }
  public async delete({ request }: HttpContextContract) {
    const id = request.input('id')
    const user = await User.findOrFail(id)
    await user.delete()
  }
  public async update({ request }: HttpContextContract) {
    const val = await request.validate(ValValidator)
    const user = await User.findOrFail(request.input('id'))
    user.name = val.name
    user.department = val.department
    user.arrear = val.arrear
    user.save()
    return user
  }
}
