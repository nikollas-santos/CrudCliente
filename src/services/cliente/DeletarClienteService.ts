import prismaClient from "../../prisma";

interface ClientRequest {
    id:string
}

class DeletarClienteService {
    async execute({id}:ClientRequest){
        const removecliete = await prismaClient.cliente.delete({
            where:{
                id:id
            }
        })

        return removecliete

    }
}

export {DeletarClienteService}