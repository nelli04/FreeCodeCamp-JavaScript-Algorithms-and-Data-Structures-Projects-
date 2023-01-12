function rot13(str) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').map(x => {
      const y = abc.indexOf(x)
      return y >= 0 ? abc[(y + 13) % 26] : x
    }).join('')
  }
  
  
  rot13("SERR PBQR PNZC");