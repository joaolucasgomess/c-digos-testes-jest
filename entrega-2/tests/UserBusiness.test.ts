import { CustomError } from "../src/utils/CustomError";
import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabaseMock } from "./mocks/userDataBase";
import { userMock, userMock2 } from "./mocks/userMock";

const userBuinessMock = new UserBusiness(new UserDatabaseMock() as any)

describe('Teste de busca por id', () => {
    test('Teste códgio de erro', async() => {
        expect.assertions
        try {
            await userBuinessMock.getUserById(userMock.id)
        } catch (error) {
            if(error instanceof CustomError){
                expect(error.message).toEqual('User not found')
                expect(error.statusCode).toEqual(404)
            }else{
                console.error(error)
            }
        }
    })
    test('Teste resposta de sucesso', async() => {
        expect.assertions
        try {
            const result = await userBuinessMock.getUserById(userMock.id)
            expect(result).toEqual(userMock)
        } catch (error) {
            console.error(error)
        }
    })
})

describe('Teste função admin buscar todos os usuários', () => {
    test('Teste código de erro', async () => {
        expect.assertions
        const admin_id = '1'
        try{
            const response = await userBuinessMock.getAllUsers(admin_id)
        }catch(error){  
            if(error instanceof CustomError){
                expect(error.statusCode).toEqual(403)
                expect(error.message).toEqual('Usuário não é administrador')
            }else{
                console.error(error)
            }
        }
    })
})