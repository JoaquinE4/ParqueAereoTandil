import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Menu, X, MapPin, Phone, Shield, CheckCircle,
  Utensils, Users, Image as ImageIcon, Star, Zap, Instagram, Facebook, MessageSquare
} from 'lucide-react';
import Header from './components/Header.jsx';

// --- COMPONENTES AUXILIARES ---
const SectionTitle = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16" data-aos="fade-up">
    <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">{subtitle}</span>
    <h2 className={`text-4xl font-heading font-bold mt-2 ${light ? 'text-white' : 'text-brand-black'}`}>{title}</h2>
  </div>
);

const ReviewCard = ({ name, date, text, rating }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3" data-aos="fade-up">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center font-bold text-brand-orange">
        {name[0]}
      </div>
      <div>
        <h4 className="font-bold text-brand-black text-sm">{name}</h4>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" className="w-4 ml-auto" alt="Google" />
    </div>
    <div className="flex text-yellow-400">
      {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </div>
    <p className="text-sm italic text-gray-600">"{text}"</p>
  </div>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loadingTarifas, setLoadingTarifas] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Simulación de carga para efectos visuales
    const timer = setTimeout(() => setLoadingTarifas(false), 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'El Parque', href: '#parque' },
    { name: 'Seguridad', href: '#seguridad' },
    { name: 'Gastronomía', href: '#gastronomia' },
    { name: 'Promociones', href: '#promociones' },
    { name: 'Grupos', href: '#grupos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const googleReviewLink = "https://search.google.com/local/writereview?placeid=TU_PLACE_ID";

  return (
    <div className="min-h-screen">

      {/* 1. NAVBAR (CON DIVISORES HR) */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 h-20 flex items-center ${scrolled ? 'bg-white shadow-md' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-brand-black' : 'text-white'}`}>
            PARQUE <span className="text-brand-orange">AÉREO</span>
          </a>

          {/* Menú Desktop */}
          <ul className="hidden lg:flex items-center gap-0">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <li>
                  <a
                    href={item.href}
                    className={`
                px-4 py-2 font-bold text-xs uppercase tracking-widest transition-all
                hover:text-brand-orange
                ${scrolled ? 'text-brand-black' : 'text-white drop-shadow-md'}
              `}
                  >
                    {item.name}
                  </a>
                </li>
                {index < menuItems.length - 1 && (
                  <div className={`h-4 w-[1px] ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* Botón Mobile */}
          <button
            className="lg:hidden z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} className="text-brand-black" /> : <Menu size={30} className={scrolled ? 'text-brand-black' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU CON HR HORIZONTALES */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><X size={35} /></button>
        <div className="w-full max-w-xs space-y-4 text-center">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <a href={item.href} onClick={() => setIsOpen(false)} className="block text-2xl font-heading font-bold text-brand-black py-2">{item.name}</a>
              {index < menuItems.length - 1 && <hr className="border-gray-100" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Header />



      {/* 2. EL PARQUE */}
      <section id="parque" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
              className="w-full h-full object-cover opacity-40" alt="Bosque fondo" />
          </div>
          <div data-aos="fade-right">
            <SectionTitle title="Naturaleza y Adrenalina" subtitle="Nuestra Propuesta" />
            <p className="text-lg mb-6 text-gray-600">Disfruta de circuitos diseñados para integrarse con el entorno natural de las sierras. Puentes tibetanos, troncos oscilantes y tirolesas de gran altura te esperan.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 font-semibold text-brand-black"><CheckCircle className="text-brand-orange" size={20} /> +35 Desafíos</div>
              <div className="flex items-center gap-2 font-semibold text-brand-black"><CheckCircle className="text-brand-orange" size={20} /> Bosque Nativo</div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800" className="rounded-[2rem] shadow-premium" alt="El Parque" />
          </div>
        </div>
      </section>

      {/* 3. SEGURIDAD */}
      <section id="seguridad" className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Tu seguridad es prioridad" subtitle="Tecnología Petzl" light />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-orange transition-all">
              <Shield size={48} className="text-brand-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">Línea de Vida Continua</h3>
              <p className="text-gray-400">Sistema magnético que garantiza estar conectado al cable de seguridad del inicio al fin.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-orange transition-all">
              <Star size={48} className="text-brand-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">Equipamiento Certificado</h3>
              <p className="text-gray-400">Arneses, cascos y poleas con certificación internacional UIAA para máxima confianza.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-orange transition-all">
              <Users size={48} className="text-brand-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">Instrucción Previa</h3>
              <p className="text-gray-400">Charla técnica obligatoria y práctica en circuito de baja altura antes de subir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GASTRONOMÍA */}
      <section id="gastronomia" className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800" className="rounded-[2rem] shadow-premium" alt="Comida Regional" />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <SectionTitle title="Restó de Montaña" subtitle="Gastronomía" />
            <p className="text-lg mb-6 text-gray-600">Recarga energías con nuestra selección de platos serranos. Hamburguesas artesanales, tablas de fiambres locales y opciones frescas para toda la familia.</p>
            <div className="flex items-center gap-4 p-5 bg-brand-soft rounded-2xl border border-brand-orange/10">
              <Utensils className="text-brand-orange flex-shrink-0" />
              <span className="font-bold text-brand-black">Abierto todos los días de 11:00 a 19:00 hs.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROMOCIONES (TARIFAS) */}
      <section id="promociones" className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <SectionTitle title="Pases y Beneficios" subtitle="Tarifas" />
          <div className="grid md:grid-cols-3 gap-8">
            {loadingTarifas ? [1, 2, 3].map(i => <div key={i} className="h-96 bg-gray-200 animate-pulse rounded-3xl"></div>) : (
              <>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between" data-aos="fade-up">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Pase Aventura</h3>
                    <p className="text-brand-orange font-bold text-3xl mb-6">$18.500</p>
                    <ul className="space-y-4 mb-8 text-gray-600">
                      <li className="flex gap-2"><CheckCircle size={18} className="text-green-500" /> Acceso a todos los niveles</li>
                      <li className="flex gap-2"><CheckCircle size={18} className="text-green-500" /> Circuito de Tirolesas</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="w-full py-4 bg-brand-black text-white text-center rounded-full font-bold hover:bg-brand-orange transition-all">Consultar</a>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-premium border-2 border-brand-orange relative flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Más Elegido</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Combo Amigos</h3>
                    <p className="text-brand-orange font-bold text-3xl mb-6">$15.900 <span className="text-sm font-normal text-gray-400">/ p.p.</span></p>
                    <ul className="space-y-4 mb-8 text-gray-600">
                      <li className="flex gap-2"><CheckCircle size={18} className="text-green-500" /> Mínimo 4 personas</li>
                      <li className="flex gap-2"><CheckCircle size={18} className="text-green-500" /> Descuento en el Restó</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="w-full py-4 bg-brand-orange text-white text-center rounded-full font-bold hover:bg-brand-dark transition-all">Reservar Grupo</a>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Pase Kids</h3>
                    <p className="text-brand-orange font-bold text-3xl mb-6">$12.500</p>
                    <ul className="space-y-4 mb-8 text-gray-600">
                      <li className="flex gap-2"><CheckCircle size={18} className="text-green-500" /> Menores de 10 años</li>
                      <li className="flex gap-2"><CheckCircle size={18} className="text-green-500" /> Circuito Redes y Puentes</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="w-full py-4 bg-brand-black text-white text-center rounded-full font-bold hover:bg-brand-orange transition-all">Consultar</a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 6. GRUPOS */}
      <section id="grupos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle title="Experiencias Grupales" subtitle="Colegios y Empresas" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-brand-bg rounded-[2.5rem] hover:bg-brand-soft transition-colors" data-aos="fade-up">
                <Users size={40} className="text-brand-orange mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4">Empresas</h3>
                <p className="text-gray-600">Programas de Team Building para fortalecer la confianza, comunicación y liderazgo de los equipos.</p>
              </div>
              <div className="p-10 bg-brand-bg rounded-[2.5rem] hover:bg-brand-soft transition-colors" data-aos="fade-up" data-aos-delay="100">
                <Zap size={40} className="text-brand-orange mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4">Instituciones</h3>
                <p className="text-gray-600">Salidas educativas con seguros incluidos y protocolos de seguridad adaptados a todas las edades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALERÍA */}
      <section id="galeria" className="py-24 bg-brand-black">
        <div className="container mx-auto px-6">
          <SectionTitle title="Nuestra Galería" subtitle="Momentos" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Galería Parque"
                />
                <div className="absolute inset-0 bg-brand-orange/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="text-white" size={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACTO Y UBICACIÓN */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="¿Cómo llegar?" subtitle="Ubicación y Contacto" />

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Info y Botón Reseñas */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="bg-brand-bg p-8 rounded-[2rem] space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><MapPin className="text-brand-orange" /></div>
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-gray-600">Camino al Centinela, Tandil, Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Phone className="text-brand-orange" /></div>
                  <div>
                    <h3 className="font-bold">WhatsApp</h3>
                    <p className="text-gray-600">+54 249 412-3456</p>
                  </div>
                </div>
              </div>

              {/* ACCIÓN GOOGLE REVIEWS */}
              <div className="bg-white border-2 border-dashed border-gray-200 p-8 rounded-[2rem] text-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" className="w-10 mx-auto mb-4" alt="Google" />
                <h3 className="font-bold text-xl mb-2">¡Tu opinión vale!</h3>
                <p className="text-gray-500 mb-6">Ayuda a otros aventureros compartiendo tu experiencia en Google.</p>
                <a
                  href={googleReviewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-brand-black text-white font-bold py-4 px-10 rounded-full hover:bg-brand-orange transition-all shadow-md"
                >
                  Escribir Reseña
                </a>
              </div>
            </div>

            {/* MAPA GOOGLE */}
            <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-premium border-8 border-white" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.564757530691!2d-59.16781742421943!3d-37.33924157210103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9547663e27%3A0x645e73059293112b!2sCerro%20El%20Centinela!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mapa Parque"
              ></iframe>
            </div>
          </div>

          {/* FEED DE RESEÑAS */}
          <div className="bg-brand-bg p-8 md:p-12 rounded-[3rem]">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <MessageSquare className="text-brand-orange" /> Comentarios en Google
              </h3>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-bold">4.9</span>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-gray-400 text-sm">(+800 opiniones)</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <ReviewCard name="Carlos Ruiz" date="Hace 2 días" text="La mejor actividad para hacer en Tandil. Muy seguro y divertido." rating={5} />
              <ReviewCard name="Lucía Paz" date="Hace 2 semanas" text="Increíble la atención de los guías. La comida del restó riquísima." rating={5} />
              <ReviewCard name="Andrés Gómez" date="Hace 1 mes" text="Fui con mi empresa y la pasamos genial. Ideal para grupos." rating={5} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CON REDES Y REGISTRADO */}
      <footer className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="text-2xl font-heading font-bold">
            PARQUE <span className="text-brand-orange">AÉREO</span> <span className="text-sm font-normal align-top">®</span>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-all">
              <Facebook size={24} />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-gray-500 text-sm">
            <p>© 2026 Parque Aéreo Tandil. Todos los derechos reservados. Marca Registrada.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/5492494123456"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-90"
        title="Chatear con nosotros"
      >
        <svg viewBox="0 0 24 24" width="35" height="35" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </div>
  );
}