export function SearchAreaForm(){
    return(
        <form
            className="w-[300px] md:w-[400px] md:h-[500px] rounded bg-white p-2 flex flex-col gap-1"
        >
             <input 
                type="text"
                className="border border-amber-400 rounded p-2"
                placeholder="Insira uma info"
            />

             <input 
                type="text"
                className="border border-amber-400 rounded p-2"
                placeholder="Insira uma info"
            />

             <input 
                type="text"
                className="border border-amber-400 rounded p-2"
                placeholder="Insira uma info"
            />
        </form>
    )
}