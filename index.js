// let sum = 1
// console.log(1)

// let data = ["apple", "buah"]

// console.log(data[0])

// let dataObj =  {
//     name: 'rizal Rohamn',
//     bod: '27 ok'
// }
// console.log(dataObj.name)
// tampil semua
const obx = [
    {
    name: 'rizal Rohamn',
    bod: '27 ok'
    },
    {
        name: 'Abdul Dzalil',
        bod: '32'
    }
]
// pilih salah satu
console.log(obx)

const Oba = [
    {
    name: 'rizal Rohamn',
    bod: '27 ok'
    },
    {
        name: 'Abdul Dzalil',
        bod: '32'
    }
]

console.log(Oba[1].name)
// tambah
const obb = [
    {
    name: 'rizal Rohamn',
    bod: '27 ok'
    },
    {
        name: 'Abdul Dzalil',
        bod: '32'
    }
]

obb.push({name : 'zzzz', bod : 'aaa'})

console.log(obb)
// hapus
const obc = [
    {
    name: 'rizal Rohamn',
    bod: '27 ok'
    },
    {
        name: 'Abdul Dzalil',
        bod: '32'
    }
]

delete obc[1].bod
console.log(obc)
// ganti
const obd = [
    {
    name: 'rizal Rohamn',
    bod: '27 ok'
    },
    {
        name: 'Abdul Dzalil',
        bod: '32'
    }
]

obd[1].bod ="mhn"
console.log(obd)

