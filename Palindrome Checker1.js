function palindrome(str) {
    const x = str.toLowerCase().match(/[a-z0-9]/g)
    return x.join('') === x.reverse().join('');
  }
  
  palindrome("eye");