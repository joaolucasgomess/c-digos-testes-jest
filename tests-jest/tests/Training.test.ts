import { CharacterBusiness } from '../src/business/CharacterBusinees'

const characterBusinees = new CharacterBusiness()

// O mock a ser criado é da função validadeCharacter 

test('Creating Mock validateCharacter', () => {
    const validateCharacterSuccessMock = jest.fn(() => {
        return true 
    })

    const validateCharacterInvalidMock = jest.fn(() => {
        return false 
    })
})