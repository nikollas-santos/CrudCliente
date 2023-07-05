import { Request, Response } from "express";

import {UpdateClienteService} from '../../services/cliente/UpdateClienteService'

class UpdateClienteController {
    async handle (req:Request, res:Response){
        const {client_id,email,name,endereco} = req.body

        const clienteupdate = new UpdateClienteService();
        const cliente = await clienteupdate.execute({
            id:client_id,
            email:email,        
            name:name,
            endereco:endereco
        })
        return res.json(cliente)
    }

}

export {UpdateClienteController}