import { User } from '../model/User'
import { users } from '../../db/db'

export class UserData{
    
    getUserById  = (id: string): User => {
        const user = users.find((user: User) => user.id === id) as User
        return user
    }

    getAllUsers = (): User[] => {
        const allUsers = users 
        return allUsers
    }
}   