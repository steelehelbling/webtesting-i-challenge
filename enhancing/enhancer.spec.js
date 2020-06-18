const enhancer = require("./enhancer.js");

it("returns a new item and resets it to 100", () => {
  expect(
    enhancer.repair({
      name: "ring",
      enhancement: 10,
      durability: 20,
    })
  ).toEqual({
    name: "ring",
    enhancement: 10,
    durability: 100,
  });
});

it("returns new item with enhancement value + 1", () => {
  expect(
    enhancer.succeed({
      name: "axe",
      enhancement: 15,
      durability: 50,
    })
  ).toEqual({
    name: "axe",
    enhancement: 16,
    durability: 50,
  });
});

it("returns new item with same enhancement value", () => {
  expect(
    enhancer.succeed({
      name: "axe",
      enhancement: 20,
      durability: 50,
    })
  ).toEqual({
    name: "axe",
    enhancement: 20,
    durability: 50,
  });
});

it("returns a new item with durability decreased by 5", () => {
  expect(
    enhancer.fail({
      name: "halbert",
      enhancement: 14,
      durability: 70,
    })
  ).toEqual({
    name: "halbert",
    enhancement: 14,
    durability: 65,
  });
});

it("avoid negative number", () => {
  expect(
    enhancer.fail({
      name: "halbert",
      enhancement: 14,
      durability: 4,
    })
  ).toEqual({
    name: "halbert",
    enhancement: 14,
    durability: 0,
  });
});

it("returns a fail enhancement with durability incressed by 10", () => {
  expect(
    enhancer.fail({
      name: "halbert",
      enhancement: 15,
      durability: 70,
    })
  ).toEqual({
    name: "halbert",
    enhancement: 15,
    durability: 60,
  });
});

it("returns a fail enhancement with durability enhancement -1", () => {
  expect(
    enhancer.fail({
      name: "halbert",
      enhancement: 17,
      durability: 70,
    })
  ).toEqual({
    name: "halbert",
    enhancement: 16,
    durability: 70,
  });
});
