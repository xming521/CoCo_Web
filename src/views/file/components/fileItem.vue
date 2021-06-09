<template>
    <div class="file-item">
        <div class="file-head">
            <el-image v-if="checkImg(file.name)" class="image" :src="file.url" :key="file.url"
                      fit="contain" :preview-src-list="[file.url]" :alt="file.name"></el-image>
            <el-image v-else class="image" :src="file.dir?fileTypeImgList['dir']:(fileTypeImgList[file.suffix] || getTypeImgByFileName(file.name))"
                      fit="contain" :alt="file.name"></el-image>
        </div>
        <div class="file-name">
            <span>{{file.name}}</span>
        </div>
    </div>
</template>

<script>
    import {fileTypeImgList} from '@/utils/consts'
    import {isImg} from '@/utils/file'

    export default {
        name: "fileItem",
        props: {
            file: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                fileTypeImgList
            }
        },
        methods: {
            getTypeImgByFileName(fileName) {
                let type = this.fileTypeImgList.other
                if (fileName) {
                    let index1 = fileName.lastIndexOf(".")
                    if (index1 !== -1) {
                        let suffix = fileName.substring(index1 + 1, fileName.length)
                        type = this.fileTypeImgList[suffix] || type
                    }
                }
                return type
            },
            checkImg(name){
                return isImg(name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .file-item {
        position: relative;
        display: inline-block;
        width: 150px;
        height: 110px;
        overflow: hidden;
        padding: 10px 10px 0 10px;
        margin-right: 5px;

        .file-head {
            height: 60px;
            width: 100%;
            overflow: hidden;
            text-align: center;
            .image{
                height: 60px;
            }
            img {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                border-radius: 2px;
            }
        }

        .file-name {
            height: 30px;
            line-height: 30px;
            width: 100%;
            overflow: hidden;
            text-align: center;
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
