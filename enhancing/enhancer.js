module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20) {
  } else {
    item.enhancement = item.enhancement + 1
  }
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15 && item.durability < 5) {
    item.durability = 0
  } else if (item.enhancement < 15) {
    item.durability = item.durability - 5
  } else if(item.enhancement === 15 || item.enhancement === 16) {
    item.durability = item.durability - 10
  } else if(item.enhancement > 16) {
    item.enhancement = item.enhancement - 1
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}


function get(item) {
  return { ...item };
}
