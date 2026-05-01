import React from 'react';
import { motion } from 'motion/react';
import { Search as SearchIcon, MapPin, UserPlus, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Saúde em <br />
              <span className="text-brand-primary italic">Primeiro Lugar.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
              Encontre os melhores médicos e clínicas em Angola e agende sua consulta em segundos. Design pensado para a sua eficiência.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/search"
                className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20"
              >
                <SearchIcon className="w-5 h-5" />
                Marcar Consulta agora
              </Link>
              <Link
                to="/register"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Sou Médico / Clínica
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl transition-transform" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: SearchIcon,
                title: 'Pesquisa Fácil',
                desc: 'Encontre médicos por especialidade, localização e convênio.'
              },
              {
                icon: Zap,
                title: 'Marcação Instantânea',
                desc: 'Confirmação na hora com os horários reais disponíveis.'
              },
              {
                icon: ShieldCheck,
                title: 'Notificações WhatsApp',
                desc: 'Receba lembretes via SMS e WhatsApp para nunca perder sua consulta.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-primary/20 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-brand-primary w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="font-serif font-black text-4xl md:text-6xl text-slate-900">Especialidades</h2>
            <p className="text-slate-500 mt-4 text-lg">Selecione o atendimento que você precisa hoje.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Cardiologia', icon: '❤️' },
              { name: 'Pediatria', icon: '👶' },
              { name: 'Ginecologia', icon: '👩‍⚕️' },
              { name: 'Dermatologia', icon: '✨' },
              { name: 'Ortopedia', icon: '🦴' },
              { name: 'Psicologia', icon: '🧠' },
              { name: 'Oftalmologia', icon: '👁️' },
              { name: 'Nutrição', icon: '🥗' },
              { name: 'Clínica Geral', icon: '🏥' },
              { name: 'Urologia', icon: '👔' },
              { name: 'Neurologia', icon: '🌩️' },
              { name: 'Ver Todos', icon: '🔍', link: '/search' }
            ].map((s, i) => (
              <Link
                key={i}
                to={s.link || `/search?specialty=${s.name}`}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-primary/5 transition-all text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{s.icon}</div>
                <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{s.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
