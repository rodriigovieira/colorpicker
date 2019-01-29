// Initializing Variables
let codes = [1, 2, 3, 4, 5, 6];
let boxStyles = [];
let result = [];

// Randomizing array order to create random squares' sequence
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate random RGB color with CSS syntax
const generateColor = () => {
  return `RGB(${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)}, ${(Math.random() * 256).toFixed(0)})`
}

// Decide which squares' colors to display
const colorChooser = (win = false, color = 'black') => {
    shuffleArray(codes);
    if (win) {
      result = [];
      codes.forEach(value => {
        result.push({
          color,
          code: value,
        })
      })

      boxStyles = []
      result.forEach(value => boxStyles.push({
        height: 175,
        width: 175,
        borderRadius: 15,
        backgroundColor: value.color,
        display: 'inline-flex',
        margin: 10,
      }))
    } else {
      codes.forEach(value => {
        if (value === 1) {
          result.push({
            color,
            code: value,
          })
        } else {
          result.push({
            color: generateColor(),
            code: value,
          })
        }
      })
      
      boxStyles = []
      result.forEach(value => boxStyles.push({
        height: 175,
        width: 175,
        borderRadius: 15,
        backgroundColor: value.color,
        display: 'inline-flex',
        margin: 10,
      }))
    }
  };

export { colorChooser, boxStyles, result };
