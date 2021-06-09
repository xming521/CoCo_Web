<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="8">
        <div class="grid-content ">
          <el-card class="box-card c1">
            <el-col :span="16">
              <h1>应用总数</h1>
              <router-link :to="{name: 'app'}">
                <el-link v-loading="loading" element-loading-background="transparent" class="card-link">{{
                    info.app_count
                                                                                                        }}
                </el-link>
              </router-link>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="box">
                  <img class="d-icon" style="padding-top: 20px" src="../../assets/dashboard_images/app1.png">
                </div>
              </div>
            </el-col>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ">
          <el-card class="box-card c2">
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <h1>运行中</h1>
                <router-link :to="{name: 'app'}">
                  <el-link v-loading="loading" element-loading-background="transparent" class="card-link">
                    {{ info.app_run_count }}
                  </el-link>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="box">
                  <img class="d-icon" style="padding-top: 25px" src="../../assets/dashboard_images/app2.png">
                </div>
              </div>
            </el-col>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ">
          <el-card class="box-card c3">
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <h1>镜像</h1>
                <router-link :to="{name: 'image_table'}">
                  <el-link v-loading="loading" element-loading-background="transparent" class="card-link">
                    {{ info.image_count }}
                  </el-link>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="box">
                  <img class="d-icon" style="padding-top: 30px" src="../../assets/dashboard_images/docker.png">
                </div>
              </div>
            </el-col>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card-all">
          <h2>性能监控</h2>
          <el-col :span="16">
            <gauge-chart class="real-chart" :chart_data="realtime_info.cpu"/>
          </el-col>
          <el-col :span="8">
            <div class="real-icon-box">
              <el-col><img class="d-icon-realtime" style="" src="../../assets/dashboard_images/CPU.png"></el-col>
              <el-col>
                <div class="real_text"> {{ realtime_info.cpu + '%' }}</div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="16">
            <gauge-chart class="real-chart" :chart_data="realtime_info.mem"/>
          </el-col>
          <el-col :span="8">
            <div class="real-icon-box">
              <el-col><img class="d-icon-realtime" style="" src="../../assets/dashboard_images/mem.png"></el-col>
              <el-col>
                <div class="real_text"> {{ realtime_info.memoryUsed }}G/{{ realtime_info.memoryTotal }}G</div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="16">
            <gauge-chart class="real-chart" :chart_data="realtime_info.disk"/>
          </el-col>
          <el-col :span="8">
            <div class="real-icon-box">
              <el-col><img class="d-icon-realtime" style="" src="../../assets/dashboard_images/disk.png"></el-col>
              <el-col>
                <div class="real_text"> {{ realtime_info.diskUsed }}G/{{ realtime_info.diskTotal }}G</div>
              </el-col>
            </div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="box-card-all">
          <h2>最近任务</h2>
          <transaction-table style="margin-top: -2vh" :recent_event="recent"/>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card class="box-card-all">
          <todo-list/>
        </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>

import { getsys_info } from '@/api/dashboard'
import TodoList from './components/TodoList'
import TransactionTable from './components/TransactionTable'
import gaugeChart from '@/views/dashboard/components/gaugeChart'
import { notice } from '@/utils/notice'

export default {
  name: 'Dashboard',
  components: {
    TodoList,
    TransactionTable,
    gaugeChart
  },
  data() {
    return {
      listLoading: true,
      info: {},
      realtime_info: {
        cpu: 5,
        mem: 70,
        disk: 50
      },
      recent: [],
      loading: true
    }
  },
  created() {
    this.fetchData()
    this.socketIO.on('dashboard', (msg) => {
      this.realtime_info = msg.data
    })
  },
  methods: {
    fetchData() {
      getsys_info().then((response) => {
        this.recent = response.data.res.recent_event
        this.loading = false
        this.info = response.data.res
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-link {
  font-size: 11vh;
  color: #f1f1f1;
  margin-bottom: 2vh;
}

.dashboard-container h1 {
  margin-top: -0.1vh;
  font-size: 1.8rem;
  margin-bottom: 3vh;
}

.box-card {
  height: 24vh;
  margin: 20px 20px;
  border-radius: 10px;
  color: #f1f1f1;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, .2) !important;
}

.box-card-all {
  margin: 20px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, .2) !important;
}

.d-icon {
  filter: drop-shadow(-20px -20px 100px #c3c3c3);
  width: 150%;
  height: 150%;
}

.d-icon-realtime {
  filter: drop-shadow(5px 5px 5px #6b9cff);
  width: 10vh;
  height: 10vh;
}

.real_text {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1vh;
  color: #6b9cff;
}

.real-icon-box {
  text-align: center;
  margin-left: -3vw;
  margin-top: 1vh;
}

.real-chart {
  margin-top: -3vh;
}

.el-card h2{
  margin-top: -0.1vh;
  font-size: 1.7rem;
  color: #7a7a7a;
  letter-spacing:3px
}

.c1 {
  background-image: linear-gradient(to right, #4facfe 20%, #88b5ff 100%);
}

.c2 {
  background-image: linear-gradient(to right, #34e971 50%, #63e38b 100%);
}

.c3 {
  background-image: linear-gradient(to right, #ec914c 20%, #e7709d 100%);
}

.c4 {
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
}

</style>
