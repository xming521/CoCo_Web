<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content ">
        <el-card class="box-card2">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <h1>TensorFlow</h1>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="box2">
                <img src="../../assets/image_images/tensorflow.png">
              </div>
            </div>
          </el-col>
        </el-card>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content ">
              <div class="grid-content ">
        <el-card class="box-card2">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <h1>TensorFlow</h1>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="box2">
                <img src="../../assets/image_images/tensorflow.png">
              </div>
            </div>
          </el-col>
        </el-card>
      </div>



      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.box2 {
  width: 100px;
  height: 100px;
  margin: 60px;
  box-shadow: 1px 1px 400px #9C9C9C; /*方向 方向 模糊程度*/
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.box2 img {
  max-width: 60% !important;
  height: auto !important;
  max-height: 55% !important;
}


.box-card2{
  height: 220px;
  margin: 50px 50px;
  border-radius: 10px;
}
</style>
