var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22},{name: '티아라', age: 23}]

console.log('배열 요소의 수 :%d',Users.length)

Users.forEach(function(item, index) {
    console.log('배열 여소 #' + index + " : %s", item.name)
})

var user = Users.splice(0,1)

console.dir(user)
console.dir(Users)
