import {InputHTMLAttributes} from 'react'

interface InputProps extends  InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return (
        <div className="w-full max-w-lg flex items-center border-b border-gray-guest mt-5">
            <input
                {...props}
                 className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
            </input>
        </div>
    )
}