import prismaClient from '../../prisma'
interface ClienteRequest{
    name:string,
    email:string,
    endereco:string
}
class CreateClienteService {
    async execute ({name,email,endereco}:ClienteRequest){
        //verficar se enviou um email

        if(!email){
            throw new Error ("email incorrect")
        }
        //verificar se esse email já esta cadastrado 
        const clientAlreadyExistis = await prismaClient.cliente.findFirst({
            where:{
                email:email
            }
        })

        if (clientAlreadyExistis) {
            throw new Error ("Cliente already exists")
        }

        //verificar se esse nome já esta cadastrado

        const userNameAltreadyExists = await prismaClient.cliente.findFirst({
            where:{
               name
            }
          })
          
           if(userNameAltreadyExists){
            throw new Error ("User Name already exists")
           }

        const cliente = await prismaClient.cliente.create({
            data:{
                name:name,
                email:email,
                endereco:endereco

            },
            select:{
                name:true,
                email:true,
                endereco:true
            }
        })
        

        return cliente
    }
}

export {CreateClienteService}