const checkCollectionType = (collection) => {
    return Object.values(collection)
}

const myEach = (collection, callback) => {
    const arrCollection = checkCollectionType(collection)
    for(let i = 0; i < arrCollection.length; i++) { callback(arrCollection[i]) }
    return collection
}

const myMap = (collection, callback) => {
    const arrCollection = checkCollectionType(collection)
    const newArr = []
    for (let i = 0; i < arrCollection.length; i++) {
        const j = callback(arrCollection[i])
        newArr.push(j)
    }
    return newArr
}

const myReduce = (collection, callback, acc) => {
    let arrCollection = checkCollectionType(collection)
    if (!acc) { 
        acc = arrCollection[0]
        arrCollection = arrCollection.slice(1)
    }
    const length = arrCollection.length
    for (let i = 0; i < length; i++) {
        acc = callback(acc, arrCollection[i], arrCollection)
    }
    return acc
}

const myFind = (collection, func) => {
    // let arrCollection = checkCollectionType(collection)
    // return arrCollection.find(i => func(i))
    return checkCollectionType(collection).find(i => func(i))
}

const myFilter = (collection, func) => {
    return checkCollectionType(collection).filter(i => func(i))
}

const mySize = (collection) => {
    return checkCollectionType(collection).length
}

const myFirst = (collection, n) => {
    if (collection == null) {
        return 0
    } else if (n == null) {
        return collection[0]
    } else if (n < 0) {
        return []
    } else {
        return collection.slice(0, n)
    }
}
const myLast = (collection, n) => {
    if (collection == null) {
        return 0
    } else if (n == null) {
        return collection[collection.length - 1]
    } else if (n < 0) {
        return []
    } else {
        const i = Math.max(collection.length - n, 0)
        return collection.slice(i)
    }
}

const myKeys = (object) => {
    return Object.keys(object)
}

const myValues = (object)=>{
    return Object.values(object)
}