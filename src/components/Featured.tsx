import Icon from "@/components/ui/icon";

const features = [
  { icon: "Zap", label: "Профессиональные вспышки и постоянный свет" },
  { icon: "Layers", label: "Сменные фоны: белый, чёрный, серый, цветные" },
  { icon: "Sparkles", label: "Реквизит и аксессуары в наличии" },
  { icon: "ShirtIcon", label: "Зона для переодевания" },
  { icon: "Wifi", label: "Wi-Fi и зарядка для устройств" },
  { icon: "Lock", label: "Снимаешь сам — никто не мешает и не смущает" },
];

const packages = [
  {
    name: "Будни",
    price: "3 500",
    desc: "за час",
    badge: null,
    items: ["Пн — Пт", "Любой фон", "Помощь с настройкой света"],
  },
  {
    name: "Выходные",
    price: "4 000",
    desc: "за час",
    badge: "Выгодно",
    items: ["Сб и Вс", "Любой фон", "Приоритетное бронирование"],
  },
  {
    name: "Вечер",
    price: "3 000",
    desc: "за час · с 20:00",
    badge: "Хит",
    items: ["Пн–Пт после 20:00", "Любой фон", "Тихая атмосфера для арт-съёмки"],
  },
];

const faq = [
  { q: "Нужен ли опыт?", a: "Нет — мы поможем настроить свет и выбрать фон под твою идею." },
  { q: "Можно с 13 лет?", a: "Да, с 13 лет без сопровождения взрослых. Берём ответственно." },
  { q: "Как забронировать?", a: "Напиши нам в Telegram или позвони — подберём удобное время." },
];

const review = {
  text: "Свет настроила сама, никто не мешал — получила именно те кадры, которые хотела. Атмосфера просто огонь!",
  name: "Маша, 16 лет",
};

export default function Featured() {
  return (
    <div
      id="pricing"
      className="min-h-screen px-6 py-20"
      style={{ background: "linear-gradient(160deg, #fff8fe 0%, #f3e8ff 50%, #fff7e0 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs text-neutral-500 mb-3">Фотостудия · Аренда</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4">
            Всё готово к съёмке
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Просто приходи и твори — оборудование, свет и атмосфера уже ждут тебя.
          </p>
        </div>

        {/* Главный факт */}
        <div
          className="rounded-3xl p-8 md:p-12 mb-12 text-white text-center"
          style={{ background: "linear-gradient(135deg, #c026d3, #e040fb, #ff9de2)" }}
        >
          <Icon name="Camera" size={40} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-4xl font-bold leading-snug mb-3">
            Ты снимаешь сам — в своём ритме,<br className="hidden md:block" /> без лишних глаз
          </h3>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Студия полностью в твоём распоряжении на всё время аренды. Никаких посторонних, никакого давления — только ты, свет и камера. Раскрепостись и получи кадры, о которых мечтал.
          </p>
        </div>

        {/* Что входит */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 shadow-sm"
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #e040fb, #ff6ec7)" }}
              >
                <Icon name={f.icon} size={15} className="text-white" />
              </span>
              <p className="text-sm text-neutral-700 leading-snug">{f.label}</p>
            </div>
          ))}
        </div>

        {/* Пакеты */}
        <h3 className="uppercase text-xs tracking-widest text-neutral-500 mb-6 text-center">Тарифы</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative bg-white rounded-3xl p-8 shadow-md flex flex-col gap-4"
            >
              {pkg.badge && (
                <span
                  className="absolute -top-3 left-6 text-white text-xs px-4 py-1 rounded-full uppercase tracking-wide font-semibold"
                  style={{ background: "linear-gradient(90deg, #e040fb, #ff6ec7)" }}
                >
                  {pkg.badge}
                </span>
              )}
              <div>
                <p className="uppercase text-xs tracking-wide text-neutral-400 mb-1">{pkg.name}</p>
                <p className="text-5xl font-bold text-neutral-900">{pkg.price} <span className="text-2xl">₽</span></p>
                <p className="text-sm text-neutral-400 mt-1">{pkg.desc}</p>
              </div>
              <ul className="space-y-2 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                    <Icon name="Check" size={14} className="shrink-0" style={{ color: "#e040fb" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="mt-2 block text-center py-3 rounded-xl text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:opacity-90 text-white"
                style={{ background: "linear-gradient(90deg, #e040fb, #ff6ec7)" }}
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>

        {/* Отзыв + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Отзыв */}
          <div
            className="rounded-3xl p-8 text-white flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #c026d3, #e040fb, #ff6ec7)" }}
          >
            <Icon name="Quote" size={36} className="opacity-50 mb-4" />
            <p className="text-xl lg:text-2xl font-medium leading-snug mb-6">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                <Icon name="User" size={18} className="text-white" />
              </div>
              <p className="text-sm opacity-80">{review.name}</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="flex flex-col gap-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #e040fb, #ff6ec7)" }}
                  >
                    <Icon name="HelpCircle" size={13} className="text-white" />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">{item.q}</p>
                    <p className="text-sm text-neutral-500">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
