/** Sem `VITE_ENABLE_LAUNCH_SCREEN=false`, a tela de lançamento pode aparecer (se a data ainda não passou). */
export const ENABLE_LAUNCH_SCREEN =
  import.meta.env.VITE_ENABLE_LAUNCH_SCREEN !== 'false';

const DEFAULT_LAUNCH_MS = new Date(2026, 3, 20, 13, 0, 0).getTime();

function parseLaunchAtMs() {
  const raw = import.meta.env.VITE_LAUNCH_AT?.trim();
  if (!raw) return DEFAULT_LAUNCH_MS;
  const t = new Date(raw).getTime();
  return Number.isFinite(t) ? t : DEFAULT_LAUNCH_MS;
}

/** Instantâneo do lançamento (ms). `VITE_LAUNCH_AT` em ISO local, ex.: 2026-04-20T13:00:00 (13h no fuso do visitante). */
export const LAUNCH_AT_MS = parseLaunchAtMs();

const WEEKDAYS_PT = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];
const MONTHS_PT = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

function pad2(n) {
  return String(n).padStart(2, '0');
}

/** Textos da tela de lançamento alinhados à data configurada. */
export function getLaunchDisplay(ms = LAUNCH_AT_MS) {
  const d = new Date(ms);
  const dateLine = `${WEEKDAYS_PT[d.getDay()]} · ${d.getDate()} de ${MONTHS_PT[d.getMonth()]}`;
  const hourLabel = `${d.getHours()}h`;
  const dateTimeAttr = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}T${pad2(d.getHours())}:${pad2(d.getMinutes())}:00`;
  return { dateLine, hourLabel, dateTimeAttr };
}
