<template>
  <div>
    <el-table :data="tableData" height="800" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: []
    };
  },
  async mounted() {
    try {
      //后端写个api返回数组数据
      this.tableData = await axios.get("/api/getData");
    } catch (e) {
      //示例
      this.tableData = Array(100).fill({
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      });
    }
  }
};
</script>
