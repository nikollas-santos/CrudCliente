import prismaClient from "../../prisma";

interface ClientRequest {
    id: string;
}

class DeletarClienteService {
    async execute({ id }: ClientRequest) {
        // Verificar se o cliente com o ID fornecido existe no banco
        const clienteExistente = await prismaClient.cliente.findUnique({
            where: {
                id: id,
            },
        });
    // Lançar um erro caso o cliente não exista
        if (!clienteExistente) {
            throw new Error("Cliente não encontrado"); // Lançar um erro caso o cliente não exista
        }

        // Se o cliente existir, excluir
        const removecliente = await prismaClient.cliente.delete({
            where: {
                id: id,
            },
        });

        return removecliente;
    }
}

export { DeletarClienteService };
