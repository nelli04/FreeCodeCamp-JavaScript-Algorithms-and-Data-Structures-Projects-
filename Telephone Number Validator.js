function telephoneCheck(str) {
  const x = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
  return x.test(str);
}

telephoneCheck("555-555-5555");