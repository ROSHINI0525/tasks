import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TeamValidator from 'App/Validators/TeamValidator'
import Team from 'App/Models/Team'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TeamsController {
  public async insert({ request }: HttpContextContract) {
    const val = await request.validate(TeamValidator)
    let user = new Team()
    user.teamName = val.teamName
    user.totMember = val.totMember
    user.save()
    return user
  }
  public async read() {
    return await Team.all()
  }
  public async update({ request }: HttpContextContract) {
    const val = await request.validate(TeamValidator)
    const user = await Team.findOrFail(request.input('id'))
    user.teamName = val.teamName
    user.totMember = val.totMember
    user.save()
    return user
  }
  public async delete({ request }: HttpContextContract) {
    const id = request.input('id')
    const user = await Team.findOrFail(id)
    await user.delete()
  }
  public async join() {
    return Database.from('employees')
      .join('teams', 'employees.team_id', '=', 'teams.id')
      .select('employees.*')
      .select('teams.*')
  }
  public async search() {
    const filter = await Database.from('employees').where('id', '<', 5)
    return filter
  }
}
