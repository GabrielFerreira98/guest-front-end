interface buttonInterface{
    children: string,
}

export function FacebookButton(button: buttonInterface){
    return (
        <button
        className={`mt-4 text-xs w-2/5 h-6 bg-facebook-blue text-white py-2 px-4 rounded-2xl flex items-center justify-center`}>
            {button.children}
        </button>
    )
}
