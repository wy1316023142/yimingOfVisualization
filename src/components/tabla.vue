<template>
    <div>
        <el-table :data="tableData" style="width: 100%" height="250" border>
            <el-table-column prop="date" label="阶段" width="50"> </el-table-column>
            <el-table-column prop="name" label="人口（个）" width="70"> </el-table-column>
            <el-table-column prop="address" label="土地（亩）" width="70"> </el-table-column>
            <el-table-column prop="address" label="房屋（㎡）"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
</style>