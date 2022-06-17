/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 * 来源：力扣（LeetCode）
 *
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：7
 */

/**
 * 思路：动态规划
 * 0. 昨天有两种行为，买入和卖出。如果昨天的现金够买今天股票，并且购买后剩余的钱比昨天的股票钱多，则更新今天的股票钱，同理卖出逻辑
 * 1. 假如一开始没有钱，现金为0，第一天买了股票，则 stock 为 -7；
 * 2. 第二天如果prices[i] + 前一天的 stock > 0，证明赚了，对比一下当前当前现金，取最大值
 * 3. 第二天如果当前现金买股票，crash-prices[i]比持有股票还有大，则买股票，更新股票数量
 */

var maxProfit = function (prices) {
  let crash = 0; // 持有现金
  let stock = -prices[0]; // 持有股票
  // 描述当天i下股票的状态
  for (let i = 1; i < prices.length; i++) {
    crash = Math.max(crash, stock + prices[i]);
    stock = Math.max(stock, crash - prices[i]);
  }
  return crash;
};
