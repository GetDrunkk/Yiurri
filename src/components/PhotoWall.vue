<template>
    <div>
      <div class="photo-wall">
        <div class="photo-row" v-for="(row, index) in photos" :key="index">
          <div
            class="photo"
            v-for="(photo, i) in row"
            :key="i"
            @click="openPopup(photo)"
            :style="{ backgroundImage: `url(./images/${photo})` }"
          ></div>
        </div>
      </div>
      <PhotoPopup
        v-if="isPopupOpen"
        :photos="currentRow"
        :initialIndex="popupIndex"
        @close="closePopup"
      />
    </div>
  </template>
  
  <script>
  import PhotoPopup from './PhotoPopup.vue';
  
  export default {
    components: {
      PhotoPopup,
    },
    data() {
      return {
        isPopupOpen: false,
        currentRow: [],
        popupIndex: 0,
        photos: [
          // Your photo URLs here
        ],
      };
    },
    methods: {
      openPopup(row) {
        this.currentRow = row;
        this.isPopupOpen = true;
      },
      closePopup() {
        this.isPopupOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-wall {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
  
  .photo-row {
    display: flex;
    width: 100%;
  }
  
  .photo {
    flex: 1;
    padding: 10px;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
  }
  
  .photo:hover {
    opacity: 0.8;
  }
  </style>