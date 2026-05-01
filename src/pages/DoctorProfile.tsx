import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, Clock, ShieldCheck, ThumbsUp, Calendar, ArrowLeft, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DoctorProfile() {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);
  const [showPayment, setShowPayment] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const handleBooking = () => {
    setShowPayment(true);
  };

  const processPayment = () => {
    setIsProcessing(true);
    // Simulação de delay do gateway de pagamento local
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => setShowPayment(false), 3000);
    }, 2500);
  };


  // Mock data - would come from Firebase
  const doctor = {
    id: '1',
    name: 'Dr. Afonso Henriques',
    specialty: 'Cardiologia',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Especialista em cardiologia intervencionista com mais de 15 anos de experiência clínica. Focado em prevenção cardiovascular e tratamentos minimamente invasivos.',
    experience: '15+ Anos',
    consults: '5k+',
    rating: 4.9,
    location: 'Hospital Geral de Luanda, Mutamba',
    education: 'Doutorado em Cardiologia pela Universidade de Lisboa',
    price: '25.000 Kz',
    slots: ['09:00', '10:30', '14:00', '15:30', '17:00']
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/search" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary mb-8 font-medium transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Voltar para a pesquisa
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Profile Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -z-0" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border-4 border-white">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                  <div>
                    <h1 className="font-serif font-black text-4xl text-slate-900 tracking-tight">{doctor.name}</h1>
                    <p className="text-xl text-brand-primary font-semibold mt-1">{doctor.specialty}</p>
                    <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-5 h-5 fill-amber-500" />
                        {doctor.rating}
                      </div>
                      <div className="text-slate-400">|</div>
                      <div className="flex items-center gap-1 text-slate-600 font-medium">
                        <ThumbsUp className="w-4 h-4" />
                        98% Pacientes Recomendam
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-slate-50 rounded-2xl text-center">
                    <p className="text-sm text-slate-500 font-medium mb-1">Experiência</p>
                    <p className="font-bold text-slate-900">{doctor.experience}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-center">
                    <p className="text-sm text-slate-500 font-medium mb-1">Consultas</p>
                    <p className="font-bold text-slate-900">{doctor.consults}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-center hidden md:block">
                    <p className="text-sm text-slate-500 font-medium mb-1">Preço</p>
                    <p className="font-bold text-slate-900">{doctor.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200">
            <h2 className="font-serif font-bold text-2xl mb-6 text-slate-900 border-b border-slate-100 pb-4">Sobre o Médico</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {doctor.bio}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Local de Atendimento</p>
                  <p className="text-slate-600">{doctor.location}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-brand-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Formação Acadêmica</p>
                  <p className="text-slate-600">{doctor.education}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
            <h3 className="font-serif font-bold text-2xl mb-6 text-slate-900">Agendamento</h3>
            
            <div className="mb-8">
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 block">
                Selecione o Horário
              </label>
              <div className="grid grid-cols-3 gap-3">
                {doctor.slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={cn(
                      "py-3 rounded-xl font-bold transition-all border",
                      selectedSlot === slot
                        ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 scale-95"
                        : "bg-white text-slate-700 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="text-slate-600 font-medium">Valor da Consulta</span>
                <span className="font-bold text-lg text-slate-900">{doctor.price}</span>
              </div>
              
              <button
                disabled={!selectedSlot}
                onClick={handleBooking}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold text-lg transition-all",
                  selectedSlot 
                    ? "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-xl shadow-brand-primary/20"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                )}
              >
                Marcar e Pagar
              </button>

              {/* Payment Overlay */}
              <AnimatePresence>
                {showPayment && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-white w-full max-w-md p-8 rounded-[40px] shadow-2xl relative overflow-hidden"
                    >
                      {paymentSuccess ? (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-10 h-10" />
                          </div>
                          <h3 className="font-serif font-black text-2xl mb-2 text-slate-900">Consulta Marcada!</h3>
                          <p className="text-slate-500">Você receberá um SMS de confirmação em breve.</p>
                        </div>
                      ) : (
                        <>
                          <button onClick={() => setShowPayment(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900">
                             <XCircle className="w-6 h-6" />
                          </button>
                          <h3 className="font-serif font-black text-2xl mb-2 text-slate-900">Pagamento Local</h3>
                          <p className="text-slate-500 mb-8">Pague agora via Multicaixa Express ou Unitel Money para garantir sua vaga.</p>
                          
                          <div className="space-y-6">
                            <div>
                               <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Número do Telefone (Express)</label>
                               <input 
                                 type="tel" 
                                 placeholder="+244 923 000 000"
                                 className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-xl font-bold focus:ring-2 focus:ring-brand-primary/20 outline-none"
                                 value={phoneNumber}
                                 onChange={(e) => setPhoneNumber(e.target.value)}
                               />
                            </div>

                            <button 
                              onClick={processPayment}
                              disabled={isProcessing || phoneNumber.length < 9}
                              className={cn(
                                "w-full py-5 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 transition-all",
                                isProcessing ? "bg-slate-300" : "bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-200"
                              )}
                            >
                              {isProcessing ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              ) : (
                                "Confirmar no Multicaixa Express"
                              )}
                            </button>

                            <p className="text-center text-xs text-slate-400">
                               Uma notificação será enviada para o seu aplicativo Multicaixa Express para confirmar a transação.
                            </p>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
              
              <p className="text-xs text-center text-slate-400 px-4">
                Ao confirmar, você aceita nossos termos de uso e política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
