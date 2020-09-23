const data = require('./mock.json');

module.exports = function(params) {
  return (
    data[params.q] || {
      total_count: 0,
      incomplete_results: false,
      items: [],
    }
  );
};
