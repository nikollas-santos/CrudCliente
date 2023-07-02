import { Router, Request, Response } from "express"; 

import { CreateClienteController } from "./controllers/cliente/CreateClienteController";
import {ListClienteController} from './controllers/cliente/ListClienteController'

const router = Router ();


//rotas cliente
router.post('/clientes', new CreateClienteController().handle)

router.get('/clientes', new ListClienteController().handle)

export {router}