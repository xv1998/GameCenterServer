/**
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 * 来源：力扣（LeetCode）
 *
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 */

/**
 * 思路：有向图，拓扑排序
 * 1. 当有 A-->B 时，A 出度+1，B 入度+1，只有是入度为0的课才作为遍历的起点
 * 2. 设置一个 map 去存当前课程上完后可接着上的课程数组
 * 3. 遍历入度为0的课程数组queue，将依赖该课程的课入度减1，当依赖课程入度也为0，则可推入queue里继续遍历。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let map = {};
  let inDegree = new Array(numCourses).fill(0); // 入度数组
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
    map[prerequisites[i][1]] = (map[prerequisites[i][1]] || []).concat([prerequisites[i][0]]);
  }
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    // 所有入度为0的课入列
    if (inDegree[i] == 0) queue.push(i);
  }
  let count = 0;
  console.log(queue, map);
  while (queue.length) {
    const course = queue.pop();
    const nextCourse = map[course];
    count++;
    if (nextCourse) {
      for (let i = 0; i < nextCourse.length; i++) {
        inDegree[nextCourse[i]]--;
        if (inDegree[nextCourse[i]] <= 0) queue.push(nextCourse[i]);
      }
    }
  }
  if (count >= numCourses) return true;
  return false;
};
