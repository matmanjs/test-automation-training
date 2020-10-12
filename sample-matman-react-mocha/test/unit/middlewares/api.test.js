import { expect } from 'chai';

import { CALL_API } from '../../../src/middlewares/api';

describe('middlewares/api.js', () => {
  it('CALL_API 值为：Call API', () => {
    expect(CALL_API).to.be.equal('Call API');
  });
});
