import dayjs from "dayjs";
import { Post, UserPost } from "../@types/App";

export function PostsReadTable({posts}:{posts:UserPost[]}){

    return(
        <div className="relative overflow-x-auto border border-gray-200 rounded-lg">
            <div className="max-h-full overflow-y-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="bg-gray-100 sticky top-0 text-gray-700 uppercase font-semibold">
                        <tr>
                        <th scope="col" className="px-6 py-3">Titulo</th>
                        <th scope="col" className="px-6 py-3">Tema</th>
                        <th scope="col" className="px-6 py-3">Data leitura</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            posts.map((val,key)=>(
                                <tr key={key} className=" even:bg-gray-50 odd:bg-white hover:bg-gray-100">
                                    <td className="h-10 cursor-default md:w-110 line-clamp-3 hover:line-clamp-none md:hover:h-15 hover:h-38 transition-all px-6 py-4">{val.post?.title}</td>
                                    <td className="px-6 py-4">{val.post?.theme}</td>
                                    <td className="px-6 py-4">{dayjs(val.createdAt).format('DD/MM/YYYY')}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}