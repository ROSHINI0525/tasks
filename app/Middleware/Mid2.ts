import { appKey } from 'Config/app'
//import { Request, Response } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Mid2 {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    if (appKey !== request.header('appKey')) {
      response.unauthorized({ error: 'Unauthorized request' })
      return
    }
    await next()
  }
}
