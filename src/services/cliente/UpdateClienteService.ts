import prismaClient from "../../prisma";

interface UpdateClienteRequest {
  id: string,
  email: string,
  name: string,
  endereco: string
}

class UpdateClienteService {
  async execute(objeto: UpdateClienteRequest) {
    const clientAlreadyExists = await prismaClient.cliente.findFirst({
      where: {
        email: objeto.email,
        id: { not: objeto.id } // Check if the client exists with the same email, but a different id
      }
    });

    if (clientAlreadyExists) {
      throw new Error("Cliente already exists");
    }

    const cliente = await prismaClient.cliente.update({
      where: {
        id: objeto.id
      },
      data: {
        endereco: objeto.endereco,
        name: objeto.name,
        email: objeto.email
      }
    });

    return cliente;
  }
}

export { UpdateClienteService };
