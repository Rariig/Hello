/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    // Binary search boundaries
    let left = 1;
    let right = Math.max(...piles);
  
    // Helper function to calculate the total hours needed at a given eating speed k
    function calculateHours(k) {
      return piles.reduce((totalHours, bananas) => {
        return totalHours + Math.ceil(bananas / k);
      }, 0);
    }
  
    // Binary search to find the minimum k
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const hoursNeeded = calculateHours(mid);
  
      if (hoursNeeded <= h) {
        // If it takes `hoursNeeded` <= h, try a smaller k
        right = mid;
      } else {
        // If it takes more than h hours, increase k
        left = mid + 1;
      }
    }
  
    // `left` is the smallest eating speed that allows Koko to finish in h hours
    return left;
  }
  