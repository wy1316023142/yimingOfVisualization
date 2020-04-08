<template>
  <div class="home-box">
    <div class="weather-box">
      <img src="../assets/img/logo.png" alt class="logo" @click.stop="jumpToPages" />
      <!-- 左侧时间 -->
      <div class="left-time">
        <div class="time-tips" v-for="(item,index) in timeList" :key="index">
          <i class="time-icon" :class="item.icon"></i>
          <span>{{item.time}}</span>
          <label class="time-unit">{{item.unit?item.unit:''}}</label>
        </div>
        <!-- 三个图标 -->
        <div class="mark-box">
          <i
            class="icon-mark"
            :class="mark.iconName"
            v-for="(mark,k) in markIconList"
            :key="k"
            @click.stop="controlShow(mark,k)"
          ></i>
        </div>
      </div>
      <!-- 右侧天气 -->
      <div class="right-weather">
        <div class="temp-box">
          <i class="icon-wea"></i>
          <label>{{weatherInfo.tem}}</label>
        </div>
        <div class="wea-index">
          <div class="wea-per">
            <span>风向</span>
            <label>{{weatherInfo.win}}</label>
          </div>
          <div class="wea-per">
            <span>湿度</span>
            <label>{{weatherInfo.humidity.substring(0,weatherInfo.humidity.length-1)}}<span class="includePercent">%</span></label>
          </div>
          <div class="wea-per">
            <span>空气质量</span>
            <label>{{weatherInfo.air_pm25}}</label>
          </div>
        </div>
      </div>
    </div>
    <LeftBox :class="{hideLeft:!isShowLeft,showLeft:isShowLeft}" @changeState="changeState"></LeftBox>
    <RightBox :class="{hideRight:!isShowRight,showRight:isShowRight}" @changeState="changeState"></RightBox>
    <BottomBox
      :class="{hideBottom:!isShowBottom,showBottom:isShowBottom}"
      @changeState="changeState"
    ></BottomBox>
    <!-- 呼吸灯 -->
    <div v-if="!isShowLeft" @click="isShowLeft=true" class="breathLamp lamp-left"></div>
    <div v-if="!isShowRight" @click="isShowRight=true" class="breathLamp lamp-right"></div>
    <div v-if="!isShowBottom" @click="isShowBottom=true" class="breathLamp lamp-bottom"></div>
  </div>
</template>

