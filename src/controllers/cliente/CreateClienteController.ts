import {Request, Response, response} from 'express'
import { CreateClienteService } from '../../services/cliente/CreateClienteService';


class CreateClienteController {
    async handle (req:Request, res: Response){
      const {name, email, endereco} = req.body;
      
      const createClienteService = new CreateClienteService

      const cliente = await createClienteService.execute({
        name, 
        email,
        endereco
      });
        return res.json(cliente)
    }
}

export {CreateClienteController}