import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValValidator from 'App/Validators/ValValidator'
import Employee from 'App/Models/Employee'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ConsController {
  public async insert({ request }: HttpContextContract) {
    let user = new Employee()
    user.id = request.input('id')
    user.name = request.input('name')
    user.teamId = request.input('teamId')
    user.save()
    console.log(request.body())
    return user
  }
  public async delete({ request }: HttpContextContract) {
    const id = request.input('id')
    const user = await Employee.findOrFail(id)
    await user.delete()
  }
  public async update({ request }: HttpContextContract) {
    const val = await request.validate(ValValidator)
    const user = await Employee.findOrFail(request.input('id'))
    user.id = val.id
    user.name = val.name
    user.teamId = val.teamId
    user.save()
    return user
  }
  public async read() {
    return await Employee.all()
  }
  public async search() {
    const filter = await Database.from('employees').where('team_id', '=', 2)
    return filter
  }
  public async join() {
    return Database.from('employees')
      .join('teams', 'employees.team_id', '=', 'teams.id')
      .select('employees.*')
      .select('teams.*')
  }
}
