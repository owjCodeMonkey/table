<template>
    <div>
        <el-table :data="tableData" height="800" border style="width: 100%">
            <el-table-column prop="zone" label="zone" width="180"></el-table-column>
            <el-table-column prop="inbound" label="inbound" width="180"></el-table-column>
            <el-table-column prop="outbound" label="outbound"></el-table-column>
            <el-table-column prop="port" label="port"></el-table-column>
            <el-table-column prop="status" label="status"></el-table-column>
            <el-table-column prop="dev" label="dev"></el-table-column>

        </el-table>
    </div>
</template>

<script>
    import {get} from '../util/request';

    export default {
        data() {
            return {
                tableData: []
            };
        },
        async mounted() {
            //后端写个api返回数组数据
            this.tableData = await get('/api/iflst.php');
        }
    };
</script>
