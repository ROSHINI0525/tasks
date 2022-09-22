import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hotel from 'App/Models/Hotel'
import HotelValidator from 'App/Validators/HotelValidator'
import Database from '@ioc:Adonis/Lucid/Database'
import Customer from 'App/Models/Customer'

export default class HotelsController {
    public async insert({request}:HttpContextContract){
        const val=await request.validate(HotelValidator)
        let user=new Hotel()
        user.id=val['id']
        user.branch=val['branch']
        user.doorNumber=val['doorNumber']
        user.street=val['street']
        user.landmark=val['landmark']
        user.pincode=val['pincode']
        user.customerId=val['customerId']
        await user.save()
        return "inserted successfully"
    }
    public async delete({request}){
        const user = await Hotel.findByOrFail('id',request.params().id)
          user.delete()
          await user.save()
    }
    public async update({ request }: HttpContextContract) {
        const val = await request.validate(HotelValidator)
        const user = await Hotel.findOrFail(request.input('id'))
        user.id = val.id
        user.branch = val.branch
        user.doorNumber = val.doorNumber
        user.street = val.street
        user.landmark = val.landmark
        user.pincode = val.pincode
        user.customerId = val.customerId
        user.save()
        return user
    }
    public async read() {
        return await Hotel.query().orderBy('id')
    }
    public async search({ request }: HttpContextContract) {
        const data = request.input('searchKey')
        return Database
        .from('hotels')
        .select('*')
        .where((query) =>{
            if(/^[0-9]/.test(data)){
                query
                .where('id',data)
                .orWhere('door_number',data)
                .orWhere('pincode',data)
                .orWhere('customer_id',data)
                
            }
        })
        .orWhere((query) =>{
            query
            .whereILike('branch','%'+data+'%')
            .orWhereILike('street','%'+data+'%')
            .orWhereILike('landmark','%'+data+'%')
        })
    }

    public async ownerName(){
        const data =  await  Hotel.query().join('customers','customers.id','hotels.customer_id')
            .select('*')
        console.log(data)
        return data
        }
    public async joinTable(){
        const data =  await Customer.query().join('hotels','customers.id', '=','hotels.customer_id')
                                            .select('*')

        const newData = data.map(el => Object.assign({},el.$attributes,{
            customer_id:el.$extras['customer_id'],
            branch : el.$extras['branch'],
            address: el.$extras['door_number'] + ',' 
                    +el.$extras['street'] + ','
                    +el.$extras['landmark'] + ','
                    +el.$extras['pincode'] + ','
        }))
        console.log(newData)
        return newData
    }
}
