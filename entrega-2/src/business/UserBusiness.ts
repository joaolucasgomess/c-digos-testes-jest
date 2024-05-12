import { User } from "../model/User"
import { CustomError } from "../utils/CustomError";
import { UserData } from "../data/UserData";
import { ROLES } from "../types/ROLES";

export class UserBusiness {
    private userData: UserData
    constructor(userRepository: UserData){
        this.userData = new UserData()
    }

    getUserById = async(id: string): Promise<User> => {
        try {
            if(!id){
                throw new CustomError('Invalid Field', 422)
            }

            const user = await this.userData.getUserById(id);

            if (!user) {
            throw new CustomError('User not found', 404)
            }

            return user

        } catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    getAllUsers = async (admin_id: string): Promise<User[]> => {
        try {
            if(!admin_id){
                throw new CustomError('Invalid Field', 422)
            }

            const user = await this.userData.getUserById(admin_id)

            if(user.role !== ROLES.ADMIN){
                throw new CustomError('Usuário não é administrador', 403)
            }

            const allUsers = await this.userData.getAllUsers()

            return allUsers

        } catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    } 
}