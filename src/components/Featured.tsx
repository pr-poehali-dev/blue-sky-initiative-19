const features = [
  { label: "Профессиональные вспышки и постоянный свет" },
  { label: "Сменные фоны: белый, чёрный, серый, цветные" },
  { label: "Реквизит и аксессуары в наличии" },
  { label: "Зона для переодевания" },
  { label: "Wi-Fi и зарядка для устройств" },
  { label: "Доступно с 13 лет без сопровождения взрослых" },
];

export default function Featured() {
  return (
    <div id="pricing" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{background: "linear-gradient(160deg, #fff8fe 0%, #f3e8ff 50%, #fff7e0 100%)"}}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/desk.png"
          alt="Фотостудия изнутри"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Что входит в аренду</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Всё готово к съёмке — просто приходи и твори.
        </p>
        <ul className="mb-10 space-y-3">
          {features.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-neutral-700 text-base lg:text-lg">
              <span className="w-2 h-2 rounded-full bg-black shrink-0" />
              {f.label}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          <div className="border border-neutral-200 p-6 flex-1">
            <p className="uppercase text-xs tracking-wide text-neutral-500 mb-2">Будни</p>
            <p className="text-4xl font-bold text-neutral-900">2 500 ₽</p>
            <p className="text-sm text-neutral-500 mt-1">за час</p>
          </div>
          <div className="border-2 p-6 flex-1 relative" style={{borderColor: "#c026d3"}}>
            <span className="absolute -top-3 left-4 text-white text-xs px-3 py-1 uppercase tracking-wide" style={{background: "linear-gradient(90deg, #e040fb, #ff6ec7)"}}>Выгодно</span>
            <p className="uppercase text-xs tracking-wide text-neutral-500 mb-2">Сб — Вс</p>
            <p className="text-4xl font-bold text-neutral-900">2 200 ₽</p>
            <p className="text-sm text-neutral-500 mt-1">за час · скидка 12%</p>
          </div>
        </div>

        <a
          href="#booking"
          className="px-6 py-3 text-sm cursor-pointer w-fit uppercase tracking-wide text-white font-semibold transition-all duration-300 hover:opacity-90"
          style={{background: "linear-gradient(90deg, #e040fb, #ff6ec7)"}}
        >
          Забронировать
        </a>
      </div>
    </div>
  );
}