import React from "react";

export const SearchBar = () => {
        return (
            <div> 
                <div className="flex justify-center items-center">
                    <input type="text"  className=" border border-gray-300 rounded-full px-4 py-2 w-1/4 text-gray-700 focus:outline-none focus:border-indigo-500"style={{ borderRadius: "50px 50px 50px 50px" }}/>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <button className="bg-slate-100 hover:bg-slate-300 text-black font-medium py-2 px-4 rounded-full" style={{ borderRadius: "30px 30px 30px 30px" }}>Buscar</button>
                
                    <button className="bg-slate-100 hover:bg-slate-300 text-black font-medium py-2 px-4 rounded-full" style={{ borderRadius: "30px 30px 30px 30px" }}>Voy a tener suerte</button>
                </div>
            </div>
          )
}