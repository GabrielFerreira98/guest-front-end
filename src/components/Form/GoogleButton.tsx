interface buttonInterface{
    children: string,
}

export function GoogleButton(button: buttonInterface){
    return (
        <button
        className={`mt-4 text-xs w-2/5 h-6 bg-gray-guest text-white py-2 px-4 rounded-2xl flex items-center justify-center`}>
            {button.children}
        </button>
    )
}
