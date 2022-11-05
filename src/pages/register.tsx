import { Button } from "../components/Form/Button";
import { Input } from "../components/Form/Input";

export function Register() {
    return(
        <div className="h-screen bg-orange-guest flex flex-col items-center justify-center">
        <img className="w-60 mb-8" src="../public/logo-guest.png" alt="Guest Logo" />

        <form className="w-full max-w-2xl  bg-white flex flex-col p-8 items-center rounded-lg h-4/6 drop-shadow-md justify-center">

            <h1 className='text-2xl text-black'>Cadastre-se agora na Guest!</h1>

            <h3 className='text-md text-gray-guest'>Preencha o formulário para continuar.</h3>

            <Input name='name' id='name' placeholder='Jane Doe' type='text' aria-label='Full name'></Input>

            <Input name='telephone' id='telephone' placeholder='(81) 99700-9045' type='tel' aria-label='Telephone'></Input>

            <Input name='email' id='email' placeholder='seuemail@seuemail.com.br' type='email' aria-label='Email'></Input>

            <Input name='password' id='password' placeholder='Senha' type='password' aria-label='Password'></Input>

            <Input name='password-confirm' id='password-confirm' placeholder='Confirme sua senha' type='password' aria-label='Confirm Password'></Input>

            <Button children='Cadastrar' color='orange-guest'></Button>

            <div className='flex mt-4'>

            <h4 className='text-xs text-gray-guest mr-1'>Já tem uma conta?</h4>
            <p className='text-xs text-orange-guest hover:underline cursor-pointer'>Entrar!</p>

            </div>

        </form>

        </div>
    )
    
}