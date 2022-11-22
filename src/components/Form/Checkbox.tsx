import {InputHTMLAttributes} from 'react'

interface InputProps extends  InputHTMLAttributes<HTMLInputElement>{}

export function Checkbox(props: InputProps){
    return (
        <input
            {...props}
            className="w-4 h-4 mt-4">
        </input>
    )
}
