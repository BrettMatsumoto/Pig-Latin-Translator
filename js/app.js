const vowelExample = 'Eat';
const consonantExample = 'Happy';
const notAString = 17;
const itsAnArray = ['eat'];
const whatAnObject = { key: 'Happy' };

function toPigLatin(str) {
  if (typeof str !== 'string') {
    return 'not a string';
  } else if (
    str.charAt(0) === 'a' ||
    str.charAt(0) === 'e' ||
    str.charAt(0) === 'i' ||
    str.charAt(0) === 'o' ||
    str.charAt(0) === 'u'
  ) {
    let prep = str.toLowerCase();
    let result = prep + '-ay';

    return result;
  } else {
    let prep = str.toLowerCase();

    for (let i = 1; i !== 'a' || i !== 'e' || i !== 'i' || i !== 'o' || i !== 'u' || i !== 'y'; i++) {
      let appended = '-' + prep.slice(0, i) + 'ay';
      let notAppended = prep.substring(i, prep.length);

      return notAppended + appended;
    }
  }
}

function fromPigLatin(str) {
  if (typeof str !== 'string') {
    return 'not a string';
  }
  const charArr = [...str];
  let hyphen = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (['-'].includes(charArr[i])) {
      hyphen = 1;
    }
  }
  if (!hyphen) {
    return 'not Pig-Latin';
  }

  const startIndex = str.lastIndexOf('-') + 1;
  const endIndex = str.lastIndexOf('a');
  const startEng = str.substr(startIndex, endIndex - startIndex);
  const endEng = str.substr(0, startIndex - 1);
  const english = startEng + endEng;

  return english;
}
