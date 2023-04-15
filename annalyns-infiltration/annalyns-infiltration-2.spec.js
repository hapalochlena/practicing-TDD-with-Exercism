// knight, archer, prisoner
// awake, sleeping
// dog

import {
  canExecuteFastAttack,
  canSpy,
  canFreePrisoner
} from './annalyns-infiltration'

// 1.
describe("canExecuteFastAttack", () => {
  test("returns false if knight is awake", () => {
    expect(canExecuteFastAttack(true)).toBeFalsy()
  });
  test("returns true if knight is not awake", () => {
    expect(canExecuteFastAttack(false)).toBeTruthy()
  })
})

// 2.

// MY TEST
describe("canSpy", () => {
  describe("returns true if one of them is awake", () => {
    test("knight is awake", () => {
      expect(canSpy(true, false, false)).toBeTruthy()
    });
    test("archer is awake", () => {
      expect(canSpy(false, true, false)).toBeTruthy()
    });
    test("prisoner is awake", () => {
      expect(canSpy(false, false, true)).toBeTruthy()
    });
  });
  describe("returns true if two of them are awake", () => {
    test("knight and archer are awake", () => {
      expect(canSpy(true, true, false)).toBeTruthy()
    });
    test("knight and prisoner are awake", () => {
      expect(canSpy(true, false, true)).toBeTruthy()
    });
    test("archer and prisoner are awake", () => {
      expect(canSpy(false, true, true)).toBeTruthy()
    });
  });
  test("returns true if three of them are awake", () => {
    expect(canSpy(true, true, true)).toBeTruthy()
  });
  test("returns false if no one is awake", () => {
    expect(canSpy(false, false, false)).toBeFalsy()
  });
})

// EXERCISM TEST
// * SETUP THAT YOU CAN JUST COPY-PASTE --> easier for checking a lot of TRUE/FALSE CONDITIONS
// describe('can spy', () => {
  //   test('when everyone is asleep', () => {
  //     const knightIsAwake = false;
  //     const archerIsAwake = false;
  //     const prisonerIsAwake = false;
  //     const expected = false;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });

  //   test('when only the prisoner is awake', () => {
  //     const knightIsAwake = false;
  //     const archerIsAwake = false;
  //     const prisonerIsAwake = true;
  //     const expected = true;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });

  //   test('when only the archer is awake', () => {
  //     const knightIsAwake = false;
  //     const archerIsAwake = true;
  //     const prisonerIsAwake = false;
  //     const expected = true;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });

  //   test('when only the knight is asleep', () => {
  //     const knightIsAwake = false;
  //     const archerIsAwake = true;
  //     const prisonerIsAwake = true;
  //     const expected = true;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });

  //   test('when only the knight is awake', () => {
  //     const knightIsAwake = true;
  //     const archerIsAwake = false;
  //     const prisonerIsAwake = false;
  //     const expected = true;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });

  //   test('when only the archer is asleep', () => {
  //     const knightIsAwake = true;
  //     const archerIsAwake = false;
  //     const prisonerIsAwake = true;
  //     const expected = true;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });

  //   test('when everyone is awake', () => {
  //     const knightIsAwake = true;
  //     const archerIsAwake = true;
  //     const prisonerIsAwake = true;
  //     const expected = true;

  //     expect(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)).toBe(
  //       expected
  //     );
  //   });
  // });

// 4.
describe("canFreePrisoner", () => {
  describe("return true for all cases where the dog is present and archer is sleeping", () => {
    test("knight awake, prisoner awake", () => {
      expect(canFreePrisoner(true, true, false, true)).toBeTruthy()
    });
    test("knight awake, prisoner sleeping", () => {
      expect(canFreePrisoner(true, true, false, false)).toBeTruthy()
    });
    test("knight sleeping, prisoner awake", () => {
      expect(canFreePrisoner(true, false, false, true)).toBeTruthy()
    });
    test("knight sleeping, prisoner sleeping", () => {
      expect(canFreePrisoner(true, false, false, false)).toBeTruthy()
    });
  });
  test("returns true if dog is not present, knight and archer are sleeping, prisoner is awake", () => {
    expect(canFreePrisoner(false, false, false, true)).toBeTruthy()
  });
  describe("return false for all other cases", () => {
    describe("dog present, but archer awake", () => {
      test("knight awake, prisoner awake", () => {
        expect(canFreePrisoner(true, true, true, true)).toBeFalsy()
      });
      test("knight awake, prisoner sleeping", () => {
        expect(canFreePrisoner(true, true, true, false)).toBeFalsy()
      });
      test("knight sleeping, prisoner awake", () => {
        expect(canFreePrisoner(true, false, true, true)).toBeFalsy()
      });
      test("knight sleeping, prisoner sleeping", () => {
        expect(canFreePrisoner(true, false, true, false)).toBeFalsy()
      })
    });
    describe("dog not present", () => {
      describe("knight awake", () => {
        test("archer awake, prisoner awake", () => {
          expect(canFreePrisoner(false, true, true, true)).toBeFalsy()
        });
        test("archer awake, prisoner sleeping", () => {
          expect(canFreePrisoner(false, true, true, false)).toBeFalsy()
        });
        test("archer sleeping, prisoner awake", () => {
          expect(canFreePrisoner(false, true, false, true)).toBeFalsy()
        });
        test("archer sleeping, prisoner sleeping", () => {
          expect(canFreePrisoner(false, true, false, false)).toBeFalsy()
        });
      });
      describe("archer awake", () => {
        test("knight awake, prisoner awake", () => {
          expect(canFreePrisoner(false, true, true, true)).toBeFalsy()
        });
        test("knight awake, prisoner sleeping", () => {
          expect(canFreePrisoner(false, true, true, false)).toBeFalsy()
        });
        test("knight sleeping, prisoner awake", () => {
          expect(canFreePrisoner(false, false, true, true)).toBeFalsy()
        });
        test("knight sleeping, prisoner sleeping", () => {
          expect(canFreePrisoner(false, false, true, false)).toBeFalsy()
        });
      });
      describe("prisoner sleeping", () => {
        test("knight awake, archer awake", () => {
          expect(canFreePrisoner(false, true, true, false)).toBeFalsy()
        });
        test("knight awake, archer sleeping", () => {
          expect(canFreePrisoner(false, true, false, false)).toBeFalsy()
        });
        test("knight sleeping, archer awake", () => {
          expect(canFreePrisoner(false, false, true, false)).toBeFalsy()
        });
        test("knight sleeping, archer sleeping", () => {
          expect(canFreePrisoner(false, false, false, false)).toBeFalsy()
        });
      });
    });
  })
})
