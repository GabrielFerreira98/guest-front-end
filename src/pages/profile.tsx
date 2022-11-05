import { PerfilOptions } from "../components/Form/PerfilOptions";

export function Profile(){
    return (
        <div>
        <div className="h-[15vh] bg-orange-guest flex items-center justify-center">
            <div className='w-full max-w-2xl flex items-center justify-center '>
            <div>
                <img className="mr-8 w-20 h-20 rounded-full drop-shadow-lg" src="../public/foto-perfil.jpeg" alt="Foto de Perfil" />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl text-white'>Gabriel de Assunção Ferreira</h1>
                <h4 className='mt-0.5 text-xs text-white'>gabrielferreira@gmail.com | (81) 99700-9045</h4>
            </div>
            </div>
        </div>
        <div className='h-[85vh] bg-white flex flex-col items-center justify-center'>
            
            <div className="w-full max-w-2xl  bg-white flex flex-col p-8 items-center rounded-lg h-5/6 drop-shadow-2xl justify-center">
            
            <PerfilOptions children='Histórico de Pedidos'></PerfilOptions>
            <PerfilOptions children='Formas de Pagamento'></PerfilOptions>
            <PerfilOptions children='Notificações'></PerfilOptions>
            <PerfilOptions children='Créditos e Recompensas'></PerfilOptions>
            <PerfilOptions children='Configurações'></PerfilOptions>
            <PerfilOptions children='Ajuda & Suporte'></PerfilOptions>
            <PerfilOptions children='Perguntas Frequentes'></PerfilOptions>
            
            
            </div>

            <h3 className='mt-8 text-md text-orange-guest hover:text-hover-orange-guest cursor-pointer hover:underline transition duration-200'>Desconectar</h3>
        </div>
        </div>
    )
}