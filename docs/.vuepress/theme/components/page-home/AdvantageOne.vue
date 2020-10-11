<template>
  <div class="advantage-one">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>文档更新中</h2>
          <ul>
            <li>单元测试-Mocha</li>
            <li>单元测试-Jest</li>
            <li>端对端测试</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.advantage-one {
  background-color: #f7f7f7;

  .container {
    text-align: left;
    padding-bottom: 5rem !important;
    padding-top: 5rem !important;
  }
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;

  .col {
    display: block;
    margin-left: 0;
    max-width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
}

</style>
