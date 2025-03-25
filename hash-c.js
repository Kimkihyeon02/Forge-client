let message = 'hello world'
document.write('Message: ', message, '<br>')

let md1 = forge.md.md5.create()
md1.update(message)
let result1 = md1.digest().toHex()
document.write('Md5 hash: ', result1, '<br>')

let md2 = forge.md.sha1.create()
md2.update(message)
let result2 = md2.digest().toHex()
document.write('SHA1 hash: ', result2, '<br>')

let md3 = forge.md.sha256.create()
md3.update(message)
let result3 = md3.digest().toHex()
document.write('SHA256 hash: ', result3, '<br>')

let md4 = forge.md.sha384.create()
md4.update(message)
let result4 = md4.digest().toHex()
document.write('SHA384 hash: ', result4, '<br>')

let md5 = forge.md.sha512.create()
md5.update(message)
let result5 = md5.digest().toHex()
document.write('SHA512 hash: ', result5, '<br>')
