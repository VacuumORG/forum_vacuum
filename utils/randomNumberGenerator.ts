export function randomNumberGenerator(digits: number): number {
  if (digits == 0) {
    return digits
  }

  const min = Number('1' + '0'.repeat(digits - 1))
  const max = Number('9'.repeat(digits))

  return Math.floor(Math.random() * (max - min + 1)) + min
}
