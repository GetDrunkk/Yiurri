<template>
    <div  class="container">
        <div class="left-image">
      <img src="./images/andy.png" alt="Left Image" />
        </div>
        <div  class="popup-title">
            🚧 此页面仍在编辑中 🚧
        </div>
    <div  class="app">
      <section class="greeting">
        <h3 class="title">✍️愿望清单</h3>
      </section>
  
      <div class="input-section">
        <section class="create-todo">
          <form @submit.prevent="addTodo">
            <h3>写下芸宝的愿望吧🙂</h3>
            <input
              type="text"
              placeholder="e.g. 想去迪士尼"
              v-model="text"
            />
  
            <input type="submit" value="Add todo" />
          </form>
        </section>
      </div>
  
      <div class="todo-section">
        <section class="todo-list">
          <h2 v-show="todos.length === 0">暂时没有愿望呢😞</h2>
  
          <div class="list">
            <div
              v-for="todo in todos"
              :class="`todo-item ${todo.done && 'done'}`"
            >
              <label>
                <input type="checkbox" v-model="todo.done" />
              </label>
  
              <div class="todo-content">
                <input type="text" v-model="todo.todo" />
              </div>
  
              <div class="actions">
                <button class="delete" @click="deleteTodo(todo)">删除</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="right-image">
      <img src="./images/woman.jpg" alt="Right Image" />
    </div>
</div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from "vue";
  // ref --> for state management
  // onMounted --> to execute a command once the page starts
  // computed --> for mathematical computing
  // watch --> an observable which watches for page changes
  
  const todos = ref([]);
  const text = ref("");
  
  function addTodo() {
    if (text.value.trim() === "") {
      return;
    }
  
    todos.value.unshift({
      todo: text.value,
      done: false,
    });
  
    text.value = "";
  }
  
  function deleteTodo(todo) {
    todos.value = todos.value.filter((x) => x !== todo);
  }
  
  watch(
    todos,
    (newTodoValue) => {
      localStorage.setItem("todos", JSON.stringify(newTodoValue));
    },
    { deep: true }
  );
  
  onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem("todos")) || [];
  });
  </script>

<style scoped>
.container{
display: flex;
  justify-content: center;
  align-items: center;
  height: 976px;
  width: 1921px;
  margin-left: -392px;
  background: linear-gradient(to bottom right, #ff69b4, #00bfff); /* 渐变背景色 */
  z-index: 90;
}
.app {
  
  padding: 2rem;
  border: none; /* 去除边框 */
  border-radius: 1rem; /* 圆角边框 */
  transform: scale(1.2); /* 放大整个元素 */
  transition: transform 0.3s ease-in-out;
  background-color: #f7bf7f;
  overflow: auto;
  margin-right: 100px;
  margin-left: -640px;
  width: 600px;
  background: linear-gradient(to bottom right, #eb9d0c, #00bfff); /* 渐变背景色 */
  z-index: 100;
}

/* 标题样式 */
.title {
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* 输入框样式 */
input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.1); /* 透明背景色 */
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
}

/* 按钮样式 */
input[type="submit"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.2); /* 半透明背景色 */
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

input[type="submit"]:hover {
  background-color: rgba(0, 0, 0, 0.4); /* 鼠标悬停时的背景色 */
}

/* 列表样式 */
.todo-list .list {
  margin: 1rem 0;
}

.todo-list .todo-item {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2); /* 半透明背景色 */
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}

/* 其他样式 */
.todo-item label {
  display: block;
  margin-right: 1rem;
  cursor: pointer;
}

.todo-item .todo-content {
  flex: 1 1 0%;
  margin-top: 25px;
}

.todo-item .todo-content input {
  color: white;
  font-size: 1.125rem;
}

.todo-item .actions {
  display: flex;
  align-items: center;
}

.todo-item .actions button {
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
  opacity: 0.75;
}

.todo-item .actions .edit {
  margin-right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.4); /* 半透明背景色 */
}

.todo-item .actions .delete {
    background: linear-gradient(to bottom right, #3C3B3F, #605C3C); /* 渐变背景色 */
  margin-left: 100px;
}

.todo-item.done .todo-content input {
  text-decoration: line-through;
  color: rgba(165, 165, 165, 0.752);
}

.popup-title {
  font-family: 'Trebuchet MS'; /* 替换 'Your Cute Font' 为实际的字体名称 */
  font-size: 60px; /* 设置字体大小 */

  margin-top:-750px;
  margin-left:-50px;
  color: #f3e4e4;
}

/* 以下是添加的样式，用于控制左右图片 */
.left-image{
  margin-left: -850px;
  margin-right: 100px;
  z-index: 2;
}
.right-image {
  left: 100px;
  margin-right: -1300px;
  z-index: 2;
}

.left-image img{
  max-width: 90%; /* 图片最大宽度为容器的100% */
  max-height: 90%; /* 图片最大高度为容器的100% */

}
.right-image img {
  max-width: 50%; /* 图片最大宽度为容器的100% */
  max-height: 50%; /* 图片最大高度为容器的100% */
}

</style>
