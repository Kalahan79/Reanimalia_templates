import React from 'react';
import { ChevronRight, Heart, Star, CheckCircle2 } from 'lucide-react';

const ReelsTemplatesBranded = () => {
  // Logo component
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">R</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-300 rounded-full" />
      </div>
      <span className="text-xl font-bold text-purple-600">Reanimalia</span>
    </div>
  );

  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {/* Template 1: Antes y Después con Logo */}
      <div className="template1 flex-shrink-0 bg-white rounded-lg shadow-lg p-4" style={{width: '400px', height: '710px'}}>
        <div className="h-full bg-gradient-to-b from-purple-600 to-purple-800 rounded-lg p-6 flex flex-col">
          <div className="bg-white rounded-lg p-3 mb-4">
            <Logo />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <div className="bg-white/20 rounded-xl p-4">
              <h2 className="text-white text-3xl font-bold mb-4">Antes</h2>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
            <ChevronRight className="w-12 h-12 text-white mx-auto" />
            <div className="bg-white/20 rounded-xl p-4">
              <h2 className="text-white text-3xl font-bold mb-4">Después</h2>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
          </div>
          <div className="mt-4 text-white text-sm">
            <p>#RehabilitaciónAnimal #Reanimalia</p>
          </div>
        </div>
      </div>

      {/* Template 2: Serie de Tips con Logo */}
      <div className="template2 flex-shrink-0 bg-white rounded-lg shadow-lg p-4" style={{width: '400px', height: '710px'}}>
        <div className="h-full bg-gradient-to-br from-teal-400 to-purple-600 rounded-lg p-6 flex flex-col">
          <div className="bg-white rounded-lg p-3 mb-6">
            <Logo />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-purple-600">#1</span>
            </div>
            <h2 className="text-3xl font-bold text-white text-center">Tips de Recuperación</h2>
            <div className="space-y-4 w-full">
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-white text-lg">Ejercicios diarios de 10 minutos</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-white text-lg">Mantén el área de descanso limpia</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-white text-lg">Sigue la rutina recomendada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template 3: Testimonios con Logo */}
      <div className="template3 flex-shrink-0 bg-white rounded-lg shadow-lg p-4" style={{width: '400px', height: '710px'}}>
        <div className="h-full bg-gradient-to-br from-purple-500 via-purple-600 to-teal-400 rounded-lg p-6 flex flex-col">
          <div className="bg-white rounded-lg p-3 mb-4">
            <Logo />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-white/20"></div>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="bg-white/20 rounded-xl p-6 text-center">
              <p className="text-white text-xl italic">"Mi mascota ha recuperado su movilidad por completo"</p>
              <p className="text-white/80 mt-4">- Luna y su familia 🐾</p>
            </div>
          </div>
          <div className="mt-4 text-white text-sm">
            <p>#ExperienciasReanimalia #RehabilitaciónVeterinaria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsTemplatesBranded;