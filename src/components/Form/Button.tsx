interface buttonInterface{
    children: string,
    color: string
}

export function Button(button: buttonInterface){
    console.log(button.color);
    return (
        <button 
        className={`mt-8 w-3/6 h-8 bg-${button.color} hover:bg-hover-orange-guest transition 2ms text-white py-2 px-4 rounded-2xl flex items-center justify-center`}>
            {button.children}
        </button>
    )
}