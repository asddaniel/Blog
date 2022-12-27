import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Categorie from 'App/Models/Categorie'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public title:string

  @column()
  public content:string

  @column()
  public online:boolean

  @column()
  public thumbnail:string|null

  @belongsTo(()=>Categorie)
  public categories : BelongsTo<typeof Categorie>

  @column()
  public categorie_id : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime|null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime|null
}
