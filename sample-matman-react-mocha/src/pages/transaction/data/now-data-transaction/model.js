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

function getDateToShow(time) {
  const date = new Date(time);
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}.${m < 10 ? `0${m}` : m}.${d < 10 ? `0${d}` : d}`;
}

function getMoneyToShow(money) {
  return (money / 100).toFixed(2);
}

/**
 * 格式化
 *  {
        "flow_money": 9,
        "flow_timestamp": 1539224581,
        "flow_op": 1,
        "ext_info": {
          "task_id": "6"
        }
    }
 * @param {Object} data CGI中返回的原始的信息
 * @return {Object}
 */
function getItemData(data = {}) {
  const obj = {
    // 流水金额
    money: data.flow_money,

    // 流水金额的时间戳，注意，由于后台的返回的时间戳精度为秒，与前端不一样，因此需要额外处理
    timestamp: data.flow_timestamp * 1000,

    // 操作类型，例如：添加、提现、兑换、过期等
    opType: data.flow_op,

    // 流水对应的任务ID，即：获得这个流水的原因
    taskId: (data.ext_info && data.ext_info.task_id) || '',
  };

  // 展示的日期，例如 2019.10.08
  obj.dateToShow = getDateToShow(obj.timestamp);

  // 展示的金额，单位为"元"，例如 10.02
  obj.moneyToShow = getMoneyToShow(obj.money);

  // 红包是否已过期，后续有逻辑依赖此判断，因此将其提前获取会更容易处理
  obj.isDated = obj.opType === OP_TYPE.DATED;

  // 根据不同的操作类型，获取不同的状态和文案提示
  switch (obj.opType) {
    case OP_TYPE.WITHDRAW:
      obj.wording = '提现';
      obj.isReduceType = true;
      break;

    case OP_TYPE.EXCHANGE:
      obj.wording = '兑换商品';
      obj.isReduceType = true;
      break;

    default:
      obj.wording = TASK_WORDING_MAP[obj.taskId] || '';
      obj.isReduceType = false;
      break;
  }

  // 唯一标识
  obj.id = `id_${obj.opType}_${obj.timestamp}_${obj.taskId}`;

  return obj;
}

/**
 * 格式化
 *
 {
        "flow_type": 0,
        "appid": 10001,
        "flow_data": [{},{}],
    }
 * @param {Object} data CGI中返回的原始的信息
 * @return {Object}
 */
export function getData(data = {}) {
  const obj = {
    // 当前的流水类型，0=红包流水
    flowType: data.flow_type || 0,
    appid: data.appid || 0,
    list: (data.flow_data || []).map(getItemData),
  };

  // 其他处理

  // 返回结果
  return obj;
}

export function handleSomeAction(type) {
  const describe = type === '1' ? '我是1号' : '我不是知道我是谁';

  if (type === '1') {
    console.log('type is', type);
  } else if (type === '2') {
    console.log('type is', type);
  } else {
    console.log('type is', type);
  }

  return describe;
}
