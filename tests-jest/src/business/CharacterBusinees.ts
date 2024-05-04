import { Character } from '../model/Character'

export class CharacterBusiness {

    validateCharacter = (input: Character): boolean => {

        if (!input.name  ||!input.life || !input.defense || !input.attack) {
            return false
        }

        if (input.life <= 0 || input.defense <= 0 || input.attack <= 0) {
            return false
        }

        return true
    }

    performAttack = (attacker: Character, defender: Character): Character[] => {

        if(this.validateCharacter(attacker) === false){
            throw new Error(' Invalid Character')
        }

        if(this.validateCharacter(defender) === false){
            throw new Error(' Invalid Character')
        }

        const damage = attacker.attack - defender.defense

        if(defender.defense < damage){
            defender.life -= damage
            return [attacker, defender]
        }
        return [attacker, defender]
    }

    performAttackDependencyInversion = (
        attacker: Character, 
        defender: Character,
        validatorCharacter: (input: any) => boolean
    ): Character[] => {

        if(validatorCharacter(attacker) === false){
            throw new Error(' Invalid Character')
        }

        if(validatorCharacter(defender) === false){
            throw new Error(' Invalid Character')
        }

        const damage = attacker.attack - defender.defense

        if(defender.defense < damage){
            defender.life = defender.life - damage
            return [attacker, defender]
        }
        return [attacker, defender]
    }

}