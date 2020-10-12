// 流水操作类型
const OP_TYPE = {
  ADD: 1, // 添加
  WITHDRAW: 2, // 提现
  EXCHANGE: 3, // 兑换
  DATED: 4, // 过期
};

/**
 * 流水记录的任务类型对应的展示在前端的文案
 文案：摇一摇新手红包 =taskid : 5001 新用户红包
 文案：摇一摇任务红包=taskid : 10001 新用户变老用户后的第1个任务
 文案：摇一摇任务红包=taskid : 10002 新用户变老用户后的第2个任务
 文案：摇一摇任务红包=taskid : 10003 老用户的第1个任务
 文案：摇一摇任务红包=taskid : 10004 老用户的第2个任务
 文案：摇一摇任务红包=taskid : 10005 老用户的第3个任务
 文案：摇一摇任务红包=taskid : 10079 QQ春节红包
 */
const TASK_WORDING_MAP = {
  6: '摇一摇新手红包',
  10001: '摇一摇任务红包',
  10002: '摇一摇任务红包',
  10003: '摇一摇任务红包',
  10004: '摇一摇任务红包',
  10005: '摇一摇任务红包',
  10079: 'QQ春节红包',
};

function getFlowDataItem(money, opType, taskId, timestamp) {
  return {
    flow_money: money,
    flow_timestamp: parseInt(timestamp / 1000, 10),
    flow_op: opType,
    ext_info: {
      task_id: `${taskId}`,
    },
  };
}

module.exports = {
  OP_TYPE,
  TASK_WORDING_MAP,
  getFlowDataItem,
};
