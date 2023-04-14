import {
  frontDoorResponse,
  frontDoorPassword,
  backDoorResponse,
  backDoorPassword
} from './door-policy-2'


// 1.
// HINT FROM EXERCISM TEST:
// define correct array of first letters
// define poem-array of lines
// pass poem-array into // * helper function 'recite' that passes each line into the function to be tested with .map
// check if resulting .map array (= lines passed through function to be tested) match the defined expected array of first letters

const recite = (testPoem, testedFunction) => {
  return testPoem.map((line) => testedFunction(line))
}

describe("frontDoorResponse", () => {
  test("pulls the first letter from each line of the poem", () => {
    const poem = [
      "Stands so high",
      "Huge hooves too",
      "Impatiently waits for",
      "Reins and harness",
      "Eager to leave"
    ]

    const correctLetters = ["S", "H", "I", "R", "E"]
    expect(recite(poem, frontDoorResponse)).toStrictEqual(correctLetters)
  })

  // same test with 2 other testPoems
})


// 2.
// upcase the first letter, downcase all subsequent letters

describe("frontDoorPassword", () => {
  test("correctly capitalizes all-uppercase word", () => {
    expect(frontDoorPassword("BERLIN")).toStrictEqual("Berlin");
  });
  test("correctly capitalizes all-lowercase word", () => {
    expect(frontDoorPassword("berlin")).toStrictEqual("Berlin");
  });
  test("correctly capitalizes already correctly capitalized word", () => {
    expect(frontDoorPassword("Berlin")).toStrictEqual("Berlin");
  });
});


// 3.

// MY TEST
describe("backDoorResponse", () => {
  test("returns last letter of a word that is not whitespace", () => {
    const sentences = [
      "Test sentence",
      "Test sentence ",
      "Test sentence     "
    ]

    const correctLetters = ["e", "e", "e"]
    expect(recite(sentences, backDoorResponse)).toStrictEqual(correctLetters)
  })
})

// EXERCICSM TEST --> More on WHITESPACES
// describe('back door response', () => {
//   test('should take the last letter character of each line of CODE_WORK', () => {
//     // Code Work, by Derk-Jan Karrenbeld
//     const CODE_WORK = [
//       'Compilers intensily bestow',
//       'On commencing without ego',
//       'Different processes ajar',
//       'Exit with zero quick',
//     ];

//     const actualLetters = recite(CODE_WORK, backDoorResponse);
//     const expectedLetters = ['w', 'o', 'r', 'k'];
//     expect(actualLetters).toStrictEqual(expectedLetters);
//   });

//   test('should ignore whitespace when taking the last letter character of each line of SHIRE_HORSE_WITH_SPACES', () => {
//     // Shire Horse, by Michael Lockwood
//     // with trailing whitespace
//     const SHIRE_HORSE_WITH_SPACES = [
//       'Stands so high   ',
//       '\tHuge hooves too\t',
//       'Impatiently waits for \t \t',
//       '    Reins and harness    ',
//       'Eager to leave\n\n',
//     ];

//     const actualLetters = recite(SHIRE_HORSE_WITH_SPACES, backDoorResponse);
//     const expectedLetters = ['h', 'o', 'r', 's', 'e'];
//     expect(actualLetters).toStrictEqual(expectedLetters);
//   });
// });



// 4.

describe("backDoorPassword", () => {
  describe(`correctly capitalizes the word and adds ', please'`, () => {
    test("all-uppercase word", () => {
      expect(backDoorPassword("BERLIN")).toStrictEqual("Berlin, please");
    });
    test("all-lowercase word", () => {
      expect(backDoorPassword("berlin")).toStrictEqual("Berlin, please");
    });
    test("already correctly capitalized word", () => {
      expect(backDoorPassword("Berlin")).toStrictEqual("Berlin, please");
    });
  })
});
