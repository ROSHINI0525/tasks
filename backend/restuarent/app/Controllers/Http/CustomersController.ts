import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CustomersController {
    public async insert({ request }: HttpContextContract) {
        let user = new Customer()
        user.id = request.input('id')
        user.name = request.input('name')
        user.contacts = request.input('contacts')
        await user.save()
        console.log(request.body())
        return user
      }
    public async delete({request}){
        const user = await Customer.findByOrFail('id',request.params().id)
          user.delete()
          await user.save()
    }
    public async update({ request }: HttpContextContract) {
        const user = await Customer.findOrFail(request.input('id'))
        user.id = request.input('id')
        user.name = request.input('name')
        user.contacts = request.input('contacts')
        user.save()
        return user
      }


    public async read() {
        return await Customer.query().orderBy('id')
    }

    public async search({ request }: HttpContextContract) {
        const data = request.input('searchKey')
        return Database
        .from('customers')
        .select('*')
        .where((query) =>{
            if(/^[0-9]/.test(data)){
                query
                .where('id',data)
                .orWhere('contacts',data)
                
            }
        })
        .orWhere((query) =>{
            query
            .whereILike('name','%'+data+'%')

        })
    }
}
