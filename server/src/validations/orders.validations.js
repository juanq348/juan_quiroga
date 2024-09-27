// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator"

export const createOrderValidation = [
    body("cofee").isString()
]