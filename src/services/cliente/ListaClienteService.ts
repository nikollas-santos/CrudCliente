import prismaClient from "../../prisma";

interface FiltroCliente {
  email?: string;
  nome?: string;
  endereco?:string
}

class ListaClienteService {
  async execute(filtro?: FiltroCliente) {
    const cliente = await prismaClient.cliente.findMany({
      where: {
        email: filtro?.email ? { equals: filtro.email } : undefined,
        name: filtro?.nome ? { contains: filtro.nome } : undefined,
        endereco:filtro?.endereco? {contains: filtro.endereco}: undefined
      },
      select: {
        id: true,
        name: true,
        email: true,
        endereco:true
      },
    });
    return cliente;
  }
}

export { ListaClienteService , FiltroCliente};