<script>
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import BottomBox from "./BottomBox";
import { setTimeout, setInterval, clearInterval } from "timers";
export default {
  components: {
    LeftBox,
    RightBox,
    BottomBox
  },
  watch: {
    isShowBottom(val) {
      this.$parent.isShowBottom = val;
    },
    isShowRight(val) {
      this.$parent.isShowRight = val;
    }
  },
  data() {
    return {
      isShowLeft: true, //按钮控制三个模块的显示与隐藏
      isShowRight: true,
      isShowBottom: true,
      timer: null, //定时器
      timeList: [
        //时间列表
        {
          icon: "icon-date",
          time: "2019/8/10",
          unit: "星期六"
        },
        {
          icon: "icon-time",
          time: "AM 09:55",
          unit: ""
        }
      ],
      markIconList: [
        {
          //图标列表
          iconName: "icon-btn1"
        },
        {
          iconName: "icon-btn2"
        },
        {
          iconName: "icon-btn3"
        }
      ],
      weatherInfo: {} //天气列表
    };
  },
  mounted() {
    this.getCurrentDate();
    this.timer = setInterval(() => {
      this.getCurrentDate();
    }, 1000);
    this.getCurrentWeather(); //获取天气的数据
  },
  beforeDestroy() {
    this.$once("book:beforeDestroy", () => {
      clearInterval(this.timer);
    });
  },
  methods: {
    jumpToPages(e) {
      window.open("http://47.107.104.211:8023/#/");
      // e = e || window.event;
      // if (e.stopPropagation) {
      //   e.stopPropagation();
      // } else {
      //   evenet.cancelBubble = true;
      // }

    },
    changeState(value) {
      if (value == 3) {
        if (this.isShowLeft == true || this.isShowRight == true) {
          this.isShowLeft = this.isShowRight = false;
          this.isShowBottom = true;
        } else {
          this.isShowLeft = this.isShowRight = this.isShowBottom = true;
        }
      } else if (value == 2) {
        if (this.isShowLeft == true || this.isShowBottom == true) {
          this.isShowLeft = this.isShowBottom = false;
          this.isShowRight = true;
        } else {
          this.isShowLeft = this.isShowRight = this.isShowBottom = true;
        }
      } else {
        if (this.isShowRight == true || this.isShowBottom == true) {
          this.isShowRight = this.isShowBottom = false;
          this.isShowLeft = true;
        } else {
          this.isShowLeft = this.isShowRight = this.isShowBottom = true;
        }
      }
    },
    // 获取当前的时间
    getCurrentDate() {
      let dateData = new Date();
      let year = dateData.getFullYear();
      let month =
        dateData.getMonth() + 1 < 10
          ? "0" + (dateData.getMonth() + 1)
          : dateData.getMonth() + 1;
      let day =
        dateData.getDate() < 10 ? "0" + dateData.getDate() : dateData.getDate();
      let hour =
        dateData.getHours() < 10
          ? "0" + dateData.getHours()
          : dateData.getHours();
      let minute =
        dateData.getMinutes() < 10
          ? "0" + dateData.getMinutes()
          : dateData.getMinutes();
      let weekCol = ["日", "一", "二", "三", "四", "五", "六"];
      let week = dateData.getDay();
      this.timeList[0].unit = "星期" + weekCol[week];
      this.timeList[0].time = year + "/" + month + "/" + day;
      this.timeList[1].time =
        (hour <= 12 ? "AM" : "PM") + " " + hour + ":" + minute;
    },
    //获取天气的数据
    getCurrentWeather() {
      this.axios(
        "https://www.tianqiapi.com/api/?version=v6&cityid=101110101&appid=44824731&appsecret=Je6Lqvot"
      ).then(res => {
        if (res.data) {
          this.weatherInfo = res.data;
        }
      });
    },
    //   控制三个框的显示与隐藏
    controlShow(val, k) {
      if (k === 0) this.isShowLeft = !this.isShowLeft;
      else if (k === 1) this.isShowRight = !this.isShowRight;
      else this.isShowBottom = !this.isShowBottom;
    }
  }
};
</script>

