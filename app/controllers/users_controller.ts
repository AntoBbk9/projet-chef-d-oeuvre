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

        const parent = await Parent.find(1)

        await parent?.load('user')

        console.log(parent?.user?.name)


        return response.json({
            message: 'Authentification réussie',
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
            },
          })
        }     
    
}