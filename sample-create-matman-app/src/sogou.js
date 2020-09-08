const _ = require('lodash');

function bindClickEvent() {
  $('#btn').on('click', function () {
    fetch('/cgi-bin/a/b/demo_cgi')
      .then((result) => {
        return result.json();
      })
      .then((jsonData) => {
        console.log(jsonData);

        // 修改消息
        if (jsonData.retcode === 0) {
          $('#msg').text(_.concat('来自接口返回：', jsonData.result.description).join(' '));
          $('#msg').removeClass('alert-info').addClass('alert-success').addClass('msg-loaded');
        } else {
          $('#msg').text(_.concat('来自接口返回：', JSON.stringify(jsonData)).join(' '));
          $('#msg').removeClass('alert-info').addClass('alert-danger').addClass('msg-loaded');
        }
      });
  });
}

function iAmNotCalled() {
  // 这段代码没有被调用，因此不会被覆盖率统计到！
  console.log('I am not called!');
}

function fetchUser(userId, userName) {
  // 此处模拟获取https://api.github.com的数据，因此需要打开代理
  fetch('/search/users?q=' + userId)
    .then((result) => {
      return result.json();
    }).then((res) => {
      const data = res.result.items[0];
      $('.github-user-name').text(data.login);
      $('.github-html-url').attr('href', data.html_url);
      $('.github-html-url').text(data.html_url);
      $('.github-avatar-url').attr('src', data.avatar_url);
    }).catch((err)=>{
      console.warn(err);
    });
}

function changeUser() {
  const userName = $('.github-user-name').text();
  if (userName !== 'yyx990803') {
    // https://github.com/yyx990803
    fetchUser('yyx990803', 'Evan You');
  } else {
    fetchUser('Jinjiang', 'Jinjiang');
  }
}

$(function () {
  console.log('jQuery loaded!');
  changeUser(); 
  $('#click').click(function() {
    changeUser();
  });
  bindClickEvent();
});
