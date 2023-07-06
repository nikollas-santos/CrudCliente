import { Request,Response } from "express";


 import {DeletarClienteService} from '../../services/cliente/DeletarClienteService'


class DeletarClienteController {
    async handle(req:Request, res:Response){
        const id = req.query.id as string

        const deletarClienteService = new DeletarClienteService();

        const remove = await deletarClienteService.execute({
            id

        })
        return res.json(remove)

    }
}

export {DeletarClienteController}