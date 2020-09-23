<template>
  <div class="hello">
    <div class="vue-info">
      <h1>{{ msg }}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br />
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
          vue-cli documentation </a>.
      </p>
    </div>

    <hr />

    <div class="search-github">
      <h3 class="title">搜索 github 用户</h3>

      <div class="search-actions">
        <div class="search-btn btn01" v-on:click="searchUser01">
          搜索 yyx990803
        </div>
        <div class="search-btn btn02" v-on:click="searchUser02">
          搜索 matmanjs
        </div>
      </div>

      <div v-if="tips">
        <span class="tips">{{ tips }}</span>
      </div>
      <br />

      <div class="search-result">
        <div v-if="searchKey">
          <p class="search-preview-keyword">
            当前搜索的关键词为： <span style="color:red" id="search-key">{{ searchKey }}</span>
          </p>
          <p class="search-preview-length">
            搜索结果数量为：
            <span style="color:red">{{ resultList.length }}</span>
          </p>
        </div>

        <ul class="search-result-ul" v-for="(userInfo, index) in resultList" :key="index">
          <li>
            <img :src="userInfo.avatar_url" :alt="userInfo.userName" class="github-avatar-url" />
            <span class="github-user-name">{{ userInfo.login }}</span>
            <a :href="userInfo.html_url" class="github-html-url" target="_blank">{{ userInfo.html_url }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloVue',
  props: {
    msg: String,
  },
  data: () => {
    return {
      isLoading: false,
      searchKey: '',
      resultList: [],
      loaded: false,
      tips: '请点击搜索按钮...',
    };
  },
  methods: {
    fetchUser: function (userId, userName) {
      if (this.isLoading) {
        this.tips = 'click too fast...';
        return;
      }

      this.isLoading = true;
      this.tips = 'loading...';
      this.searchKey = '';

      // 此处模拟获取 https://api.github.com 的数据，因此需要打开代理
      axios
        .get(`https://api.github.com/search/users?q=${userId}`)
        .then((res) => {
          this.isLoading = false;
          this.tips = '';
          this.resultList = (res.data && res.data.items) || [];
          this.loaded = true;
          this.searchKey = userName;
        })
        .catch((err) => {
          this.tips = `Sorry some wrong hippend! Please refresh page and try again. Error message: ${err}`;
          this.isLoading = false;
          this.loaded = true;
          this.searchKey = userName;
        });
    },
    searchUser01: function () {
      // https://github.com/yyx990803
      this.fetchUser('yyx990803', 'yyx990803');
    },
    searchUser02: function () {
      // https://github.com/matmanjs
      this.fetchUser('matmanjs', 'matmanjs');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.search-btn {
  background-color: #42b983;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin: 10px 5px;
  border-radius: 5px;
}

.search-result-ul li {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
  list-style: none;
  border: 1px solid #acacac;
  padding: 10px;
}

.search-result-ul li img {
  width: 128px;
}

.github-user-name {
  margin: 0 20px;
  color: red;
}
</style>
