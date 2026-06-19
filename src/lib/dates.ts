export function formatDateOnly(date: string, locale = 'en-US') {
  const [year, month, day] = date.split('-').map(Number)
  const localDate = new Date(year, month - 1, day)

  return localDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
