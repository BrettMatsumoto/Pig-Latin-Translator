const vowelExample = 'Eat';
const consonantExample = 'Happy';

function toPigLatin(str) {
  let prep = str.toLowerCase();
  let firstChar = prep.charAt(0);

  if (firstChar === 'a' || 'e' || 'i' || 'o' || 'u') {
    let result = prep + '-ay';
    return prep + '-ay';
  }
  if (firstchar !== 'a' || 'e' || 'i' || 'o' || 'u' || 'y') {
    for (let i = 0; i < prep.length; i++) {
      if (prep[i] !== 'a' || 'e' || 'i' || 'o' || 'u'){
        prep.splice(0, i)
        console.log(prep.splice(0, i))
      }
    }
  }
}
console.log(toPigLatin(vowelExample));
console.log(toPigLatin(consonantExample));
