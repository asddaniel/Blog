
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'
import Categorie from 'App/Models/Categorie';
import ArticleValidator from 'App/Validators/ArticleValidator'
import Database from '@ioc:Adonis/Lucid/Database';



export default class MainsController {

    async index({view, request}:HttpContextContract){
       const page =request.input("page", 1);
        let articles = await Database.from(Article.table).paginate(page, 3);
       // let posts = await Article.all();
        let current_page = request.input("page", 1)
        //return current_page
        return view.render('blog.index', {articles, current_page});
      // return view.render("blog/index", {articles})
    }

    async article({view}:HttpContextContract){
       return view.render("blog/add")
    }

    async store({params, request, response, session}:HttpContextContract){
     await  this.handleRequest(params, request)


       session.flash({'success': "article enregistré"})
        return response.redirect().toRoute('home')
    }

    async edit({params, view}:HttpContextContract){
        const article = await Article.findOrFail(params.id-1)
        return view.render("blog/edit", {article})
    }
    async getArticle(id){
      return await Article.query().preload('categories').where('id', id).firstOrFail()
    }

    async show({params, view}:HttpContextContract){
      const article = await Article.findOrFail(params.id-1)
      return view.render("blog/show", {article})
  }


    async update({params, request, response, session}:HttpContextContract){
      await this.handleRequest(params, request)


       session.flash({'success': "article enregistré"})
        return response.redirect().toRoute('home')
    }
    async destroy({params, session, response}:HttpContextContract){
      const article = await Article.findOrFail(params.id-1)
     await article.delete()
     session.flash({'success': "article supprimé"})
     return response.redirect().toRoute('home')
  }

    private async handleRequest(params:HttpContextContract['params'], request: HttpContextContract['request']){
        const article = params.id ? await Article.findOrFail(params.id-1): new Article()
        article.merge(await request.validate(ArticleValidator)).save()
    }
}
