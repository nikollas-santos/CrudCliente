import {Request, Response, response} from 'express'


class CreateClienteController {
    async handle (req:Request, res: Response){
        return res.json({ok:true})
    }
}

export {CreateClienteController}