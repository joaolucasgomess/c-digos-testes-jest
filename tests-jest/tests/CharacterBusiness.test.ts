import { CharacterBusiness } from '../src/business/CharacterBusinees'
import { Character } from '../src/model/Character'

const characterBusinees = new CharacterBusiness()

describe('Testing function validateCharacter', () => {
    test('Should return false for empty name', () => {
        expect.assertions
        const result = characterBusinees.validateCharacter({
            name: '',
            life: 10,
            defense: 10,
            attack: 10
        })
        expect(result).toEqual(false)
    })
    test('Should return false for life is 0', () => {
        expect.assertions
        const result = characterBusinees.validateCharacter({
            name: 'Joao',
            life: 0,
            defense: 10,
            attack: 10
        })
        expect(result).toEqual(false)
    })
    test('Should return false for attack is zero', () => {
        expect.assertions
        const result = characterBusinees.validateCharacter({
            name: 'Joao',
            life: 10,
            defense: 10,
            attack: 0
        })
        expect(result).toEqual(false)
    })
    test('Should return false for defense is zero', () => {
        expect.assertions
        const result = characterBusinees.validateCharacter({
            name: 'Joao',
            life: 10,
            defense: 0,
            attack: 10
        })
        expect(result).toEqual(false)
    })
    test('Should return false for defense is smaller than zero', () => {
        expect.assertions
        const result = characterBusinees.validateCharacter({
            name: 'Joao',
            life: 10,
            defense: -50,
            attack: 10
        })
        expect(result).toEqual(false)
    })
    test('Should return true for no empty field', () => {
        expect.assertions
        const result = characterBusinees.validateCharacter({
            name: 'Joao',
            life: 10,
            defense: 10,
            attack: 10
        })
        expect(result).toEqual(true)
    })
})

describe('Testing function performAttack', () => {
    test('Test when Characters is valid and defensor loses 200 life points', () => {
        expect.assertions
        const validatorCharacterMock = jest.fn(() => {
            return true
        })
        try {
            const result = characterBusinees.performAttackDependencyInversion(
                {
                    name: 'Mago Negro',
                    life: 100,
                    defense: 200,
                    attack: 398
                },
                {
                    name: 'Dragão Branco de Olhos Azuis',
                    life: 400,
                    defense: 198,
                    attack: 200
                },
                validatorCharacterMock
            )
            expect(result[1].life).toEqual(200)
        } catch (error: any) {
            console.log(error.message)
        }
    })
})