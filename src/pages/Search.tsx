import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, MapPin, Star, Filter, Calendar, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { suggestSpecialty } from '@/services/geminiService';

const SPECIALTIES = [
  'Clínica Geral', 'Pediatria', 'Ginecologia', 'Cardiologia', 'Dermatologia', 'Ortopedia', 'Psicologia'
];

const MOCK_DOCTORS = [
  {
    id: '1',
    name: 'Dr. Afonso Henriques',
    specialty: 'Cardiologia',
    rating: 4.9,
    reviews: 124,
    location: 'Luanda, Mutamba',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    availability: 'Hoje'
  },
  {
    id: '2',
    name: 'Dra. Maria Neto',
    specialty: 'Pediatria',
    rating: 5.0,
    reviews: 89,
    location: 'Samba, Luanda',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    availability: 'Amanhã'
  },
  {
    id: '3',
    name: 'Dr. João Manuel',
    specialty: 'Clínica Geral',
    rating: 4.7,
    reviews: 210,
    location: 'Talatona, Luanda',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200',
    availability: 'Segunda-feira'
  }
];

export function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeSpecialty, setActiveSpecialty] = React.useState('Todos');
  const [showAiModal, setShowAiModal] = React.useState(false);
  const [symptoms, setSymptoms] = React.useState('');
  const [isAiLoading, setIsAiLoading] = React.useState(false);

  const handleAiSuggest = async () => {
    setIsAiLoading(true);
    const suggested = await suggestSpecialty(symptoms);
    setActiveSpecialty(suggested);
    setShowAiModal(false);
    setIsAiLoading(false);
    setSymptoms('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* AI Suggestion Trigger */}
      <div className="mb-8 p-6 bg-editorial-dark rounded-[32px] text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-700" />
         <div className="relative z-10">
            <h2 className="font-serif font-black text-2xl md:text-3xl mb-2">Não sabe qual médico procurar?</h2>
            <p className="text-slate-400">Conte-nos seus sintomas e nossa IA sugere a melhor especialidade.</p>
         </div>
         <button 
           onClick={() => setShowAiModal(true)}
           className="relative z-10 bg-white text-editorial-dark px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-white/5"
         >
            <Sparkles className="w-5 h-5" />
            Assistente IA
         </button>
      </div>

      <AnimatePresence>
        {showAiModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg p-10 rounded-[40px] shadow-2xl relative"
            >
              <button 
                onClick={() => setShowAiModal(false)}
                className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900"
              >
                 <X className="w-6 h-6" />
              </button>
              
              <div className="mb-8">
                 <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8" />
                 </div>
                 <h3 className="font-serif font-black text-3xl text-slate-900 mb-2">Como você se sente?</h3>
                 <p className="text-slate-500">Descreva brevemente seus sintomas para que eu possa ajudar.</p>
              </div>

              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 min-h-[120px] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-lg outline-none mb-6"
                placeholder="Ex: Estou com dores de cabeça constantes e tonturas há 3 dias..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />

              <button 
                onClick={handleAiSuggest}
                disabled={isAiLoading || symptoms.length < 10}
                className={cn(
                   "w-full py-5 rounded-[22px] font-bold text-lg flex items-center justify-center gap-3 transition-all",
                   isAiLoading ? "bg-slate-200 text-slate-400" : "bg-editorial-dark text-white hover:bg-brand-primary shadow-xl shadow-brand-primary/10"
                )}
              >
                {isAiLoading ? "Analisando sintomas..." : "Sugerir Especialidade"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <div className="flex items-center gap-2 mb-6 font-bold text-slate-900">
              <Filter className="w-5 h-5 text-brand-primary" />
              Filtros
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
                  Especialidade
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveSpecialty('Todos')}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-xl text-sm transition-all",
                      activeSpecialty === 'Todos' ? "bg-brand-primary text-white" : "hover:bg-slate-50 text-slate-600"
                    )}
                  >
                    Todos
                  </button>
                  {SPECIALTIES.map(s => (
                    <button
                      key={s}
                      onClick={() => setActiveSpecialty(s)}
                      className={cn(
                        "w-full text-left px-4 py-2 rounded-xl text-sm transition-all",
                        activeSpecialty === s ? "bg-brand-primary text-white" : "hover:bg-slate-50 text-slate-600"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Search Results */}
        <div className="flex-grow space-y-6">
          <div className="relative">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquise por nome do médico ou clínica..."
              className="w-full bg-white border-slate-200 border rounded-3xl py-5 pl-14 pr-6 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid gap-4">
            {MOCK_DOCTORS.map((doctor) => (
              <motion.div
                layout
                key={doctor.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-4 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-6 hover:border-brand-primary transition-all group"
              >
                <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif font-bold text-2xl text-slate-900 group-hover:text-brand-primary transition-colors">{doctor.name}</h3>
                        <p className="text-brand-primary font-semibold">{doctor.specialty}</p>
                      </div>
                    <div className="flex items-center gap-1 bg-brand-primary text-white px-3 py-1 rounded-lg text-xs font-black tracking-widest shadow-lg shadow-brand-primary/20">
                        <Star className="w-3 h-3 fill-white" />
                        {doctor.rating}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-3 text-slate-500 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {doctor.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Próxima vaga: <span className="text-slate-900 font-medium">{doctor.availability}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      to={`/doctor/${doctor.id}`}
                      className="w-full sm:w-auto text-center bg-brand-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/10"
                    >
                      Ver perfil completo
                    </Link>
                    <button className="w-full sm:w-auto text-center border border-slate-200 px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                      Favoritos
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
