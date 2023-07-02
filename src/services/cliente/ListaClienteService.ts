import prismaClient from "../../prisma";

class ListaClienteService {
    async execute (){

        const cliente = await prismaClient.cliente.findMany({
            select:{
                id:true,
                name:true,
                email:true
            }
        })
        return cliente;
    }
}

export {ListaClienteService}