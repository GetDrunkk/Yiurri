<template>
<div class="valentines-day" >
  <div class="envelope" ></div>
  <div class="heart" @click="redirectToProfile"></div>
  <div class="text"></div>
  <div class="front"></div>
  <div class="text2" @click="showPopup(photos)">- For WY the one and only - </div>
  <Popup ref="popup" :photos="photos" />
</div>
  </template>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7bf7f;
  overflow: hidden;
}
.valentines-day {
  position: relative;
  cursor: pointer;
  left:270px;
}
.envelope {
  position: relative;
  filter: drop-shadow(0 0 25px rgba(0,0,0,.3));
}

.envelope:before {
  content:"";
  position: absolute;
  width:254px;
  height:254px;
  background-color: #ff9494;
  transform: rotate(-45deg);
  border-radius: 0 15px 0 0;
  left:-37px;
  top:-82px;
}

.envelope:after {
  content:"";
  position: absolute;
  background-color: #ff9494;
  width:360px;
  height:225px;
  left:-90px;
  top:45px;
}
.heart {
  position: relative;
  background-color: #e01911;
  display: inline-block;
  height: 180px;
  top:50px;
  left:0;
  transform: rotate(-45deg);
  width:180px;
  filter: drop-shadow(0 -10px 25px rgba(0,0,0,.3));
  transition: .5s;
}
  
.heart:before, .heart:after {
  content:"";
  background-color: #e01911;
  border-radius:50%;
  height: 180px;
  width: 180px;
  position: absolute;
  z-index:10
  }
  
.heart:before {
  top:-100px;
  left:0;
  z-index:10}
  
.heart:after {
  left:100px;
  top:0;}
  .front {
  position: absolute;
  width:0;
  height:0;
  border-right: 190px solid #fbd2d2;
  border-top: 113px solid transparent;
  border-bottom: 113px solid transparent;
  top:44px;
  left:80px;
  z-index:10;
}

.front:before {
  content:"";
  position: absolute;
  width:0;
  height:0;
  border-left: 190px solid #fbd2d2;
  border-top: 113px solid transparent;
  border-bottom: 113px solid transparent;
  top:-113px;
  left:-170px;
}

.front:after {
  width:0;
  height:0;
  position: absolute;
  content:"";
  border-bottom: 150px solid #fce7e9;
  border-right:180px solid transparent;
  border-left: 180px solid transparent;
  top:-36px;
  left:-170px;
}
.text {
  position: absolute;
  font-family: arial;
  letter-spacing:5px;
  text-align: center;
  color: white;
  z-index:2;
  top:80px;
  left:15px;
  transition: .5s;
}
.text2 {
  position: absolute;
  top:275px;
  color: white;
  font-family: brush script mt;
  text-align: center;
  width:195px;
  font-size:20px;
}
.valentines-day:hover .heart {
  transform: translateY(-50px) rotate(-45deg);
}

.valentines-day:hover .text {
  transform: translateY(-50px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


<script>
import Popup from "@/components/Popup.vue";
import image1 from "@/images/p1.jpg";
import image2 from "@/images/p2.jpg";
import image3 from "@/images/p3.jpg";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      photos: [], // 存储图片数据
    };
  },
  created() {
    // 将导入的图片添加到 photos 数组中
    this.photos.push({
      url: image1,
    });
    this.photos.push({
      url: image2,
    });
    this.photos.push({
      url: image3,
    });
  },
  methods: {
    redirectToProfile() {
      this.$router.push('/profile'); 
    },
    showPopup(photos) {
      this.photos = photos;
      this.$refs.popup.showPopup(this.photos); // 调用Popup组件的showPopup方法
    },
  }
}
</script>
