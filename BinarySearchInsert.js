/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) === -1) {
        nums.push(target);
        nums.sort((a,b) => a - b);
        return nums.indexOf(target);
    } else {
        return nums.indexOf(target);
    }
};

const binarySearchInsert = (nums, target) => {
    let start = 0, end = nums.length;
    while (start < end) {
        let middle = start + ((end - start)/2);
        if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
}
