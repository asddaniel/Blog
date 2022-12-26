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

    async edit({params, view}:HttpContextContract){
        const article = await Article.findOrFail(params.id-1)
        return view.render("blog/show", {article})
    }

    async show({params, view}:HttpContextContract){
      const article = await Article.findOrFail(params.id-1)
      return view.render("blog/show", {article})
  }


    async update({params, view}:HttpContextContract){
      const article = await Article.findOrFail(params.id-1)
        return view.render("blog/show", {article})
    }
}
