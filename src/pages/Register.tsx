import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Register() {
  const [role, setRole] = React.useState<'patient' | 'doctor'>('patient');

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20">
            <Stethoscope className="text-white w-8 h-8" />
          </div>
          <h1 className="font-display font-bold text-3xl text-slate-900">Criar sua conta</h1>
          <p className="text-slate-500 mt-2">Junte-se a milhares de angolanos cuidando melhor da saúde.</p>
        </div>

        {/* Role Selector */}
        <div className="flex p-1 bg-slate-100 rounded-2xl mb-10">
          <button
            onClick={() => setRole('patient')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'patient' ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Sou Paciente
          </button>
          <button
            onClick={() => setRole('doctor')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'doctor' ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Sou Médico
          </button>
        </div>

        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Telefone (Principal)</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="+244"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-lg font-medium"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ex: Manuel Francisco"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-lg font-medium"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Repetir Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 mt-4"
          >
            Cadastrar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center mt-10 text-slate-600 font-medium">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-brand-primary font-bold hover:underline">Fazer login</Link>
        </p>
      </motion.div>
    </div>
  );
}
