const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i++) {
  rows.push(character.repeat(i + 1)); // Correct usage of .repeat()
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
