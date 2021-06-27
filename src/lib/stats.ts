const sum = (numbers: number[] = []): number =>
  numbers.reduce<number>((accumulator, n) => accumulator + n, 0);

export const mean = (numbers: number[] = []): number =>
  sum(numbers) / numbers.length;

export const median = (numbers: number[] = []): number => {
  const sorted = numbers.sort((a, b) => a - b);
  const midpoint = sorted.length / 2;
  // If odd, find middle number. If even, find average of two middle numbers.
  return midpoint % 1
    ? sorted[Math.floor(midpoint)]
    : (sorted[midpoint] + sorted[midpoint - 1]) / 2;
};

export const mode = (numbers: number[] = []): number => {
  const frequencies = numbers.reduce<{ [n: string]: number }>(
    (accumulator, n) => {
      const current = accumulator[n] ?? 0;
      accumulator[n] = current + 1;
      return accumulator;
    },
    {},
  );
  const sorted = Object.keys(frequencies)
    .map((key) => ({
      key,
      count: frequencies[key],
    }))
    .sort((a, b) => a.count - b.count);
  return Number(sorted.pop()?.key);
};
