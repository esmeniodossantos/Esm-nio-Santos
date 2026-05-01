import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, FileText, Bell, MoreVertical, LogOut, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Dashboard() {
  const appointments = [
    {
      id: '1',
      doctor: 'Dr. Afonso Henriques',
      specialty: 'Cardiologia',
      date: '15 de Maio, 2026',
      time: '14:30',
      status: 'Confirmada',
      location: 'Hospital Geral, Mutamba',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '2',
      doctor: 'Dra. Maria Neto',
      specialty: 'Pediatria',
      date: '20 de Maio, 2026',
      time: '09:00',
      status: 'Pendente',
      location: 'Clínica Girassol, Luanda',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Nav */}
      <aside className="w-full md:w-64 space-y-2">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 mb-6 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
             <User className="w-10 h-10 text-slate-400" />
          </div>
          <h2 className="font-bold text-slate-900">João Lourenço</h2>
          <p className="text-sm text-slate-500">Paciente</p>
        </div>

        {[
          { icon: Calendar, label: 'Minhas Consultas', active: true },
          { icon: FileText, label: 'Histórico Médico', active: false },
          { icon: Bell, label: 'Notificações', active: false },
          { icon: User, label: 'Perfil', active: false },
        ].map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all",
              item.active 
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}

        <button className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-rose-500 hover:bg-rose-50 transition-all mt-8">
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow space-y-8">
        <div>
          <h1 className="font-serif font-black text-4xl text-slate-900 mb-2">Bem-vindo, João!</h1>
          <p className="text-slate-500 font-medium">Você tem 2 consultas marcadas para as próximas semanas.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Total de Consultas</p>
            <p className="text-4xl font-display font-bold text-slate-900">12</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Receitas Ativas</p>
            <p className="text-4xl font-display font-bold text-slate-900">4</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Saúde Geral</p>
            <div className="flex items-center gap-2">
              <p className="text-4xl font-display font-bold text-brand-accent">9.2</p>
              <div className="h-2 w-20 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-[92%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Local Settings */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200">
           <h3 className="font-display font-bold text-xl mb-6">Configurações Regionais</h3>
           <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900">Notificações WhatsApp</p>
                       <p className="text-xs text-slate-500">Ativado para +244 923 *** 456</p>
                    </div>
                 </div>
                 <div className="w-12 h-6 bg-brand-primary rounded-full relative p-1 cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                 </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xs uppercase">
                       MCX
                    </div>
                    <div>
                       <p className="font-bold text-slate-900">Multicaixa Express</p>
                       <p className="text-xs text-slate-500">Para pagamentos rápidos</p>
                    </div>
                 </div>
                 <button className="text-brand-primary font-bold text-sm">Configurar</button>
              </div>
           </div>
        </section>

        {/* Upcoming Appointments */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display font-bold text-2xl text-slate-900">Próximas Consultas</h3>
            <button className="text-brand-primary font-bold text-sm hover:underline">Ver tudo</button>
          </div>

          <div className="space-y-4">
            {appointments.map((apt) => (
              <motion.div
                key={apt.id}
                whileHover={{ scale: 1.01 }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                  <img src={apt.image} alt={apt.doctor} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h4 className="font-bold text-lg text-slate-900">{apt.doctor}</h4>
                  <p className="text-brand-primary font-semibold text-sm">{apt.specialty}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 text-brand-primary" />
                      {apt.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Clock className="w-4 h-4 text-brand-primary" />
                      {apt.time}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                      {apt.location}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <span className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold text-center",
                    apt.status === 'Confirmada' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  )}>
                    {apt.status}
                  </span>
                  <button className="p-3 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-white transition-all mx-auto md:mx-0">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
