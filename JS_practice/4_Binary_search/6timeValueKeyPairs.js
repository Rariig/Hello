var TimeMap = function() {
    // Initialize map to store data
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []);
    }
    
    const pairs = this.map.get(key);
    // Since timestamps are always incoming in increasing order,
    // we can just push to the end - no need to sort!
    pairs.push({
        timestamp: timestamp,
        value: value
    });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // If key doesn't exist, return empty string
    if (!this.map.has(key)) {
        return "";
    }
    
    const pairs = this.map.get(key);
    
    // Use binary search to find the latest value before or at timestamp
    let left = 0;
    let right = pairs.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (pairs[mid].timestamp === timestamp) {
            return pairs[mid].value;
        } else if (pairs[mid].timestamp < timestamp) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Return the latest value before timestamp, or "" if no such value exists
    return right >= 0 ? pairs[right].value : "";
};


/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */