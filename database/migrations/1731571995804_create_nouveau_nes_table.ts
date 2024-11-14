import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'nouveau_nés'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstName').notNullable()
      table.string('name').notNullable()
      table.string('postName').nullable()
      table.string('sexe').notNullable()
      table.date('dateDeNaissance').notNullable()
      table.string('lieu-de-naissance').notNullable()
      table.integer('parent_id').nullable()
      table.foreign('parent_id').references('parents.id').onDelete('CASCADE').onUpdate('CASCADE')



      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}