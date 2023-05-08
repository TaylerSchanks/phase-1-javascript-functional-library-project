function standardize(collection) {
    if (typeof collection === "object") {
        let objArray = Object.values(collection)
        // console.log(objArray)
        return objArray
    }
}
function myEach(collection, callback) {
    // console.log(collection)
    let objArray = standardize(collection)
    for (let i = 0; i < objArray.length; i++) {
        callback(objArray[i])
    }
    // objArray.forEach(e => callback(e))
    // console.log(collection)
    return collection
}

function myMap(collection, callback) {
    let arrayValues = standardize(collection)
    let newArray = []
    for (let i = 0; i < arrayValues.length; i++) {
        newArray.push(callback(arrayValues[i]))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let objArray = standardize(collection)
    if (acc === undefined) {
        acc = objArray[0]
        objArray.shift()
    }
    for (let i = 0; i < objArray.length; i++) {
        acc = callback(acc, objArray[i], objArray)
    }
    return acc
}

function myFind(collection, predicate) {
    let objArray = standardize(collection)
    for (let i = 0; i < objArray.length; i++) {
        if (predicate(objArray[i])) {
            return(objArray[i])
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let objArray = standardize(collection)
    let myFilterArray = []
    for (let i = 0; i < objArray.length; i++) {
        if (predicate(objArray[i])) {
            myFilterArray.push(objArray[i])
        }
    }
    return myFilterArray
}

function mySize(collection) {
    let objArray = standardize(collection)
    return objArray.length
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]
    } else {
       return array.splice(0, n)
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length -1]
    } else {
        return array.slice(-n)
    }
}

function myKeys(object) {
    let keys = []
    for (let e in object) {
        keys.push(e)
    }
    return keys
}

function myValues(object) {
    let values = []
    for (let e in object) {
        values.push(object[e])
    }
    return values
}