<template>
    <div>
        <el-dialog
                class="simple-dialog"
                title="新建目录"
                :visible.sync="tempVisible"
                width="500px"
                :close-on-press-escape="false"
                :close-on-click-modal="false"
                @close="close"
                append-to-body
        >
            <el-form :rules="rules" :model="tempData" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="目录名" prop="folderName">
                    <el-input type="text" placeholder="请输入目录名" v-model="tempData.folderName"
                              maxlength="12" show-word-limit >
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="close">取 消</el-button>
              <el-button type="primary" @click="createFolder('ruleForm')">
            <span>立即创建</span>
      </el-button>
    </span>
        </el-dialog>
    </div>
</template>

<script>
    import fileApi from '@/api/file'
    export default {
        name: "createFolder",
        props: {
            dialogVisible: {
                type: Boolean,
                default: false
            },
            parentPath: {
                type: String,
                default: '/'
            }
        },
        data(){
            return{
                tempVisible: false,
                tempData:{
                    folderName: ''
                },
                rules: {
                    folderName: [
                        {required: true, message: '请输入文件夹名称', trigger: 'blur'},
                        {min: 1, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        watch: {
            dialogVisible: function(val) {
                this.tempVisible = val
            }
        },
        methods: {
            createFolder(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        fileApi.createFolder({
                            path: this.parentPath,
                            dir_name: this.tempData.folderName
                        }).then(res=>{
                            this.$message.success('创建成功')
                            this.close()
                            this.$emit('created')
                        })
                    } else {
                        return false
                    }
                })
            },
            close() {
                this.tempData.folderName = ''
                this.$refs['ruleForm'].clearValidate()
                this.$emit('close')
            },
        }
    }
</script>

<style scoped>

</style>
