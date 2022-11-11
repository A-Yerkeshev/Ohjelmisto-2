"use strict";

const output = document.getElementById('output');

const cnum = Number(prompt('Input number of candidates:'));
const candidates = [];

for (let i=1; i<=cnum; i++) {
  const name = prompt('Name for candidate ' + i);
  candidates.push({
    name,
    votes: 0
  })
}

const vnum = Number(prompt('Input number of voters:'));

for (let i=0; i<vnum; i++) {
  const vote = prompt('Which candidate you vote for?');
  const candidate = candidates.find((cand) => {
    return cand.name === vote;
  })
  if (candidate) {candidate.votes++}
}

candidates.sort((c1, c2) => {
  return c2.votes - c1.votes;
});

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log('results:');
candidates.forEach((cand) => {
  console.log(cand.name + ': ' + cand.votes + ' votes');
});