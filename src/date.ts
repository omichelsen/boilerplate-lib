export const addMinutes = (minutes: number, now = Date.now()) =>
  now + minutes * 60 * 1000

export const addHours = (hours: number, now = Date.now()) =>
  now + hours * 60 * 60 * 1000
