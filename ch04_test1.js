var url = require('url')

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('http://m.search.naver.com/serch.naver?qeury=steve+jops&where=m&sm=mtp_hty');
/*URL 객체를 주소 문자열로 만들기*/
var curStr = url.format(curURL)

console.log('주소 문자열' + curStr)
console.dir(curURL)

/*요청 파라미터 구분하기*/
var queryString = require('querystring')
var param = queryString.parse(curURL.query)

console.log('query : %s',param.query)
console.log('원본 요청 파라미터: %s',queryString.stringify(param))