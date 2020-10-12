import axios from 'axios';

export function reportPv(params) {
  axios
    .get('/maybe/report/pv', {
      params: {
        report_id: 987,
      },
    })
    .catch((err) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('reportPv err', err, params);
      }
    });
}
