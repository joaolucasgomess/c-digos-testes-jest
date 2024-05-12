
import { User } from "../../src/model/User"
import { ROLES } from "../../src/types/ROLES"

export const userMock = new User(
    "id_mockado",
    "flavio",
    "flavio@lab.com",
    ROLES.NORMAL
)

export const userMock2 = new User(
    "id_mockado2",
    "flaivo",
    "flaivo@lab.com",
    ROLES.ADMIN
)