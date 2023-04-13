import { hello } from './hello-world'

describe("Hello World", () => {
  test("Say Hello World", () => {
    expect(hello()).toBe("Hello, World!")
  })
})
