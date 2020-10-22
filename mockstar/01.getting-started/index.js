function showReq(data) {
  $('#req-output').val(JSON.stringify(data, null, 2));
}

function showRes(data) {
  $('#res-output').val(JSON.stringify(data, null, 2));
}

function bindDemoClick(selector, url, opts) {
  $(selector).on('click', function () {
    showReq({ url, opts });

    fetch(url, opts)
      .then((result) => {
        return result.json();
      })
      .then((jsonData) => {
        // console.log(jsonData);
        showRes(jsonData);
      });
  });
}

function bindClickEvent() {

  bindDemoClick('#demo1 .btn', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi');

  bindDemoClick('#demo2 .btn.debug', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi?_ms_target=debug');
  bindDemoClick('#demo2 .btn.error_100000', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi?_ms_target=error_100000');
  bindDemoClick('#demo2 .btn.success_js_module', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi?_ms_target=success_js_module');
  bindDemoClick('#demo2 .btn.success_json_file', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi?_ms_target=success_json_file');

  bindDemoClick('#demo3 .btn.debug', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi', {
    headers: {
      'x-mockstar-query': encodeURIComponent(JSON.stringify([{
        '_ms_name': 'demo_cgi',
        '_ms_target': 'debug',
        '_ms_disable': false,
      }])),
    },
  });
  bindDemoClick('#demo3 .btn.error_100000', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi', {
    headers: {
      'x-mockstar-query': encodeURIComponent(JSON.stringify([{
        '_ms_name': 'demo_cgi',
        '_ms_target': 'error_100000',
        '_ms_disable': false,
      }])),
    },
  });
  bindDemoClick('#demo3 .btn.success_js_module', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi', {
    headers: {
      'x-mockstar-query': encodeURIComponent(JSON.stringify([{
        '_ms_name': 'demo_cgi',
        '_ms_target': 'success_js_module',
        '_ms_disable': false,
      }])),
    },
  });
  bindDemoClick('#demo3 .btn.success_json_file', 'http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi', {
    headers: {
      'x-mockstar-query': encodeURIComponent(JSON.stringify([{
        '_ms_name': 'demo_cgi',
        '_ms_target': 'success_json_file',
        '_ms_disable': false,
      }])),
    },
  });
}

$(function () {
  console.log('jQuery loaded!');

  bindClickEvent();
});
