//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValValidator from 'App/Validators/ValValidator';
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ArithsController {
    public async arith({request}:HttpContextContract){
        const temp=await request.validate(ValValidator)
        const a: number = temp["a"]
        const b: number = temp["b"]
        return 'sum : '+(a+b)+'\n'+'sub : '+(a-b)+'\n'+'mul : '+(a*b)+'\n'+'div : '+(a/b)
    }
}
