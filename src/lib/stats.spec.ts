import { sort, sum, mean, median, mode } from './stats';

describe('stats', () => {
  describe('sort', () => {
    test('it sorts', () => {
      expect(sort([2, 3, 1])).toEqual([1, 2, 3]);
      expect(sort([10, 5, 4, 5, 8])).toEqual([4, 5, 5, 8, 10]);
    });
    test('handles an empty input', () => {
      expect(sort([])).toEqual([]);
      expect(sort()).toEqual([]);
    });
  });

  describe('sum', () => {
    test('it calculates the sum', () => {
      expect(sum([1, 2, 3])).toEqual(6);
    });
    test('handles an empty input', () => {
      expect(sum([])).toEqual(0);
      expect(sum()).toEqual(0);
    });
  });

  describe('mean', () => {
    test('it calculates the mean', () => {
      expect(mean([1, 2, 3, 4])).toEqual(2.5);
    });
    test('handles an empty input', () => {
      expect(mean([])).toBeNaN();
    });
  });

  describe('median', () => {
    test('it calculates the median of even arrays', () => {
      expect(median([1, 2, 3, 4])).toEqual(2.5);
      expect(median([1, 2, 6, 8])).toEqual(4);
      expect(median([3, 2, 6, 8])).toEqual(4.5);
    });
    test('it calculates the median of odd arrays', () => {
      expect(median([1, 2, 3, 4, 5])).toEqual(3);
      expect(median([1, 2, 3])).toEqual(2);
    });
    test('handles an empty input', () => {
      expect(median([])).toBeNaN();
    });
  });

  describe('mode', () => {
    test('it calculates a single mode', () => {
      expect(mode([2, 2, 6, 8])).toEqual([2]);
    });
    test('it calculates multiple modes', () => {
      expect(mode([3, 3, 4, 4, 5])).toEqual([3, 4]);
    });
    test('it returns the original array if no mode', () => {
      expect(mode([1, 2, 3])).toEqual([1, 2, 3]);
    });
    test('it handles an empty input', () => {
      expect(mode([])).toBeUndefined();
      expect(mode()).toBeUndefined();
    });
  });
});
