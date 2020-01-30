const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));


//createHash(알고리즘) = 사용할 해시 알고리즘 넣어주기
//update(문자열 = 변환할 문자열 넣어주기
//digest(인코딩) = 인코딩할 알고리즘 넣어주기
//충돌 발생 = 가끔 nopqst라는 문자열이 qvew로 변환되어 abcdefgh를 넣었을 때와 똑같은 문자열로 바뀔 때도 있음
