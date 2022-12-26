
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'
import ArticleValidator from 'App/Validators/ArticleValidator'



export default class MainsController {
    async index({view}:HttpContextContract){
      let articles = await Article.all()
      return view.render("blog/index", {articles})
    }

    async article({view}:HttpContextContract){
       return view.render("blog/add")
    }

    async store({params, request, response, session}:HttpContextContract){

      //article.merge(await request.validate(ArticleValidator)).save()

       session.flash({'success': "article enregistré"})
        return response.redirect().toRoute('home')
    }

    async edit({params, view}:HttpContextContract){
        const article = await Article.findOrFail(params.id-1)
        return view.render("blog/edit", {article})
    }

    async show({params, view}:HttpContextContract){
      const article = await Article.findOrFail(params.id-1)
      return view.render("blog/show", {article})
  }


    async update({params, request, response, session}:HttpContextContract){
      const article = await Article.findOrFail(params.id-1)
      article.merge(await request.validate(ArticleValidator)).save()

       session.flash({'success': "article enregistré"})
        return response.redirect().toRoute('home')
    }
}
