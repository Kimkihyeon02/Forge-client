// 송신자
let key = 'secretkey111'
let message = '비밀메시지111'
document.writeln('송신자 메시지: ', message, '</br>')
document.writeln('송신자 키: ', key, '</br>')

let hmac1 = forge.hmac.create()
hmac1.start('sha256', key)
hmac1.update(message)
let result1 = hmac1.digest().toHex()
document.writeln('송신자 HMAC-SHA1: ', result1, '</br>')

// 공격자 : 변조, 도청

// 수신자
let message2 = message
let key2 = key
let hmac2 = forge.hmac.create()
hmac2.start('sha256', key2)
hmac2.update(message2)
let result2 = hmac2.digest().toHex()
document.writeln('수신자 HMAC-SHA1: ', result2, '</br>')

if (result1 === result2) document.writeln('메시지 검증 성공', '</br>')
else document.writeln('메시지 에러', '</br>')
