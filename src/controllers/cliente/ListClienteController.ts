import { Request, Response } from 'express';
import { ListaClienteService, FiltroCliente } from '../../services/cliente/ListaClienteService';

class ListClienteController {
  async handle(req: Request, res: Response) {
    const { email, nome, endereco } = req.query;

    // Verifica se os parâmetros estão definidos na requisição e converte para string
    const filtro: FiltroCliente = {
      email: email ? String(email) : undefined,
      nome: nome ? String(nome) : undefined,
      endereco: endereco ? String(endereco) : undefined
    };

    const listaClienteService = new ListaClienteService();

    const clientes = await listaClienteService.execute(filtro);

    return res.json(clientes);
  }
}

export { ListClienteController };
