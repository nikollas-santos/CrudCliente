import prismaClient from "../../prisma";

interface UpdateClienteRequest{
    id: string,
    email:string,
    name:string,
    endereco:string
}

class UpdateClienteService {
    async execute (objeto:UpdateClienteRequest){
        const cliente = await prismaClient.cliente.update({
            where:{
                id:objeto.id
            },
            data:{
                endereco:objeto.endereco,
                name:objeto.name,
                email:objeto.email
            }
        })
        return cliente
    }
}

export {UpdateClienteService}