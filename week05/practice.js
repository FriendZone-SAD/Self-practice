function addProperty(obj, key, value) {
    obj[key] = value
    return obj
}

function mergeObject(obj1, obj2) {
    return {...obj1, ...obj2}
}

function getFreqOfWords(sentence) {
    if (typeof sentence !== "string" || !sentence) return undefined;
    const words = sentence.toLowerCase().split(/\s+/);
    const freq = {};
    for (const word of words) {
        if (word) freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}

console.log(addProperty({name : 'John'}, 'age', 25))
console.log(addProperty({}, 'city', 'New York'))
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) 
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))