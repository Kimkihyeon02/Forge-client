let salt
let numIterations = 10000
let password = 'ghfjkhksjdfhgs'
let keySize = 32

// 동기식 키생성 - 송신자
salt = forge.random.getBytesSync(16)
let derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize)
document.writeln('Password: ', password, '</br>')
document.writeln('Salt: ', forge.util.bytesToHex(salt), '</br>')
document.writeln('Iterations: ', numIterations, '</br>')
document.writeln(
  'Derived key(송신자): ',
  forge.util.bytesToHex(derivedKey),
  '</br>'
)

// 송신자->수신자 : salt, numIterations

// 수신자
derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize)
document.writeln(
  'Derived key(수신자): ',
  forge.util.bytesToHex(derivedKey),
  '</br>'
)

// 비동기식 키생성
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) document.writeln(err, '</br>')
    else
      document.writeln(
        'Derived key (async): ',
        forge.util.bytesToHex(derivedKey),
        '</br>'
      )
  }
)
