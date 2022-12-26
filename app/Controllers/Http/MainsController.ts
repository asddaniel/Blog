 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'


export default class MainsController {
    async index({view}:HttpContextContract){
      let articles = await Article.all()
      return view.render("blog/index", {articles})
    }

    async article({view}:HttpContextContract){
       return view.render("blog/add")
    }
}