<style lang="scss" sccoped>
.logo {
  width: 100%;
  height: 76px;
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 199;
  cursor: pointer;
}
.weather-box {
  height: 76px;
  width: 100%;
  // background-color: #001f65;
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 99;
  // background: url("../assets/img/logo.png") center center no-repeat;
  display: flex;
  padding: 24px 80px 22px 48px;
  box-sizing: border-box;
  //    左侧时间
  .left-time {
    width: 478px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time-tips {
      .time-icon {
        display: inline-block;
      }
      .icon-date {
        background: url("../assets/img/icon-date.png") no-repeat;
        width: 19px;
        height: 19px;
      }
      .icon-time {
        background: url("../assets/img/icon-time.png") no-repeat;
        width: 22px;
        height: 22px;
      }
      span {
        font-family: CityD-Medi;
        font-size: 22px;
        color: #f8f9fb;
        padding: 0 5px 0 8px;
        box-sizing: border-box;
      }
      label {
        font-family: MicrosoftYaHei;
        font-size: 10px;
        color: #dedbe1;
      }
    }
    .time-tips:not(:last-child) {
      padding-right: 10px;
      box-sizing: border-box;
    }
    // 三个图标
    .mark-box {
      z-index:99;
      .icon-mark {
        display: inline-block;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .icon-btn1 {
        background: url("../assets/img/btn1.png") no-repeat;
      }
      .icon-btn2 {
        background: url("../assets/img/btn2.png") no-repeat;
      }
      .icon-btn3 {
        background: url("../assets/img/btn3.png") no-repeat;
      }
      .icon-mark:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  //  右侧天气
  .right-weather {
    width: 418px;
    height: 28px;
    line-height: 18px;
    margin-left: 896px;
    display: flex;
    align-items: baseline;
    .temp-box {
      .icon-wea {
        display: inline-block;
        width: 34px;
        height: 28px;
        padding-right: 8px;
        background: url("../assets/img/icon-wea.png") no-repeat;
      }
      label {
        font-family: CityD-Medi;
        font-size: 22px;
        color: #05ffd5;
      }
    }
    .wea-index {
      margin-left: 40px;
      height: 18px;
      display: flex;
      .wea-per {
        span {
          font-family: MicrosoftYaHei;
          font-size: 10px;
          color: #dedbe1;
        }
        label{
          padding-left: 2px;
          font-family: MicrosoftYaHei;
          color: #05ffd5;
        }
        .includePercent{
          font-size: 10px;
          font-family: MicrosoftYaHei;
           color: #05ffd5;
        }
      }
      .wea-per:first-child{
        label{
          font-size: 18px;
        }
      }
      .wea-per:not(:first-child){
          label{
            font-family: CityD-Medi;
            font-size: 22px;
          }
      }
      .wea-per:not(:last-child) {
        margin-right: 11px;
      }
    }
  }
}
//呼吸灯
.breathLamp {
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 50%;
  width: 80px;
  height: 6px;
  transform: translate(-50%);
  margin: 40px auto 10px;
  line-height: 40px;
  border: 1px solid #2b92d4;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#3bbde2),
    to(#0090e3)
  );
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-name: breathe;
  -webkit-animation-duration: 2700ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 10px;
    display: block;
    background: url(/img/arr-lamp.png) no-repeat center center;
  }
  &.lamp-bottom {
    &::after {
      top: -14px;
      left: 50%;
      margin-left: -10px;
    }
  }
  &.lamp-left,
  &.lamp-right {
    width: 6px;
    height: 80px;
    top: 340px;
    margin: 0 10px;
    transform: translate(0, -50%);
    &::after {
      transform: rotate(90deg);
      margin-top: -5px;
      top: 50%;
    }
  }
  &.lamp-left {
    left: 0;
    &::after {
      right: -20px;
    }
  }
  &.lamp-right {
    right: 0;
    left: auto;
    &::after {
      transform: rotate(-90deg);
      left: -20px;
    }
  }
}
@-webkit-keyframes breathe {
  0% {
    opacity: 0.2;
    box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    border: 1px solid rgba(59, 235, 235, 1);
    box-shadow: 0 1px 30px rgba(59, 255, 255, 1);
  }
}
.showLeft {
  animation: showLeft 1s;
}
.hideLeft {
  animation: hideLeft 1s;
  left: -600px;
}
.showBottom {
  animation: showBottom 1s;
}
.hideBottom {
  animation: hideBottom 1s;
  top: 100%;
}
.showRight {
  animation: showRight 1s;
}
.hideRight {
  animation: hideRight 1s;
  right: -600px;
}
@keyframes showLeft {
  0% {
    left: -600px;
  }
  100% {
    left: 10px;
  }
}
@keyframes hideLeft {
  0% {
    left: 10px;
    display: block;
  }
  100% {
    display: none;
    left: -600px;
  }
}
@keyframes showBottom {
  0% {
    top: 100%;
  }
  100% {
    top: 684px;
  }
}
@keyframes hideBottom {
  0% {
    top: 684px;
    display: block;
  }
  100% {
    display: none;
    top: 100%;
  }
}
@-webkit-keyframes showRight {
  0% {
    right: -600px;
  }
  100% {
    right: 10px;
  }
}
@-webkit-keyframes hideRight {
  0% {
    right: 10px;
    display: block;
  }
  100% {
    display: none;
    right: -600px;
  }
}
</style>
