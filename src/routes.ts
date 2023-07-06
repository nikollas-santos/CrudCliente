import { Router, Request, Response } from "express"; 

import { CreateClienteController } from "./controllers/cliente/CreateClienteController";
import {ListClienteController} from './controllers/cliente/ListClienteController'
import{UpdateClienteController} from './controllers/cliente/UpdateClienteController'
import { DeletarClienteController } from "./controllers/cliente/DeletarClienteController";
const router = Router ();


//rotas cliente
router.post('/clientes', new CreateClienteController().handle)

router.get('/clientes', new ListClienteController().handle)

router.put('/clientes',new UpdateClienteController().handle)

router.delete('/clientes', new DeletarClienteController().handle)

router



export {router}