interface perfilOptions{
    children: string,
}

export function PerfilOptions(perfilOptions: perfilOptions){
    return(
        <div className="w-full max-w-lg flex items-center border-b border-gray-guest mt-5">
            <div className="flex items-center appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
            <div className='w-8 h-8 mr-2 bg-orange-guest rounded-full'></div>
            <div>{perfilOptions.children}</div>
            </div>
        </div>
    )
}