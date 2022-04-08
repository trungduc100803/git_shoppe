var a = [
    {
        name: 'le huong',
        age: 19,
        adrress: 'ha noi'
    },
    {
        name: 'trung duc',
        age: 19,
        adrress: 'ha noi'
    },
    {
        name: 'kien pham',
        age: 20,
        adrress: 'binh duong'
    },
    {
        name: 'bui duc',
        age: 21,
        adrress: 'bac ninh'
    }
]


var b = a.reduce(function(accumulator, currentValue, index, currentArray) {

    return accumulator + currentValue.age


},0)


console.log(b)