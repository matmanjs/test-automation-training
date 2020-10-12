import { expect } from 'chai';

import {
  getData,
  handleSomeAction,
} from '../../../../../../src/pages/transaction/data/now-data-transaction/model.js';

describe('pages/transaction/data/now-data-transaction/model.js', () => {
  describe('测试 getData(data)', () => {
    it('存在流水记录的情况', () => {
      const cgiData = {
        flow_type: 0,
        appid: 10001,
        flow_data: [
          {
            flow_money: 9,
            flow_timestamp: 1539224581,
            flow_op: 1,
            ext_info: {
              task_id: '6',
            },
          },
          {
            flow_money: 333,
            flow_timestamp: 1539224581,
            flow_op: 2,
            ext_info: {
              task_id: '2',
            },
          },
        ],
      };

      expect(getData(cgiData)).to.be.eql({
        flowType: 0,
        appid: 10001,
        list: [
          {
            money: 9,
            timestamp: 1539224581000,
            opType: 1,
            taskId: '6',
            dateToShow: '2018.10.11',
            moneyToShow: '0.09',
            isDated: false,
            wording: '摇一摇新手红包',
            isReduceType: false,
            id: 'id_1_1539224581000_6',
          },
          {
            money: 333,
            timestamp: 1539224581000,
            opType: 2,
            taskId: '2',
            dateToShow: '2018.10.11',
            moneyToShow: '3.33',
            isDated: false,
            wording: '提现',
            isReduceType: true,
            id: 'id_2_1539224581000_2',
          },
        ],
      });
    });

    it('流水记录为空的情况', () => {
      const cgiData = {
        flow_type: 1,
        appid: 10002,
        flow_data: [],
      };

      expect(getData(cgiData)).to.be.eql({
        flowType: 1,
        appid: 10002,
        list: [],
      });
    });
  });

  describe('测试 handleSomeAction(type)', () => {
    it('检查 type===1 场景', () => {
      expect(handleSomeAction('1')).to.equal('我是1号');
    });
  });
});
