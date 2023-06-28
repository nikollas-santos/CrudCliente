import { Router, Request, Response } from "express"; 

import { CreateClienteController } from "./controllers/cliente/CreateClienteController";

const router = Router ();


//rotas cliente
router.post('/clientes', new CreateClienteController().handle)



export {router}