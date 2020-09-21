const { fromFormat } = require("../JS/date_functions");
const { format } = require("../JS/date_functions");
const { add } = require("../JS/date_functions");
test("testing from format function", () => {
  const result = fromFormat("1/5/2009", "MMM/dd/y");
  expect(result).toBe(
    "Thu Feb 05 2009 00:00:00 GMT+0200 (Eastern European Standard Time)"
  );
});

test("testing format function test case 1", () => {
  const result = format(new Date(2020, 8, 9), "MM-DD/YYYY");
  expect(result).toBe("09-9/2020");
});

test("testing format function test case 2", () => {
  const result = format(new Date(2020, 8, 20), "MMM-D/YYYY");
  expect(result).toBe("Sep-20/2020");
});

test("testing format function test case 3", () => {
  const result = format(new Date("9/17/2020"), "MMMM-DD/YYYY");
  expect(result).toBe("September-17/2020");
});

test("testing add function test case 4", () => {
  const result = add(new Date(2020, 8, 17, 0), "20d");
  expect(result).toBe("10-7-2020 0");
});

test("testing add function test case 5", () => {
  const result = add(new Date(2020, 8, 18, 5), "5h");
  expect(result).toBe("9-18-2020 10");
});
test("testing add function test case 6", () => {
  const result = add(new Date(2020, 8, 18, 5), "5d");
  expect(result).toBe("9-23-2020 5");
});
test("testing add function test case 7", () => {
  const result = add(new Date(2020, 8, 18, 22), "5h");
  expect(result).toBe("9-19-2020 4");
});
test("testing format function test case 8", () => {
  const result = format(new Date(2020, 8, 17, 18), "MMMM-DD/YYYY H a");
  expect(result).toBe("September-17/2020 18 p");
});

test("testing format function test case 9", () => {
  const result = format(new Date(2020, 8, 17, 18), "MMMM-DD/YYYY H aa");
  expect(result).toBe("September-17/2020 18 pm");
});

test("testing format function test case 10", () => {
  const result = format(new Date(2020, 7, 20, 8), "MMMM-DD/YYYY H AA");
  expect(result).toBe("August-20/2020 8 AM");
});

test("testing format function test case 11", () => {
  const result = format(new Date(2020, 8, 20, 0), "MMMM-DD/YYYY HH");
  expect(result).toBe("September-20/2020 00");
});
