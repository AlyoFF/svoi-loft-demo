"use client";

import ManagerForm from "@/components/form/ManagerForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Шапка */}
      <header className="bg-brand-dark py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-brand-gold font-heading text-xl">SVOI</h1>
            <p className="text-white/40 text-xs mt-0.5">Генератор презентаций</p>
          </div>
          <div className="text-right">
            <span className="text-white/30 text-xs">Внутренний инструмент</span>
          </div>
        </div>
      </header>

      {/* Форма */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-heading text-brand-dark mb-2">
              Новая презентация
            </h2>
            <p className="text-brand-dark/50 text-sm">
              Заполните параметры и сгенерируйте персонализированное предложение для клиента
            </p>
          </div>

          <ManagerForm />
        </div>

        {/* Подсказка */}
        <p className="text-center text-brand-dark/30 text-xs mt-8">
          Презентация откроется в новой вкладке. Ссылку можно отправить клиенту.
        </p>
      </main>
    </div>
  );
}
