// Assignment code here
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const btn = document.getElementById('generate')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

btn.addEventListener('submit', e => {
  e.preventDefault()
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  var chareCodes = LOWERCASE_CHAR-CODES
  if (includeUppercase) charCodes = charCodes.concat
  UPPERCASE_CHAR_CODES
  if (includesSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includesNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * 
    CharacterAmount)]
    passwordCharacters.push(string.fromCharcode(charCodes))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (var i = low; i <= hight; i++) {    
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e){
  const value = e.target.value
  const password = generatePassword(characterAmount, includedUppercase, includeNumbers, includeSymbols)
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
