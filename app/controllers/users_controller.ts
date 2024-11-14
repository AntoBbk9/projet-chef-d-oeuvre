import Parent from '#models/parent'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    async store({ request, response, auth }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator)

        const user = await Parent.verifyCredentials(email, password)
        await auth.use('web').login(user)

        return response.redirect().toPath('/')
    }
    
}