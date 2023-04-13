import {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes
} from './lasagna-2'

// 1. Define the expected oven time in minutes
describe('EXPECTED_MINUTES_IN_OVEN', () => {
  test('constant shows total minutes in oven as number', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
  });
});

// 2. Calculate the remaining oven time in minutes
describe('remainingMinutesInOven', () => {
  test('calculates how many minutes the lasagna still has to remain in the oven', () => {
    expect(remainingMinutesInOven(10)).toBe(30);
    expect(remainingMinutesInOven(25)).toBe(15);
    expect(remainingMinutesInOven(39)).toBe(1);
  });

  test('works correctly for the edge cases', () => {
    expect(remainingMinutesInOven(0)).toBe(40);
    expect(remainingMinutesInOven(40)).toBe(0);
  });
});

// 3. Calculate the preparation time in minutes
describe('preparationTimeInMinutes', () => {
  test('calculates preparation time in minutes according to number of layers added', () => {
    expect(preparationTimeInMinutes(3)).toBe(6);
    expect(preparationTimeInMinutes(5)).toBe(10);
    expect(preparationTimeInMinutes(1)).toBe(2);
  });

  test('works correctly for the edge cases', () => {
    expect(preparationTimeInMinutes(0)).toBe(0);
  });
})


// 4. Calculate the total working time in minutes
describe("totalTimeInMinutes", () => {
  test("calculates total time spent on lasagna", () => {
    expect(totalTimeInMinutes(1, 10)).toBe(12);
    expect(totalTimeInMinutes(3, 15)).toBe(21);
    expect(totalTimeInMinutes(5, 30)).toBe(40)
  });

  test('works correctly for the edge cases', () => {
    expect(totalTimeInMinutes(0, 0)).toBe(0);
    expect(totalTimeInMinutes(0, 30)).toBe(0);
    expect(totalTimeInMinutes(5, 0)).toBe(10);
  });
})
