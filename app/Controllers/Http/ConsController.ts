import ValValidator from 'App/Validators/ValValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import College from 'App/Models/College'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ConsController {
  public async inset({ request }: HttpContextContract) {
    const val = await request.validate(ValValidator)
    const user = new User()
    user.id = val.id
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
  public async insert({ request }: HttpContextContract) {
    const user = new College()
    user.id = request.input('id')
    user.college_name = request.input('college_name')
    user.mobile_num = request.input('mobile_num')
    user.save()
    return user
  }
  public async join() {
    return Database.from('users')
      .join('colleges', 'users.id', '=', 'colleges.id')
      .select('users.*')
      .select('colleges.*')
  }
}
