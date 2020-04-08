<template>
    <div>
        <el-table :data="tableData" style="width: 100%;" border :header-cell-style="getRowClass" :cell-style="changeCellStyle" :height="height">
            <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-for="(item, i) in tableClumns" :key="i"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            default:125
        },
        tableClumns: {
            type: Array,
            default: function() {
                return []
            }
        },
        tableData: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    methods: {
        getRowClass({ row, column, rowIndex, columnIndex }) {
            if (rowIndex == 0 ) {
                return "background: linear-gradient(#39a1df,#0f4c90);"
            } else {
                return ""
            }
        },
         changeCellStyle({ row, column, rowIndex, columnIndex }){
             if(columnIndex ===0 && rowIndex === 0){
                return "background: #0e4a8a;"
             }else if(columnIndex ===0 && rowIndex === 1) {
               return "background: #0e4a8a;"
            }else if(columnIndex ===0 && rowIndex === 2) {
               return "background: #0e4a8a;"
            }
            else if(columnIndex ===0 && rowIndex === 3) {
               return "background: #0e4a8a;"
            }
            else if(columnIndex ===0 && rowIndex === 4) {
               return "background: #0e4a8a;"
            }
            else if(columnIndex ===0 && rowIndex === 5) {
               return "background: #0e4a8a;"
            }
            else if(columnIndex ===0 && rowIndex === 6) {
               return "background: #0e4a8a;"
            }
         
         }

    }
}
</script>

<style lang="scss" scoped>
</style>