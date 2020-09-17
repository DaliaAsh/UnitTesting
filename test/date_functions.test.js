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
  const result = format(new Date(), "MM-DD/YYYY");
  let curr_date = new Date();
  expect(result).toBe("09-17/2020");
});

test("testing format function test case 2", () => {
  const result = format(new Date(), "MMM-D/YYYY");
  expect(result).toBe("Sep-17/2020");
});

test("testing format function test case 3", () => {
  const result = format(new Date(), "MMMM-DD/YYYY");
  expect(result).toBe("September-17/2020");
});

test("testing add function test case 4", () => {
  const result = add(new Date(), "20d");
  expect(result).toBe("10-7-2020 18");
});

test("testing add function test case 5", () => {
  const result = add(new Date(), "20h");
  expect(result).toBe("9-18-2020 18");
});

test("testing format function test case 6", () => {
  const result = format(new Date(), "MMMM-DD/YYYY H a");
  console.log(result);
  expect(result).toBe("September-17/2020 18 p");
});

test("testing format function test case 7", () => {
  const result = format(new Date(), "MMMM-DD/YYYY H aa");
  console.log(result);
  expect(result).toBe("September-17/2020 18 pm");
});
test("testing format function test case 7", () => {
  const result = format(new Date(), "MMMM-DD/YYYY H AA");
  console.log(result);
  expect(result).toBe("September-17/2020 18 PM");
});
test("testing format function test case 7", () => {
  const result = format(new Date(), "MMMM-DD/YYYY HH");
  console.log(result);
  expect(result).toBe("September-17/2020 18");
});