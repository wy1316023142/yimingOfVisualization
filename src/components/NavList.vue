<template>
  <div class="navWrap">

    <ul class="mainNav">
      <li v-for="(item,index) in navList" :key="item.name" @click="selNavItem(item,index)" :index="index">

		<div class="nav-box" :class="{active:actNav.key==item.key||(item.show&&item.children&&item.children.length>0)}">
			<i class="icon-nav" :class="item.icon" ></i>
			<!-- <span class="label" :class="{active:actNav.key==item.key}">{{item.name}}</span> -->
		</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
         {
              name: "智慧交通",
              icon: "my-icon-traffic",
              key: 1,
              href:"/",
              show: false
          },
          {
              name: "预警系统",
              icon: "my-icon-warning",
              key: 2,
              href:"/Warn",
              show: false
          },
          {
              name: "防汛情况",
              icon: "my-icon-Flood",
              key: 3,
              href:"/Flood",
              show: false
          },

          {
              name: "装修施工",
              icon: "my-icon-construction",
              key: 4,
              href:"/Construction",
              show: false
          },
          {
              name: "运行商情况",
              icon: "my-icon-run",
              key: 5,
              href:"/Operating",
              show: false
          }
  
      ],
      actNav:{},
      navItem: {}, //1级菜单选中
      NavChild: {} //2级菜单选中
    };
  },
  mounted() {
      var actKey=sessionStorage.getItem('routeKey');
      if(actKey){
          for(var i=0;i<this.navList.length;i++){
              if(actKey==this.navList[i].key){
                  this.selNavItem(this.navList[i])
              }
          }
      }else{
          this.selNavItem(this.navList[0])
      }


  },
  directives: {
    clickoutside: {
      bind: function(el, binding, vnode) {
        function haveChild(e) {
          if (el.contains(e.target)) return false;

          if (binding.expression) binding.value(e);
        }
        el.haveChild = haveChild;
        document.addEventListener("click", el.haveChild);
      },
      unbind: function(el) {
        document.removeEventListener("click", el.haveChild);
        delete el.haveChild;
      }
    }
  },

  methods: {
    hiddenItem() {
      this.navList.forEach(item => {
        item.show = false;
      });
    },
    selNav(nav, index) {
      this.navList.forEach(item => {
        item.show = false;
      });
      nav.show = true;
      if (!nav.children) {
        this.navItem = nav;
        this.$store.commit("UPDATE_LEFTNAME", nav.leftName);
        this.$store.commit("UPDATE_RIGHTNAME", nav.rightName);
        this.NavChild = {};
      }else{
				var childs={}
				for(var i=0;i<nav.children.length;i++){
					if(this.NavChild.name==nav.children[i].name){
						childs=nav.children[i];
						break;
					}
				}
				if(childs.name){

				}else{
					childs=nav.children[0]
				}
				this.selNavItem(childs,nav)
			}
    },
    selNavItem(data) {
        this.actNav=data;
        sessionStorage.setItem('routeKey',data.key);
        // if(this.$parent.$refs.map)
        //  this.$parent.$refs.map.clearvisible();
        this.$router.push(data.href);        
        this.checkRoutTo(data.name);//地图切换
    },
    checkRoutTo(path) {
      console.log("checkRoutTo: "+path);
      if(this.$parent.$refs.map)
      {
        var _map=this.$parent.$refs.map;
        _map.SetCurrentSelPage(path);
        if (path == "/") { 
          _map.loadQuYuYouShi();
        } else if (path == "/Warn") {
          //预警系统         
          _map.loadYuanQuGaiKuang();
        } else if (path == "/Flood") {
          //防汛情况
          _map.loadYeWu();
        } else if (path == "/Construction") {
          //装修施工
          _map.loadShiPinJianKong();
        } else if (path == "/Operating") {
          //运行商情况
          _map.loadAlarm();
        } else {
          // this.goYuanQuGaiKuang();
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.navItemWrap {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
  height: 44px;
  box-sizing: border-box;
  background: url("../assets/img/navbg.png") center center no-repeat;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  i {
    width: 10px;
    height: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -8px;
    img {
      height: 100% !important;
      width: 100% !important;
    }
  }
  & > label {
    flex: 1;
    min-width: 100px;
    text-align: center;
    padding: 3px 0;
    // border-right: 1px solid #0fadff;
    background: url("../assets/img/line04.png") right center no-repeat;
    cursor: pointer;
    &:hover {
      color: #0fadff;
    }
  }
  & > label:last-child {
    border-right: none;
  }
}
.nav-bg{
    content: '';
    height: 150px;
    width: 100%;
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    background: url("../assets/img/bottom1.png")no-repeat center bottom;
}
.navWrap {
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  .mainNav {
    display: flex;
    li {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding:12px 20px;
      .label {
        margin-top: 10px;
      }
    }
  }
}
span.active {
  // margin-top: 10px;
  color: #41b0ff !important;
}
</style>

