const base = require('../../base');
const data = require('../../data');

function getList() {
  const result = [];

  // 起始的金额，单位为分钱
  const INIT_MONEY = 9;

  // 起始的时间
  const INIT_TIMESTAMP = new Date('2018/10/11 10:23:01').getTime();

  // 所有的 opType 值
  const opTypes = Object.keys(data.OP_TYPE).map(e => data.OP_TYPE[e]);

  // 所有的 task id 值
  const taskIds = Object.keys(data.TASK_WORDING_MAP);

  // 遍历生成所有的类型
  for (let i = 0; i < opTypes.length; i++) {
    for (let j = 0; j < taskIds.length; j++) {
      // 生成的金额要不一样，由于单位为"分"，但是前端展示的时候单元为"元"，因此至少要覆盖一元以下和一元以上
      const money = INIT_MONEY + i * 100 + j * 10;

      // 时间戳也不能够一样，因此至少摇相隔一天以上
      const timestamp = new Date(INIT_TIMESTAMP - i * 24 * 60 * 60 * 1000 - j * 1000).getTime();

      result.push(data.getFlowDataItem(money, opTypes[i], taskIds[j], timestamp));
    }
  }

  return result;
}

module.exports = function (params) {
  return base.getSuccessData({
    appid: params.appid,
    flow_type: params.type,
    flow_data: getList(),
  });
};
