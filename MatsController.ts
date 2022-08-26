// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MatsController {
  public async operation({ request }) {
    var a: number = request.input('a')
    var b: number = request.input('b')

    return a + b
  }
}
