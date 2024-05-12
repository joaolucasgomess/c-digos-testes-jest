import { UserBusiness } from '../business/UserBusiness'
import { Request, Response } from 'express'

export class UserController {
    constructor(private userBusiness: UserBusiness){}

    getUserById = async(req: Request, res: Response): Promise<void> => {
        try{
            const { user_id } = req.params 
            const user = await this.userBusiness.getUserById(user_id)
            res.status(200).send({ user })
        }catch(err: any){
            res.status(err.statusCode || 400).send({ error: err.message })
        }
    }   

    getAllUsers = async(req: Request, res: Response): Promise<void> => {
        try{
            const admin_id = req.headers.authorization as string
            const allUsers = await this.userBusiness.getAllUsers(admin_id)
            res.status(200).send({ allUsers })
        }catch(err: any){
            res.status(err.statusCode || 400).send({ error: err.message })
        }
    }
}