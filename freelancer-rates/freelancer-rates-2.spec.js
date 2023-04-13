import {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount
 } from "./freelancer-rates-2";



// 1.
// takes hourly rate as argument, multiplies it by 8 hours

// MY TEST
// describe("dayRate", () => {
//   test("calculates day rate", () => {
//     expect(dayRate(89)).toBe(712);
//     expect(dayRate(100)).toBe(800);
//     expect(dayRate(122)).toBe(976);
//   });
// });

// EXERCISM TEST with .toBeCloseTo and DECIMALS
const DIFFERENCE_PRECISION_IN_DIGITS = 6;
describe('day rate', () => {
  // ...

  test('at 31.40/hour', () => {
    const actual = dayRate(31.4);
    expect(actual).toBeCloseTo(251.2, DIFFERENCE_PRECISION_IN_DIGITS);
  });

  test('at 89.89/hour', () => {
    const actual = dayRate(89.89);
    expect(actual).toBeCloseTo(719.12, DIFFERENCE_PRECISION_IN_DIGITS);
  });

  test('at 97.654321/hour', () => {
    const actual = dayRate(97.654321);
    expect(actual).toBeCloseTo(781.234568, DIFFERENCE_PRECISION_IN_DIGITS);
  });
});



// 2.
// arguments: total fixed budget, hourly rate

// MY TEST
describe("daysInBudget", () => {
  test("calculates number of days, rounded down", () => {
    expect(daysInBudget(20000, 89)).toBe(28);
    expect(daysInBudget(17589, 96)).toBe(22);
  });
});

// EXERCISM TEST with .toBeCloseTo and more DETAILED DESCRIPTION
// describe('days in budget', () => {
//   describe('with a budget of 1280', () => {
//     test('at 16/hour', () => {
//       const actual = daysInBudget(1280, 16);
//       const expected = 10;

//       expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
//     });

//     test('at 25/hour', () => {
//       const actual = daysInBudget(1280, 25);
//       const expected = 6;

//       expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
//     });

//     describe('with a budget of 835', () => {
//       test('at 12/hour', () => {
//         const actual = daysInBudget(835, 12);
//         const expected = 8;

//         expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
//       });
//     });
//   });
// });



// 3.
// arguments: hourly rate, number of project days, monthly discount rate

// number of project days / 22 -> round down = months
// number of project days % 22 = remaining days
// ((((hourly rate * 8) * 22) * months) * (1 - discount rate)
// + (remaining days * (hourly rate * 8))
// = -> rounded up

// MY TEST
// describe("priceWithMonthlyDiscount", () => {
//   test("calculate total price with monthly discount, rounded up", () => {
//     expect(priceWithMonthlyDiscount(89, 230, 0.42)).toBe(97972);
//     // expect(priceWithMonthlyDiscount()).toBe();
//   });
// });

// EXERCISM TEST: more SEGMENTED, better DESCRIPTION
describe('cost with monthly discount', () => {
  describe('at 16/hour', () => {
    test('for 70 days', () => {
      const actual = priceWithMonthlyDiscount(16, 70, 0);
      const expected = 8960;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    test('for 130 days with 15% discount', () => {
      const actual = priceWithMonthlyDiscount(16, 130, 0.15);
      const expected = 14528;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });
  describe('at 29.654321/hour', () => {
    test('for 220 days with 11.2%', () => {
      const actual = priceWithMonthlyDiscount(29.654321, 220, 0.112);
      const expected = 46347;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    test('for 155 days with 25.47% discount', () => {
      const actual = priceWithMonthlyDiscount(29.654321, 155, 0.2547);
      const expected = 27467;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });
});


// * .toBeCloseTo

// * Intuitive equality comparisons often fail, because arithmetic on decimal (base 10) values often have rounding errors in limited precision binary (base 2) representation. For example, this test fails:

// test('adding works sanely with decimals', () => {
//   expect(0.2 + 0.1).toBe(0.3); // ! Fails!
// });

// * It fails because in JavaScript, 0.2 + 0.1 is actually 0.30000000000000004.

// * For example, this test passes with a precision of 5 digits:

// test('adding works sanely with decimals', () => {
//   expect(0.2 + 0.1).toBeCloseTo(0.3, 5)s;
// });
