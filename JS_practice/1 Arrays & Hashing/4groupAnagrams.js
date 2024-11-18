function groupAnagrams(words) {
    let map = new Map(); 

    for (let word of words) {//better than indexed loop
        
        let sortedWord = word.split('').sort().join('');// Step 1: Sort the characters of the word, use join, not tostring
        if (!map.has(sortedWord)) {   // Step 2: Check if the sorted word is already a key in the map
            map.set(sortedWord, []);  // Initialize the array if the key does not exist
        }
        map.get(sortedWord).push(word);// Step 3: Push the original word to the corresponding array
    }
    return Array.from(map.values());// Step 4: Return the grouped anagrams (values of the map)
}