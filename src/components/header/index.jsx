import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';



export const Header = () => {
    return(
    <nav className="flex p-4 justify-end">
      <div className="flex w-2/4 justify-end text-base font-normal">
        <a href="#" className=" ml-4">Gmail</a>
        <a href="#" className=" ml-4">Imágenes</a>
        <a href="#" className=" ml-4"><FontAwesomeIcon icon={faTh} /></a>
        <img src="../public/img/Gengar01.jpg" alt="Profile" className="ml-4 h-10 w-10 rounded-full" />
      </div>
    </nav>
    )
}