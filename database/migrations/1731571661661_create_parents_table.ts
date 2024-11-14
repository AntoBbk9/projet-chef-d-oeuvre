import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'parents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email', 254).notNullable().unique()
      table.string('avatar').nullable()
      table.string('téléphone').notNullable()
      table.string('password').notNullable()
      table.string('profession').nullable()
      table.string('nationalité').notNullable()
      table.integer('user_id').nullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('adress_id').nullable()
      table.foreign('adress_id').references('adresses.id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}