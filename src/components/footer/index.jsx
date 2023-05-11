import React from "react";

export const Footer = () => {
    return(
        <footer className="flex justify-center py-4 mt-40 gap-96">
            <div className="flex justify-start items-start">
                <a href="#" className="ml-4">Sobre Google</a>
                <a href="#" className="ml-4">Publicidad</a>
                <a href="#" className="ml-4">Negocios</a>
                <a href="#" className="ml-4">Cómo funciona la búsqueda</a>
            </div>
            <div className="flex justify-end items-end">
                <a href="#" className="ml-4">Privacidad</a>
                <a href="#" className="ml-4">Condiciones</a>
                <a href="#" className="ml-4">Preferencias</a>
            </div>
        </footer>
    )
}