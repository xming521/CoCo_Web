<template>
    <div>
        <el-dialog
                class="simple-dialog"
                title="上传文件"
                :visible.sync="tempVisible"
                width="700px"
                :close-on-press-escape="false"
                :close-on-click-modal="false"
                @close="close"
                append-to-body
        >
            <el-upload :class="{'editor-slide-upload': showDrag}"
                       ref="upload"
                       :disabled="operation"
                       action="https://httpbin.org/post"
                       :drag="showDrag" multiple
                       :on-change="onChange"
                       :limit="20"
                       :show-file-list="true"
                       :auto-upload="false">
                <template v-if="fileList.length===0">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，最多可选20个，或<em>点击上传</em></div>
                </template>
                <template v-else>
                    <el-button :disabled="operation" slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button :disabled="operation" style="margin-left: 10px;" size="small" type="success"
                               @click="submitUpload">上传到服务器
                    </el-button>
                    <div slot="tip" class="el-upload__tip">最多可选20个</div>
                </template>
            </el-upload>
            <div style="max-height: 300px;overflow-y: auto;padding-right: 10px">
                <ul class="upload-file-list">
                    <li v-for="file in fileList">
                        <p class="file-name">
                            <img v-lazy="getTypeImgByFileName(file.data.name)||getTypeImgByFileName" alt=""/>
                            <span>{{file.data.name}}</span>
                        </p>
                        <p class="file-size">{{formatFileSize(file.data.size)}}</p>
                        <p class="file-delete" :class="{'none':operation}" @click="fileDelete(file)">
                            <i title="移除" class="el-icon-close"/>
                        </p>
                        <p v-if="operation&&file.isTip" class="file-tip">{{file.tip}}</p>
                        <el-progress :text-inside="false" :stroke-width="56"
                                     :percentage="file.percentage"
                                     :show-text="operation&&file.uploadedSize>0&&!file.isTip">
                        </el-progress>
                    </li>
                </ul>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios'
    import request from '@/utils/request'
    import md5 from 'js-md5'
    import {getToken} from '@/utils/auth'
    import {formatFileSize, getTypeImgByFileName} from '@/utils/file'

    export default {
        name: "uploadFile",
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
        computed: {
            showDrag() {
                return this.fileList.length === 0
            }
        },
        data() {
            return {
                multipart: false,//是否开启分片上传
                splitSize: 2 * 1024 * 1024,//以5M为单位大小进行分片
                bigFileSize: 50 * 1024 * 1024,//超过10M就进行分片上传（需要后台支持）
                uploadPool: 5,//同时上传的请求，最小值1
                uploadingNum: 0,//正在请求上传的数量，不要改，结合uploadPool使用
                operation: false, //上传中
                tempVisible: false,
                tempData: {
                    folderName: ''
                },
                fileList: [],
            }
        },
        watch: {
            dialogVisible: function (val) {
                this.tempVisible = val
            }
        },
        mounted() {
        },
        methods: {
            formatFileSize,
            getTypeImgByFileName,
            async submitUpload() {
                if (this.operation) {
                    return;
                }
                this.operation = true
                for (const file of this.fileList) {
                    file.tip = '连接中...'
                    file.isTip = true
                  await this.uploadOne(file)

                }
                this.fileList = []
                this.operation = false
                this.$emit('uploaded')
            },
            async uploadOne(file) {
                let formData = new FormData()
                formData.append('path', this.parentPath)
                formData.append('file', file.data.raw)
                await axios.post('/file_upload', formData, {
                    baseURL: process.env.VUE_APP_BASE_API,
                    headers: {'Content-Type': 'multipart/form-data'},
                    onUploadProgress: (evt) => {
                        file.isTip = false
                        file.percentage = evt.loaded / evt.total * 100 | 0
                        file.uploadedSize = evt.loaded
                        if (evt.loaded === evt.total) {
                            file.isTip = true
                            file.tip = '数据接收中...'
                        }
                    }
                }).then(() => {
                    file.isTip = false
                }).catch(() => {
                    this.operation = false
                })
            },
            virtualSleep() {
                let _this = this
                return new Promise(function (resolve) {
                    let interval = setInterval(function () {
                        if (_this.uploadingNum < _this.uploadPool) {
                            clearInterval(interval)
                            resolve()
                        }
                    }, 100)
                })
            },
            getUploadId(file) {
                //这里通过name，size生成唯一id
                return md5(file.data.name + file.data.size)
            },
            onChange(file) {
                if (this.operation) {
                    return;
                }
                let tempFile = {
                    size: file.size,
                    uploadedSize: 0,
                    percentage: 0,
                    isTip: true,
                    tip: '等待上传...',
                    data: file
                }
                if (this.fileList.length >= 20) {
                    this.$message.error("最多选择20个文件")
                    return
                }
                this.fileList.push(tempFile)
                this.$refs.upload.uploadFiles = []
            },
            fileDelete(file) {
                for (let i = 0; i < this.fileList.length; i++) {
                    if (file.data.uid === this.fileList[i].data.uid) {
                        this.fileList.splice(i, 1)
                        break
                    }
                }
            },
            close() {
                this.fileList = []
                this.operation = false
                this.$emit('close')
            },
        }
    }
</script>

<style lang="scss" scoped>
    .editor-slide-upload {
        ::v-deep .el-upload {
            width: 100% !important;
        }

        ::v-deep .el-upload-dragger {
            width: 100% !important;
        }
    }

    .upload-file-list {
        padding: 0;
        position: relative;

        li {
            position: relative;
            background-color: #f0f0f0;
            height: 56px;
            overflow: hidden;
            margin-bottom: 7px;
            animation-name: fadeIn2;
            animation-duration: 0.7s;
            animation-iteration-count: 1;
            animation-delay: 0s;

            p {
                margin: 0;
                display: block;
                position: absolute;
                z-index: 1;

                &.file-name {
                    padding-top: 10px;
                    padding-left: 10px;

                    img {
                        vertical-align: middle;
                        display: inline-block;
                        border: 0;
                        margin-right: 3px;
                        border-radius: 2px;
                        height: 24px;
                    }

                    span {
                        color: #313131;
                        display: inline-block;
                    }
                }

                &.file-size {
                    color: #888888;
                    padding-left: 38px;
                    position: absolute;
                    overflow: hidden;
                    top: 30px;
                }

                &.file-delete {
                    color: #969696;
                    cursor: pointer;
                    position: absolute;
                    right: 10px;
                    font-size: 12px !important;
                    line-height: 56px;

                    i {
                        font-weight: bold;

                        &:hover {
                            color: #181818;
                        }
                    }
                }

                &.file-tip {
                    color: #969696;
                    cursor: pointer;
                    position: absolute;
                    right: 10px;
                    font-size: 12px !important;
                    line-height: 56px;
                }

                &.none {
                    display: none;
                }
            }
        }

        ::v-deep .el-progress-bar {
            position: relative;
            padding: 0;
            margin: 0;
        }

        ::v-deep .el-progress__text {
            position: absolute;
            right: 10px;
            font-size: 14px !important;
            line-height: 56px;
        }

        ::v-deep .el-progress-bar__outer {
            border-radius: 1px;
        }

        ::v-deep .el-progress-bar__inner {
            background: rgba(103, 194, 58, .4) !important;
            border-radius: 1px;
        }
    }
</style>
