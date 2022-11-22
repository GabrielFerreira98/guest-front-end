import { useState } from "react";
import { Button } from "../components/Form/Button";
import { Input } from "../components/Form/Input";

import { omit } from 'lodash';

import ApiService from "../services/api";

export function Register() {
    const [user, setUser] = useState({
        name: '',
        last_name: '',
        gender: '',
        phone: '',
        birth_date: '',
        email: '',
        password: '',
        repeat_password: ''
    });

    const valueInput = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const sendForm = () => {
        if (user.password !== user.repeat_password) return

        const request = ApiService.request();

        request.post('/sign-up', omit(user, 'repeat_password')).then(resp => {
            redirectLogin();
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    };

    const redirectLogin = () => {
        window.location = '/login';
    };

    return(
        <div className="h-screen bg-orange-guest flex flex-col items-center justify-center">
        <img className="w-60 mb-8" src="../public/logo-guest.png" alt="Guest Logo" />

        <form className="w-full max-w-2xl  bg-white flex flex-col p-8 items-center rounded-lg h-6/5 drop-shadow-md justify-center">

            <h1 className='text-2xl text-black'>Cadastre-se agora na Guest!</h1>

            <h3 className='text-md text-gray-guest'>Preencha o formulário para continuar.</h3>

            <Input name='name' id='name' placeholder='Jane' type='text' onChange={valueInput} value={user.name} aria-label='First name'></Input>
            <Input name='last_name' id='last_name' placeholder='Doe' type='text' onChange={valueInput} value={user.last_name} aria-label='Last name'></Input>

            <label for="gender" className="mb-2 text-sm font-medium text-gray-900">Selecione seu gênero:</label>
            <select name='gender' id='gender' type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={valueInput} value={user.gender} aria-label='Gender'>
                <option selected>Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>

            <Input name='birth_date' id='birth_date' placeholder='30/06/2003' onChange={valueInput} value={user.birth_date} type='date' aria-label='Birth Date'></Input>
            <Input name='phone' id='telephone' placeholder='(81) 99700-9045' onChange={valueInput} value={user.phone} type='tel' aria-label='Telephone'></Input>
            <Input name='email' id='email' placeholder='seuemail@seuemail.com.br' onChange={valueInput} value={user.email} type='email' aria-label='Email'></Input>
            <Input name='password' id='password' placeholder='Senha' type='password' onChange={valueInput} value={user.password} aria-label='Password'></Input>
            <Input name='repeat_password' id='repeat_password' placeholder='Confirme sua senha' onChange={valueInput} value={user.repeat_password} type='password' aria-label='Confirm Password'></Input>

            <Button fn={sendForm} children='Cadastrar' color='orange-guest'></Button>

            <div className='flex mt-4'>

            <h4 className='text-xs text-gray-guest mr-1'>Já tem uma conta?</h4>
            <p onClick={redirectLogin} className='text-xs text-orange-guest hover:underline cursor-pointer'>Entrar!</p>

            </div>

        </form>

        </div>
    )
}
