import React, { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        // Verificamos si particlesJS está cargado en el window
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: true },
                    size: { value: 2, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: "none",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: { onhover: { enable: true, mode: "grab" } },
                },
            });
        }
    }, []);

    return (
        <header className="relative w-auto h-[calc(100vh-16.5px)] flex items-center justify-center text-center text-white bg-slate-900 overflow-hidden">
            {/* Fondo de partículas */}
            <div id="particles-js" className="absolute inset-0 w-full h-full"></div>

            {/* Contenido principal */}
            <div className="relative z-10  px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4   tracking-tight">
                    Libertad en las alturas
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
                    Experiencias de trekking y escalada diseñadas para lo extraordinario.
                </p>
                <a
                    href="#reservas"
                    className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-all shadow-xl"
                >
                    Reserva tu Experiencia
                </a>
            </div>
        </header>
    );
};

export default Header;
