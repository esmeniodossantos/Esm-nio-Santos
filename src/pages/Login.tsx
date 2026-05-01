import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Mail, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20">
            <Stethoscope className="text-white w-8 h-8" />
          </div>
          <h1 className="font-display font-bold text-3xl text-slate-900">Bem-vindo de volta</h1>
          <p className="text-slate-500 mt-2">Acesse sua conta para gerenciar suas consultas.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Número de Telefone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="tel"
                placeholder="+244 9XX XXX XXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-lg font-medium"
              />
            </div>
            <p className="text-xs text-slate-400 mt-2">Enviaremos um código SMS para confirmar sua identidade.</p>
          </div>

          <button
            type="button"
            className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
          >
            Receber Código SMS
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Ou use sua senha</span>
          </div>

          <div className="space-y-4">
            <button className="w-full border border-slate-200 py-3 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              Entrar com E-mail
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-slate-600 font-medium">
          Novo por aqui?{' '}
          <Link to="/register" className="text-brand-primary font-bold hover:underline">Crie uma conta gratuita</Link>
        </p>
      </motion.div>
    </div>
  );
}
