<template>
  <div>
    <!-- 半透明背景 -->
    <div
        v-if="isPopupVisible"
        class="background-overlay"
        @click="closePopup"
        :class="{ 'active': isPopupVisible }"
    ></div>
    <!-- 弹出窗口 -->
    <div v-if="isPopupVisible" class="popup">
      <div class="popup-content">
        <div  class="popup-title">
          ↓ 就是她 ↓
        </div>
        <!-- 关闭按钮 -->
        <span class="close-button" @click="closePopup">×</span>

        <!-- 照片墙 -->
        <div class="photo-wall">
          <div
              v-for="(photo, index) in photos"
              :key="index"
              class="photo"
              :style="photoStyle(index)"
          >
            <!-- 使用 object-fit 来适应图片 -->
            <img :src="photo.url" alt="Photo" class="fit-image" />
          </div>
        </div>

        <!-- 左右箭头 -->
        <div class="arrow left-arrow" @click="prevPhoto">&lt;</div>
        <div class="arrow right-arrow" @click="nextPhoto">&gt;</div>
      </div>
    </div>
    <div class="backdrop" v-if="isPopupVisible" @click="closePopup"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isPopupVisible: false,
      photos: [], // 存储图片数据
      selectedPhotoIndex: 0,
    };
  },
  methods: {
    showPopup(photos) {
      this.photos = photos;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    prevPhoto() {
      this.selectedPhotoIndex = (this.selectedPhotoIndex - 1 + this.photos.length) % this.photos.length;
    },
    nextPhoto() {
      this.selectedPhotoIndex = (this.selectedPhotoIndex + 1) % this.photos.length;
    },
    // 计算选中照片的样式
    photoStyle(index) {
      const offset = index - this.selectedPhotoIndex;
      const scaleFactor = 1 - Math.abs(offset) * 0.1; // 调整放大因子
      const zIndex = offset === 0 ? 2 : 1; // 选中的照片层级较高
      const transform = `translateX(${offset * 120}px) scale(${scaleFactor})`;
      return {
        transform,
        zIndex,
      };
    },
  },
  computed: {
    selectedPhoto() {
      return this.photos[this.selectedPhotoIndex];
    },
  },
};
</script>

<style scoped>
.page-overlay::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 1000; /* 设置一个较高的 z-index 值，确保在其他元素之上 */
  opacity: 0; /* 默认不显示 */
  pointer-events: none; /* 默认不响应点击事件 */
  transition: opacity 0.3s ease-in-out;
}

/* 激活时显示半透明遮罩层 */
.page-overlay.active::before {
  opacity: 1;
  pointer-events: auto;
}

/* 弹出窗口容器置于最上层 */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001; /* 设置一个更高的 z-index 值，确保在遮罩层之上 */
}

/* 设置弹出窗口的背景颜色为透明或使用 RGBA 颜色 */
.popup-content {
  background: rgba(255, 255, 255, 0); /* 使用 RGBA 颜色，最后一个参数表示透明度 */
}


.photo-wall {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo {
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.photo.selected {
  transform: scale(1.5);
  z-index: 1001;
}

/* 左右箭头样式 */
.arrow {
  position: absolute;
  bottom: 20px; /* 调整箭头距离底部的距离 */
  font-size: 50px; /* 增大字体大小 */
  cursor: pointer;
  z-index: 1001;
}

.left-arrow {
  left: 45%; /* 调整左箭头距离左边的距离 */
  color: #f3e4e4;
  z-index: 1001;
}

.right-arrow {
  right: 45%; /* 调整右箭头距离右边的距离 */
  color: #f3e4e4;
  z-index: 1001;
}

/* 关闭按钮样式 */
.close-button {
  position: absolute;
  bottom: 20px; /* 调整关闭按钮距离底部的距离 */
  left: 0; /* 居中关闭按钮水平位置 */
  top:-5%;
  /* 自定义配置 */
  --btn-size: 48px;  /* 按钮的宽高 */
  --btn-x-size: 4px; /* X号线条粗细 */
  --color: #f3e4e4;     /* 颜色 */
  /* 配置 END */

  position: relative;
  width: var(--btn-size);
  height: var(--btn-size);

  /* X线条旋转后会有偏移，使用 flex 进行居中对齐修正 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

/* 绘制X线条 */
.close-button::after, .close-button::before {
  content: "";
  position: absolute;
  width: var(--btn-x-size);
  height: var(--btn-size);
  background-color: var(--color);
  border-radius: calc(var(--btn-x-size ) / 2);
}
/* 两条线条各向左右分别旋转 45 度*/
.close-button::after {
  transform: rotate(45deg);
}
.close-button::before{
  transform: rotate(-45deg) ;
}

/* 点击行文字的样式 */
.text-row {
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

.fit-image {
  max-width: 60%; /* 设置最大宽度为容器的宽度 */
  max-height: 60%; /* 设置最大高度为容器的高度 */
  object-fit: contain; /* 使用 contain 保持宽高比例并适应容器 */
}

/* 设置弹出窗口的背景颜色为透明或使用 RGBA 颜色 */
.popup-content {
  background: rgba(255, 255, 255, 0); /* 使用 RGBA 颜色，最后一个参数表示透明度 */
}

/* 透明背景层，位于弹出窗口之下 */
.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 1;
  opacity: 0; /* 默认不显示 */
  pointer-events: none; /* 默认不响应点击事件 */
  transition: opacity 0.3s ease-in-out;
}

/* 激活时显示半透明背景 */
.background-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* 放大中间的图片 */
.photo.selected {
  transform: scale(5); /* 放大 50% */
  z-index: 1001; /* 置于最上层 */
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 500; /* 设置一个较高的 z-index 值，确保在其他元素之上 */
}

.popup-title {
  font-family: 'Trebuchet MS'; /* 替换 'Your Cute Font' 为实际的字体名称 */
  font-size: 60px; /* 设置字体大小 */
  text-align: center; /* 文字居中对齐 */
  margin-top: -60px; /* 调整标题距离顶部的距离 */
  color: #f3e4e4;
}

</style>