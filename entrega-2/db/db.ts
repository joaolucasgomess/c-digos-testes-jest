import { User } from "../src/model/User"
import { ROLES } from "../src/types/ROLES"

export const users: User[] = [
    new User(
        "1",
        "flavio",
        "flavio@lab.com",
        ROLES.NORMAL
    ),
    
    new User(
        "2",
        "flaivo",
        "flaivo@lab.com",
        ROLES.ADMIN
    ),
    new User(
        "35b62ff4-64af-4721-a4c5-d038c6f730cf",
        "tinker",
        "tinker@cad.com",
        ROLES.ADMIN
    ),
    new User(
        "35b62ff4-64af-4721-a4c5-d038c6f730cf",
        "harp",
        "harp@ai.com",
        ROLES.ADMIN

    )
]