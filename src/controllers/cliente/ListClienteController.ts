import  {Request, Response} from 'express'
import {ListaClienteService} from '../../services/cliente/ListaClienteService'


class ListClienteController {
async handle(req:Request, res:Response){
    const listaClienteService = new ListaClienteService ();

    const cliente = await listaClienteService.execute();
    return res.json(cliente)
}
}

export {ListClienteController}