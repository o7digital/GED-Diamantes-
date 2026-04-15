export default function GedDiamantesErpDemoMockup() {
  const executiveCards = [
    {
      title: "Presidencia del GED",
      subtitle: "Vista estratégica general",
      value: "12 indicadores",
      governance: "Comité mensual",
      nextReview: "19 Abr 2026",
      tone: ["#d9c6a3", "#b89668"],
    },
    {
      title: "Consejo de Administración",
      subtitle: "Seguimiento y validaciones",
      value: "5 acuerdos",
      governance: "Actas vigentes",
      nextReview: "22 Abr 2026",
      tone: ["#cad3dc", "#96a8bb"],
    },
    {
      title: "Director BGE",
      subtitle: "Unidad BGE",
      value: "18 casos",
      governance: "Operación prioritaria",
      nextReview: "17 Abr 2026",
      tone: ["#d7d1c8", "#b8ada0"],
    },
    {
      title: "Director MVT",
      subtitle: "Unidad MVT",
      value: "24 casos",
      governance: "Seguimiento semanal",
      nextReview: "16 Abr 2026",
      tone: ["#c9d6cf", "#8ea295"],
    },
    {
      title: "Director CGS",
      subtitle: "Unidad CGS",
      value: "14 casos",
      governance: "Mesa operativa",
      nextReview: "20 Abr 2026",
      tone: ["#d7c4b7", "#b28e74"],
    },
    {
      title: "Director AMN",
      subtitle: "Unidad AMN",
      value: "9 casos",
      governance: "Cartera comercial",
      nextReview: "18 Abr 2026",
      tone: ["#c4ccd7", "#8d9caf"],
    },
  ];

  const operationalStats = [
    { label: "Obras activas", value: "27", foot: "4 por arrancar" },
    { label: "Servicios en curso", value: "43", foot: "SLA 96.2%" },
    { label: "Cobranza pendiente", value: "$2.4M", foot: "Corte semanal" },
    { label: "Pólizas / seguros", value: "112", foot: "11 renovaciones" },
  ];

  const mobileNavItems = ["Resumen", "Gobierno", "ERP", "Integraciones"];

  const externalSystems = [
    {
      title: "Seguros",
      accent: "from-[#d8c29b] to-[#b48b58]",
      soft: "bg-[#f7f1e6] text-[#775736] border-[#ecdfc6]",
      items: ["Pólizas", "Renovaciones", "Siniestros"],
      owner: "Control administrativo",
      sync: "Sync cada 2h",
      status: "Estable",
    },
    {
      title: "Telefonía celular",
      accent: "from-[#90a495] to-[#55675d]",
      soft: "bg-[#eef3ef] text-[#45564d] border-[#d8e1da]",
      items: ["Líneas", "Consumos", "Asignaciones"],
      owner: "Soporte interno",
      sync: "Sync diario",
      status: "Estable",
    },
    {
      title: "Bancos",
      accent: "from-[#bac8d8] to-[#7b8fa7]",
      soft: "bg-[#eff3f8] text-[#55667a] border-[#dbe5ef]",
      items: ["Pagos", "Conciliación", "Tesorería"],
      owner: "Finanzas GED",
      sync: "Sync cada 1h",
      status: "Monitoreo",
    },
    {
      title: "Obras",
      accent: "from-[#c3a184] to-[#8a654a]",
      soft: "bg-[#f5eee9] text-[#6d503a] border-[#ead9cc]",
      items: ["Avances", "Costos", "Evidencias"],
      owner: "Dirección técnica",
      sync: "Sync en campo",
      status: "Activo",
    },
    {
      title: "Servicios",
      accent: "from-[#6e7782] to-[#313840]",
      soft: "bg-[#eef1f4] text-[#4d5761] border-[#dde3e9]",
      items: ["OTs", "SLA", "Incidencias"],
      owner: "Operación CGS",
      sync: "Tiempo real",
      status: "Activo",
    },
    {
      title: "Beneficios comerciales",
      accent: "from-[#d8c7a9] to-[#a88861]",
      soft: "bg-[#f7f2e9] text-[#72593c] border-[#ede2cf]",
      items: ["Convenios", "Descuentos", "Campañas"],
      owner: "Gestión AMN",
      sync: "Sync diario",
      status: "Estable",
    },
    {
      title: "Página web y email",
      accent: "from-[#aab5c3] to-[#6e7888]",
      soft: "bg-[#f0f3f7] text-[#566171] border-[#dfe6ed]",
      items: ["Leads", "Solicitudes", "Comunicaciones"],
      owner: "Canal digital GED",
      sync: "Tiempo real",
      status: "Activo",
    },
  ];

  const processFlow = [
    {
      step: "01",
      title: "Captación",
      desc: "Entradas desde web, email, beneficios comerciales y contactos directos.",
    },
    {
      step: "02",
      title: "Validación directiva",
      desc: "Gerencia y dirección revisan prioridad, presupuesto y unidad responsable.",
    },
    {
      step: "03",
      title: "Operación",
      desc: "Se activa obra o servicio con responsables, tiempos, costos y evidencias.",
    },
    {
      step: "04",
      title: "Control financiero",
      desc: "Bancos, pagos, seguros y seguimiento administrativo en un solo lugar.",
    },
  ];

  const recentItems = [
    {
      id: "GED-2410",
      type: "Obra",
      area: "MVT",
      client: "Diamantes del Norte",
      status: "En ejecución",
      priority: "Alta",
      owner: "Ing. Laura Méndez",
      updated: "Hoy · 09:40",
      phase: "Frente 2 · obra civil",
    },
    {
      id: "GED-2411",
      type: "Servicio",
      area: "CGS",
      client: "Grupo Veta Azul",
      status: "Pendiente de aprobación",
      priority: "Media",
      owner: "Coord. Javier Soto",
      updated: "Hoy · 08:15",
      phase: "Mesa pendiente de visto bueno",
    },
    {
      id: "GED-2412",
      type: "Seguro",
      area: "BGE",
      client: "Mina Aurora",
      status: "Renovación programada",
      priority: "Media",
      owner: "Lic. Paula Acosta",
      updated: "Ayer · 18:22",
      phase: "Renovación trimestral",
    },
    {
      id: "GED-2413",
      type: "Beneficio comercial",
      area: "AMN",
      client: "Red Comercial Centro",
      status: "Activo",
      priority: "Baja",
      owner: "Comercial AMN",
      updated: "Ayer · 16:05",
      phase: "Convenio vigente 2026",
    },
  ];

  const navItems = [
    "Resumen ejecutivo",
    "Dirección y gobierno",
    "ERP central",
    "Obras y servicios",
    "Finanzas y bancos",
    "Integraciones",
    "Casos activos",
  ];

  const quickActions = [
    { label: "Nuevo caso", key: "NC" },
    { label: "Nueva obra", key: "NO" },
    { label: "Reporte ejecutivo", key: "RE" },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8f5ef_0%,#f1ebe2_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1720px]">
        <aside className="hidden w-[308px] shrink-0 border-r border-white/65 bg-[linear-gradient(180deg,#fcfaf6_0%,#f2ece3_100%)] px-6 py-7 lg:block lg:overflow-y-auto">
          <div className="rounded-[32px] border border-white/70 bg-white/74 p-5 shadow-[0_20px_48px_rgba(72,58,42,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#d8c39f_0%,#a88559_100%)] text-lg font-semibold text-white shadow-[0_10px_22px_rgba(152,117,78,0.35)]">
                GD
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#988368]">ERP demo</p>
                <h2 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-[#26313d]">Grupo Diamantes</h2>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            {navItems.map((item, index) => (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-[22px] px-4 py-3 text-sm font-medium transition duration-300 ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#2f3d4f_0%,#45586d_100%)] text-white shadow-[0_14px_35px_rgba(52,67,85,0.24)]"
                    : "border border-white/75 bg-white/74 text-[#5d6874] shadow-[0_10px_26px_rgba(72,58,42,0.05)] hover:bg-white/95"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 rounded-r-full ${
                    index === 0 ? "bg-[#dbc49f]" : "bg-transparent group-hover:bg-[#d7c2a0]/70"
                  }`}
                />
                <span className="relative">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-[#eadfce] bg-[linear-gradient(180deg,#faf7f2_0%,#f4eee6_100%)] p-5 shadow-[0_12px_30px_rgba(72,58,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.26em] text-[#9a8668]">Objetivo</p>
            <p className="mt-3 text-sm leading-6 text-[#5f6873]">
              Mostrar una versión más premium de Grupo Diamantes alineada con la estructura real del negocio de GED.
            </p>
          </div>

          <div className="mt-6 rounded-[30px] border border-[#e6dccd] bg-white/78 p-5 shadow-[0_14px_34px_rgba(72,58,42,0.07)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.26em] text-[#9a8668]">Accesos rápidos</p>
            <div className="mt-4 space-y-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-[#ece2d4] bg-[#faf7f2] px-4 py-3 text-left text-sm font-medium text-[#55616e] transition duration-300 hover:border-[#e2d3be] hover:bg-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#e6d3b6_0%,#ccb08a_100%)] text-[10px] font-semibold tracking-[0.12em] text-[#5a4936] shadow-sm">
                    {action.key}
                  </span>
                  <span className="flex-1">{action.label}</span>
                  <span className="text-xs text-[#98a3af] transition group-hover:text-[#7a8795]">↗</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="border-b border-white/60 bg-[radial-gradient(circle_at_top_left,#fcfaf6_0%,#eee6db_38%,#e5dccf_100%)] px-5 pb-6 pt-5 sm:px-6 lg:px-8">
            <div className="mb-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {mobileNavItems.map((item, index) => (
                <div
                  key={item}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,#2f3d4f_0%,#45586d_100%)] text-white shadow-[0_12px_28px_rgba(52,67,85,0.20)]"
                      : "border border-white/75 bg-white/76 text-[#7a8692] shadow-sm"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-white/70 bg-white/74 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8d7a60] shadow-sm backdrop-blur-xl">
                  Demo ERP Grupo Diamantes · V6
                </div>
                <div className="rounded-full border border-[#e7dccb] bg-[#faf5ee] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b785d] shadow-sm">
                  Premium boardroom UI
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <label className="group flex h-12 w-full items-center gap-3 rounded-[18px] border border-white/75 bg-white/76 px-4 text-sm text-[#5f6873] shadow-[0_10px_24px_rgba(74,60,44,0.06)] backdrop-blur-xl transition focus-within:border-[#d9c6a6] sm:w-[340px]">
                  <svg className="h-4 w-4 text-[#8d98a4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Buscar proyecto, cliente o área"
                    className="w-full bg-transparent text-sm text-[#4b5662] placeholder:text-[#9ba4af] outline-none"
                  />
                </label>

                <button className="relative flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/75 bg-white/76 text-[#5b6672] shadow-[0_10px_24px_rgba(74,60,44,0.06)] backdrop-blur-xl transition hover:bg-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                    <path d="M9 17a3 3 0 0 0 6 0" />
                  </svg>
                  <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d6bd97_0%,#a78253_100%)] px-1 text-[10px] font-semibold text-white shadow">
                    3
                  </span>
                </button>

                <button className="flex h-12 items-center gap-3 rounded-[18px] border border-white/75 bg-white/76 px-3 pr-4 text-sm font-medium text-[#33404e] shadow-[0_10px_24px_rgba(74,60,44,0.06)] backdrop-blur-xl transition hover:bg-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ccd8e6_0%,#91a3b7_100%)] text-xs font-semibold text-white">
                    OA
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-[#33404e]">Olivier</span>
                    <span className="block text-xs font-normal text-[#8893a0]">Admin demo</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/65 bg-[linear-gradient(135deg,#fdfbf8_0%,#f2ebe0_45%,#ebe2d6_100%)] p-6 shadow-[0_18px_42px_rgba(74,60,44,0.08)] lg:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-45">
                <div className="absolute -right-8 top-0 h-48 w-48 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[#d9c5a6]/35 blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#26313d] lg:text-5xl">
                    GED Diamantes · maqueta premium
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-[#626c77] lg:text-base">
                    Interfaz de demostración basada en Presidencia, Consejo, Directores, personal operativo y
                    relación del ERP con los sistemas externos del negocio.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[600px]">
                  <div className="rounded-[24px] border border-white/75 bg-white/80 px-4 py-4 shadow-[0_14px_34px_rgba(74,60,44,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#9c8769]">Rol activo</div>
                    <div className="mt-2 text-sm font-semibold text-[#2f3c4a]">Vista Presidencia</div>
                  </div>
                  <div className="rounded-[24px] border border-white/75 bg-white/80 px-4 py-4 shadow-[0_14px_34px_rgba(74,60,44,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#9c8769]">Estado</div>
                    <div className="mt-2 text-sm font-semibold text-[#2f3c4a]">Demo conceptual</div>
                  </div>
                  <div className="rounded-[24px] border border-white/75 bg-white/80 px-4 py-4 shadow-[0_14px_34px_rgba(74,60,44,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#9c8769]">Enfoque</div>
                    <div className="mt-2 text-sm font-semibold text-[#2f3c4a]">Dirección + operación</div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 grid gap-3 border-t border-white/55 pt-6 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/70 bg-white/62 px-4 py-4 shadow-[0_12px_28px_rgba(74,60,44,0.05)] backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#958268]">Mesa ejecutiva</div>
                  <div className="mt-2 text-sm font-semibold text-[#33404d]">Consejo + Presidencia sincronizados</div>
                </div>
                <div className="rounded-[24px] border border-white/70 bg-white/62 px-4 py-4 shadow-[0_12px_28px_rgba(74,60,44,0.05)] backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#958268]">Prioridad operativa</div>
                  <div className="mt-2 text-sm font-semibold text-[#33404d]">MVT y CGS concentran la carga del día</div>
                </div>
                <div className="rounded-[24px] border border-white/70 bg-white/62 px-4 py-4 shadow-[0_12px_28px_rgba(74,60,44,0.05)] backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#958268]">Control financiero</div>
                  <div className="mt-2 text-sm font-semibold text-[#33404d]">Bancos, seguros y cobranza bajo seguimiento</div>
                </div>
              </div>
            </div>
          </div>

          <main className="space-y-8 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
            <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-[40px] border border-[#dad0c4] bg-[linear-gradient(135deg,#273442_0%,#364759_52%,#506276_100%)] p-8 text-white shadow-[0_30px_86px_rgba(48,60,75,0.24)] lg:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-[#d7c4a5]">Núcleo del sistema</p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] lg:text-6xl">ERP empresarial Grupo Diamantes</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-white/80 lg:text-base">
                      Centro de control para ejecutivos, gerentes, personal experto, técnico y operativo. Desde aquí
                      se administran clientes, operaciones, finanzas, documentos y seguimiento.
                    </p>
                  </div>

                  <div className="rounded-[30px] border border-white/12 bg-white/10 p-5 backdrop-blur-xl lg:w-[300px]">
                    <div className="text-xs uppercase tracking-[0.26em] text-white/60">Objetivo de la demo</div>
                    <div className="mt-3 text-lg font-semibold leading-7">
                      Un ERP central para dirección, operación e integraciones con presencia high-end.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {operationalStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[30px] border border-white/82 bg-white/88 p-5 shadow-[0_18px_42px_rgba(72,58,42,0.06)] backdrop-blur transition hover:-translate-y-0.5"
                  >
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-[#2c3846]">{stat.value}</div>
                    <div className="mt-2 text-sm text-[#707985]">{stat.label}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.14em] text-[#9ca5af]">{stat.foot}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {executiveCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[32px] border border-white/82 bg-white/90 p-6 shadow-[0_20px_48px_rgba(72,58,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className="mb-5 h-1.5 w-24 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${card.tone[0]} 0%, ${card.tone[1]} 100%)`,
                    }}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#26313d]">{card.title}</h3>
                      <p className="mt-2 text-sm text-[#7a8490]">{card.subtitle}</p>
                    </div>
                    <div className="rounded-2xl border border-[#dfe5ec] bg-[#f1f4f7] px-3 py-2 text-sm font-semibold text-[#506173] shadow-sm">
                      {card.value}
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-[#e9e0d4] bg-[#fcf8f2] p-3">
                      <div className="text-[#9ba5b0]">Gobierno</div>
                      <div className="mt-1 font-semibold text-[#3e4a57]">{card.governance}</div>
                    </div>
                    <div className="rounded-2xl border border-[#e9e0d4] bg-[#fcf8f2] p-3">
                      <div className="text-[#9ba5b0]">Próxima revisión</div>
                      <div className="mt-1 font-semibold text-[#3e4a57]">{card.nextReview}</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl border border-[#e8dfd3] bg-white px-4 py-3 text-xs uppercase tracking-[0.16em] text-[#8b96a2]">
                    Vista preparada para seguimiento directivo y validación ejecutiva
                  </div>
                </div>
              ))}
            </section>

            <section className="rounded-[36px] border border-white/82 bg-white/90 p-6 shadow-[0_20px_48px_rgba(72,58,42,0.06)] lg:p-8">
              <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#95836a]">Integraciones de negocio</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#26313d]">
                    Relación del ERP con otros sistemas
                  </h3>
                </div>
                <div className="rounded-full border border-[#e6dbc9] bg-[#faf6ef] px-4 py-2 text-sm font-medium text-[#8a785f]">
                  Vista sin gráficas · enfoque ejecutivo y operativo
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {externalSystems.map((item) => (
                  <div
                    key={item.title}
                    className="overflow-hidden rounded-[30px] border border-[#ece5da] bg-[#fcfaf7] shadow-[0_12px_30px_rgba(72,58,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(72,58,42,0.08)]"
                  >
                    <div className={`bg-gradient-to-r ${item.accent} p-5 text-white`}>
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-xl font-semibold leading-tight tracking-[-0.03em]">{item.title}</h4>
                        <span className="rounded-full border border-white/35 bg-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3 p-5">
                      {item.items.map((entry) => (
                        <div key={entry} className={`rounded-2xl border px-4 py-3 text-sm font-medium ${item.soft}`}>
                          {entry}
                        </div>
                      ))}
                      <div className="rounded-2xl border border-[#ece4d8] bg-white p-3">
                        <div className="text-xs uppercase tracking-[0.16em] text-[#9aa2ad]">Responsable</div>
                        <div className="mt-1 text-sm font-semibold text-[#3a4653]">{item.owner}</div>
                      </div>
                      <div className="rounded-2xl border border-[#ece4d8] bg-white p-3">
                        <div className="text-xs uppercase tracking-[0.16em] text-[#9aa2ad]">Frecuencia</div>
                        <div className="mt-1 text-sm font-semibold text-[#3a4653]">{item.sync}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[36px] border border-white/82 bg-white/90 p-6 shadow-[0_20px_48px_rgba(72,58,42,0.06)] lg:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#95836a]">Flujo propuesto</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#26313d]">
                  Cómo se usaría GED Diamantes dentro de Grupo Diamantes
                </h3>
                <div className="mt-6 space-y-4">
                  {processFlow.map((item) => (
                    <div
                      key={item.step}
                      className="relative flex gap-4 rounded-[30px] border border-[#ece4d8] bg-[linear-gradient(180deg,#fbf8f3_0%,#f7f2ea_100%)] p-5 transition hover:border-[#e2d5c4]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#d7c09e_0%,#a8865b_100%)] text-sm font-semibold text-white shadow-md">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#26313d]">{item.title}</h4>
                        <p className="mt-1 text-sm text-[#67717d] lg:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-white/82 bg-white/90 p-6 shadow-[0_20px_48px_rgba(72,58,42,0.06)] lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#95836a]">Ejemplos de registros</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#26313d]">
                      Casos activos en la demo
                    </h3>
                  </div>
                  <div className="rounded-full border border-[#e7dccb] bg-[#faf5ee] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b785d]">
                    Live sample
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {recentItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[30px] border border-[#ece4d8] bg-[#fcfaf7] p-5 shadow-[0_10px_24px_rgba(72,58,42,0.04)] transition duration-300 hover:shadow-[0_16px_34px_rgba(72,58,42,0.07)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[#9aa3ae]">{item.id}</p>
                          <h4 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-[#26313d]">{item.client}</h4>
                          <p className="mt-1 text-sm text-[#7d8894]">{item.phase}</p>
                        </div>
                        <span className="rounded-full border border-[#eadfce] bg-[#f6efe6] px-3 py-1 text-xs font-semibold text-[#7b6647]">
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-[#ece4d8] bg-white p-3">
                          <div className="text-[#99a2ac]">Tipo</div>
                          <div className="mt-1 font-semibold text-[#3b4652]">{item.type}</div>
                        </div>
                        <div className="rounded-2xl border border-[#ece4d8] bg-white p-3">
                          <div className="text-[#99a2ac]">Área</div>
                          <div className="mt-1 font-semibold text-[#3b4652]">{item.area}</div>
                        </div>
                        <div className="rounded-2xl border border-[#ece4d8] bg-white p-3">
                          <div className="text-[#99a2ac]">Prioridad</div>
                          <div className="mt-1 font-semibold text-[#3b4652]">{item.priority}</div>
                        </div>
                        <div className="rounded-2xl border border-[#ece4d8] bg-white p-3">
                          <div className="text-[#99a2ac]">Responsable</div>
                          <div className="mt-1 font-semibold text-[#3b4652]">{item.owner}</div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between rounded-2xl border border-[#ebe3d8] bg-white px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#9aa3ad]">
                        <span>Última actualización</span>
                        <span className="font-semibold text-[#6d7885]">{item.updated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
