var num = 12345631312
var numArr = num.toString().split('').reverse()
console.log('numArr：',numArr)
// 方案1 start
var newNum = [numArr[0]]
for (var i = 1; i < numArr.length; i++) {
    newNum.push((i % 3 == 0) ? numArr[i] + ',' : numArr[i] )
}
// console.log('方案1newNum：',newNum)
console.log('方案1最终结果：',newNum.reverse().join(''))
// 方案1 end

// 方案2 start
var  newNum2 = []
for (var i = 0; i < numArr.length; i++) {
    if (i % 3 == 0) {
        newNum2.push(',')
    }
    newNum2.push(numArr[i])
}
newNum2.shift()
// console.log('方案2newNum2：',newNum2)
console.log('方案2最终结果：',newNum2.reverse().join(''))
// 方案2 end

// 方案1优于方案2