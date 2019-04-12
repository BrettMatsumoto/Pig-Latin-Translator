const vowelExample = 'Eat';
const consonantExample = 'Happy';

function toPigLatin(str) {
  let prep = str.toLowerCase();
  let firstChar = prep.charAt(0);

  if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
    let result = prep + '-ay';

    return result;
  } else {
    for (let i = 1; i !== 'a' || i !== 'e' || i !== 'i' || i !== 'o' || i !== 'u' || i !== 'y'; i++) {
      let appended = '-' + prep.slice(0, i) + 'ay';
      let notAppended = prep.substring(i, prep.length);

      return notAppended + appended;
    }
  }
}

console.log(toPigLatin(vowelExample));
console.log(toPigLatin(consonantExample));
