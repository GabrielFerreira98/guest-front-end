import { Button } from "../components/Form/Button";
import { FacebookButton } from "../components/Form/FacebookButton";
import { GoogleButton } from "../components/Form/GoogleButton";
import { Input } from "../components/Form/Input";

export function Login(){
    return (
        <div className="h-screen bg-orange-guest flex flex-col items-center justify-center">
            <img className="w-60 mb-8" src="../public/logo-guest.png" alt="Guest Logo" />

            <form className="w-full max-w-2xl  bg-white flex flex-col p-8 items-center rounded-lg h-4/6 drop-shadow-md justify-center">
                <h1 className='text-2xl text-black'>Seja bem vindo novamente!</h1>
                <h3 className='text-md text-gray-guest'>Preencha o formulário para continuar.</h3>

                <Input name='email' id='email' placeholder='seuemail@seuemail.com.br' type='email' aria-label='Email'></Input>
                <Input name='password' id='password' placeholder='Senha' type='password' aria-label='Password'></Input>

                <div className="w-full max-w-lg flex items-center justify-between mt-5">
                <div className="form-check flex items-center justify-center">
                    <input className="form-check-input appearance-none h-3 w-3 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 ms cursor-pointer" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"/>
                    <h4 className='text-xs text-gray-guest ml-2'>Lembrar de mim</h4>
                </div>

                <h4 className='text-xs text-gray-guest mr-1'>Esqueceu a senha?</h4>
                </div>

                

                <Button children='Entrar' color='orange-guest'></Button>

                <div className='flex mt-4'>
                <h4 className='text-xs text-gray-guest mr-1'>Não tem uma conta?</h4>
                <p className='text-xs text-orange-guest hover:underline cursor-pointer'>Registre-se!</p>
                </div>

                <div className='w-32 mt-6 border-b border-gray-guest'></div>
                
                <FacebookButton children='Conecte-se com o Facebook!'></FacebookButton>
                <GoogleButton children='Conecte-se com o Google!'></GoogleButton>

            </form>

        </div>
    )
}