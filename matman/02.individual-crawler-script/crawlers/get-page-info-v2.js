const _ = require('lodash');
const getPageInfo = require('./get-page-info');

module.exports = () => {
  return _.merge(getPageInfo(), {
    cookie: document.cookie
  });
};
