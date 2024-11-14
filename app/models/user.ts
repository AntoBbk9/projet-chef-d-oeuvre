import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'


export default class User  {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare name: string

  @column()
  declare postName: string

  @column()
  declare sexe: string

  @column()
  declare dateDeNaissance: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}