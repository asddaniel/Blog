 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {
    async index({view}:HttpContextContract){

      return view.render("blog/index")
    }

    async article({view}:HttpContextContract){
       return view.render("blog/add")
    }
}
