import { FaMap, FaMapLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router";

export function AreaPage(){
    const { id } = useParams();

    return(
       <div className="relative md:h-[700px] md:w-[400px] h-[calc(100svh-150px)] w-full flex flex-col items-center justify-start md:mt-1 px-1 md:p-0">
            <header className="bg-green-500 w-full h-[200px] absolute top-[calc(-150px)] text-center pt-3 md:hidden">
                <h3 className="font-bold text-[21px] text-white">Avani-{id}</h3>
            </header>
            
            <div className="realtive z-2 w-full h-full shadow-4xl bg-white rounded-tl-[8px] rounded-tr-[8px] text-center md:flex md:flex-col md:items-center md:justify-start">
                <div className="bg-white md:border-b-1 md:border-he-gray-400 md:s overflow-hidden w-[90%] md:w-full h-[200px] rounded-tl-[8px] rounded-tr-[8px] shadow-md flex flex-col items-center justify-start absolute md:relative md:top-0 md:left-0 top-[calc(-90px)] left-[5%]">
                    <div className="bg-he-green-100 w-full h-[90px] text-center flex flex-col justify-center text-white ">
                        <img className="w-full h-full object-cover" src="https://www.shutterstock.com/image-photo/indoor-photo-highly-realistic-closeup-260nw-2524065479.jpg" alt="" />
                    </div>
                    <div className="flex flex-col w-full h-[100px] items-center justify-start ">
                        <div className="flex flex-row items-center justify-center w-full h-full px-2 font-semibold text-he-gray-800">
                            <div className="flex flex-col items-start justify-center w-full h-full  ">
                                <span>Avenida Jose Roberto Texeira</span>
                                <span>Jardim Florida</span>
                            </div>

                            <span className="w-15">Nº 130</span>
                        </div>

                        <div className="w-full h-full flex flex-row items-center justify-between px-2">
                            <div className="border-1 border-he-gray-200 w-[12rem] h-[3rem] rounded-md text-center text-he-gray-800 font-semibold  px-4 py-2 flex flex-col justify-center items-center text-nowrap">
                                <p className="font-semibold text-[16px]"><span className="font-bold text-[22px]">150,00 </span> R$/Hr</p>
                            </div>
                            <span className="text-he-green-300 text-[32px]">
                                <FaMapLocationDot/>
                            </span>
                        </div>
                        
                    </div>
                </div>

                <div className="md:h-auto h-[calc(100%-110px)] w-full md:mt-0 mt-[110px] flex flex-col items-center justify-start gap-2 px-2 ">

                    <div className="w-full text-left p-2">
                        <h4 className="font-bold text-he-gray-700">Horários</h4>
                        <div className="border-1 flex w-full border-he-gray-600 rounded-md mt-2 p-0.5 ">
                            <input
                                
                                className="w-full font-medium px-1" 
                                type="text" 
                                placeholder="Modalidade,evento ou local" 
                            />
                            <button
                                type="submit"
                                
                                className=" w-15 h-12 bg-he-green-100 text-white text-2xl text-center rounded-[4px] flex flex-col justify-center items-center  ">
                                <IoSearch/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
       </div>
    )
}