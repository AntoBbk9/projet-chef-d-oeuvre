import Parent from '#models/parent'
import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '../validators/auth.js'

export default class UsersController {
    public async index({ response }: HttpContext) {
        const users = await Parent.all()
    
        return response.json(users)
      }

    async store({ request, response, auth }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator)

        const user = await Parent.verifyCredentials(email, password)
        await auth.use('web').login(user)

        return response.redirect().toPath('/')
    }
    
}