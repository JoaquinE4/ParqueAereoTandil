import React from 'react';

const Loader = ({ fadeOut }) => {
    return (
        <div className={`fixed inset-0 z-[99999] bg-white flex flex-col justify-center items-center transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Spinner con tu color naranja corporativo */}
            <div className="w-12 h-12 border-4 border-gray-100 border-t-brand-orange rounded-full animate-spin mb-4"></div>
            <p className="font-heading font-bold text-brand-black tracking-widest uppercase text-sm animate-pulse">
                Cargando aventura...
            </p>
        </div>
    );
};

export default Loader;