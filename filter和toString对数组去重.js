let list = [1, 2, 3, 4, 5, 56, 6, 6, 7, 4, 65, 6, 6]
let arr1 = list.filter((item, index, arr) => {
    return arr.indexOf(item) === index
})
console.log(arr1)

let list1=[[[[[[[1,2,[22,4,[5]]]]]]]]]

//展开元素为字符的
let listString=list1.toString().split(',')
//展开元素为数字的，需要转换
let listNumber=list1.toString().split(',').map(i=>i=Number(i))
//缺点不能转化混合类型，
console.log(listNumber)