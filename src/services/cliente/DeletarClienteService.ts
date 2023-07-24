import prismaClient from "../../prisma";

interface ClientRequest {
    id: string;
}

class DeletarClienteService {
    async execute(objeto: ClientRequest) {
        // Verificar se o cliente com o ID fornecido existe no banco
        const clienteExistente = await prismaClient.cliente.findUnique({
            where: {
                id: objeto.id,
            },
        });
    // Lançar um erro caso o cliente não exista
        if (!clienteExistente) {
            throw new Error("Cliente não encontrado na base de dados"); // Lançar um erro caso o cliente não exista
        }

        // Se o cliente existir, excluir
        const removecliente = await prismaClient.cliente.delete({
            where: {
                id:objeto.id,
            },
            select:{
                id:false,
                name:true,
                email:false
            }
        });

        return removecliente;
    }
}

export { DeletarClienteService };
