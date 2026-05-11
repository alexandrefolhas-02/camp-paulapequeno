import React from 'react';

export default function MaintenancePage() {
  return (
    // O fundo principal usando a cor solicitada #E6E4E2
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#E6E4E2] text-gray-900 overflow-hidden font-sans selection:bg-[#183eeb] selection:text-white">
      
      {/* Efeitos de gradiente ao fundo (Substituindo o laranja pelo azul #183eeb) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#183eeb] opacity-[0.15] blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#183eeb] opacity-[0.1] blur-[100px]"></div>
      </div>

      {/* Container Principal do Conteúdo */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl">
        
        {/* Logo / Nome da Marca */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#183eeb]">
            Set & Gol
          </h1>
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Desculpe! Estamos em <br className="hidden md:block" /> 
          manutenção!
        </h2>

        {/* Subtítulo / Mensagem */}
        <p className="text-base md:text-lg text-gray-700 mb-14 max-w-xl mx-auto leading-relaxed">
          Nosso site está passando por uma manutenção programada e voltaremos em breve! 
          Agradecemos muito pela sua paciência. Entre em contato conosco para mais informações!
        </p>

        {/* Seção Social e Contato */}
        <div className="flex flex-col items-center space-y-6">
          <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Siga-nos
          </span>
          
          {/* Ícones Sociais */}
          <div className="flex gap-4 mb-2">
            <SocialIcon href="#" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 011-1h3z" />
            <SocialIcon href="#" path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" />
            <SocialIcon href="#" path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            <SocialIcon href="#" path="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.6 6.782c-1.168.45-1.156 1.152-.21 1.44l4.52 1.374 10.453-6.59c.494-.3.946-.143.576.185l-8.47 7.643-.28 4.093c.414 0 .596-.19.828-.415l1.988-1.93 4.137 3.056c.762.42 1.305.204 1.493-.69l2.702-12.72c.264-1.07-.406-1.554-1.115-1.228z" fillRule="evenodd" clipRule="evenodd" />
          </div>

          {/* Email de Suporte */}
          <a 
            href="mailto:suporte@setegol.com.br" 
            className="text-lg font-semibold text-gray-900 border-b-2 border-gray-900 hover:text-[#183eeb] hover:border-[#183eeb] transition-all duration-300 pb-1 mt-4"
          >
            suporte@setegol.com.br
          </a>
        </div>

      </div>
    </main>
  );
}

// Componente auxiliar para manter o código dos ícones limpo
function SocialIcon({ href, path, fillRule, clipRule }: { href: string, path: string, fillRule?: "nonzero" | "evenodd", clipRule?: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-gray-900 text-[#E6E4E2] rounded-full hover:bg-[#183eeb] hover:scale-110 transition-all duration-300 shadow-md"
    >
      <svg 
        className="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fillRule={fillRule} clipRule={clipRule} />
      </svg>
    </a>
  );
}
