export const sort = (numbers: number[] | string[] = []): number[] =>
  numbers.map((n) => Number(n)).sort((a, b) => a - b);

export const sum = (numbers: number[] = []): number =>
  numbers.reduce<number>((accumulator, n) => accumulator + n, 0);

export const mean = (numbers: number[] = []): number =>
  sum(numbers) / numbers.length;

export const median = (numbers: number[] = []): number => {
  const sorted = sort(numbers);
  const { length } = sorted;
  const midpoint = length / 2;
  return length % 2 === 0
    ? mean([sorted[midpoint - 1], sorted[midpoint]])
    : sorted[Math.floor(midpoint)];
};

export const mode = (numbers: number[] = []): number | number[] | undefined => {
  const occurences = numbers.reduce<{ [key: string]: number }>(
    (accumulator, n) => {
      const current = accumulator[n] ?? 0;
      return { ...accumulator, [n]: current + 1 };
    },
    {},
  );
  const mapped = Object.keys(occurences).map((key) => ({
    key,
    count: occurences[key],
  }));
  const sorted = mapped.sort((a, b) => a.count - b.count);
  const grouped = sorted.reduce<{ [key: string]: number[] }>(
    (accumulator, obj) => {
      const current = accumulator[obj.count] ?? [];
      return { ...accumulator, [obj.count]: [...current, Number(obj.key)] };
    },
    {},
  );
  const solution = grouped[sort(Object.keys(grouped)).pop() ?? ''];
  return solution?.length === 1 ? solution[0] : solution;
};
