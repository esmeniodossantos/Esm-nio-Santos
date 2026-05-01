import React from 'react';
import { motion } from 'motion/react';
import { Users, Building2, TrendingUp, ShieldAlert, CheckCircle, XCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AdminPanel() {
  const stats = [
    { label: 'Total Pacientes', value: '1,284', icon: Users, color: 'text-blue-600' },
    { label: 'Médicos Ativos', value: '156', icon: ShieldAlert, color: 'text-emerald-600' },
    { label: 'Hospitais/Clínicas', value: '42', icon: Building2, color: 'text-brand-primary' },
    { label: 'Crescimento Mensal', value: '+12%', icon: TrendingUp, color: 'text-amber-600' },
  ];

  const pendingDoctors = [
    { id: '1', name: 'Dr. Sílvio Mascarenhas', specialty: 'Neurologia', city: 'Luanda', date: 'Há 2 horas' },
    { id: '2', name: 'Dra. Kiana Francisco', specialty: 'Dermatologia', city: 'Benguela', date: 'Há 5 horas' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-serif font-black text-5xl text-slate-900 tracking-tight">Painel Administrativo</h1>
          <p className="text-slate-500 mt-3 text-lg">Visão geral do ecossistema Saúde Pronta em Angola.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600">
           Última atualização: Agora
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className={cn("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4", s.color)}>
              <s.icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{s.label}</p>
            <p className="text-3xl font-display font-bold text-slate-900 mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Hospitals/Clinics Section */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <h3 className="font-display font-bold text-xl mb-6">Unidades de Saúde</h3>
              <div className="space-y-4">
                 {[
                    { name: 'Hospital Geral', city: 'Luanda', status: 'Verificado' },
                    { name: 'Clínica Girassol', city: 'Luanda', status: 'Verificado' },
                    { name: 'Hospital Josina Machel', city: 'Luanda', status: 'Pendente' }
                 ].map(h => (
                    <div key={h.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                       <div>
                          <p className="font-bold text-sm text-slate-900">{h.name}</p>
                          <p className="text-xs text-slate-500">{h.city}</p>
                       </div>
                       <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase",
                          h.status === 'Verificado' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                       )}>
                          {h.status}
                       </span>
                    </div>
                 ))}
                 <button className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
                    Gerir Todas as Clínicas
                 </button>
              </div>
           </div>
        </div>

        {/* Pending Approvals */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white p-8 rounded-3xl border border-slate-200">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-6 flex items-center gap-3">
              Médicos Pendentes de Aprovação
              <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full uppercase tracking-tighter">Ação necessária</span>
            </h3>

            <div className="space-y-4">
              {pendingDoctors.map((doc) => (
                <div key={doc.id} className="p-5 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100">
                      <User className="text-slate-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{doc.name}</p>
                      <p className="text-sm text-slate-500">{doc.specialty} • {doc.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-rose-500 hover:bg-rose-100 rounded-xl transition-all">
                      <XCircle className="w-6 h-6" />
                    </button>
                    <button className="p-2 text-emerald-500 hover:bg-emerald-100 rounded-xl transition-all">
                      <CheckCircle className="w-6 h-6" />
                    </button>
                    <button className="ml-4 bg-white text-slate-900 border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold">
                       Ver CV
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Health / Quick Info */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-brand-primary p-8 rounded-3xl text-white shadow-xl shadow-brand-primary/20">
              <h4 className="font-bold text-xl mb-4">Relatório de Consultas</h4>
              <p className="opacity-80 text-sm mb-6 leading-relaxed">As marcações em Luanda cresceram 15% esta semana. O Hospital Geral é a clínica mais procurada.</p>
              <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 py-3 rounded-xl font-bold hover:bg-white/30 transition-all">
                 Baixar Relatório PDF
              </button>
           </div>

           <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">Notificações do Sistema</h4>
              <div className="space-y-4">
                 <div className="flex gap-3 text-sm">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-slate-600">Servidor em carga alta (Luanda Sul).</p>
                 </div>
                 <div className="flex gap-3 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-slate-600">Backup diário concluído com sucesso.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
