/**
 * 题目：给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。
 * 输入：intervals = [[0,30],[5,10],[15,20]]
 * 输出：2
 */

/**
 * 思路：可以转换为上下车问题，都是占用资源。会议室数量就是车的最大容量，将所有数进行排序
 * 1. 开始时间变为上车，+1人
 * 2. 结束时间变为下车，-1人
 */
var minMeetingRooms = function (intervals) {
  let meeting = [];
  intervals.forEach(([up, down]) => {
    meeting.push([up, 1]);
    meeting.push([down, -1]);
  });
  meeting.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  console.log(meeting);
  let max = 0;
  let sum = 0;
  for (let book of meeting) {
    if (book[1] > 0) {
      sum++;
      if (max < sum) {
        max = sum;
      }
    } else {
      sum--;
    }
  }
  return max;
};

console.log(
  minMeetingRooms([
    [13, 15],
    [1, 13],
  ])
);
