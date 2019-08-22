<template>
  <div class="hello">
    <img src="http://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" />
    <h1>{{text}}</h1>
    <div class="startingFlex">
      <p class="startingText">{{startingText}}</p>
      <p v-if="show" class="startingText secondText">{{startingText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  data: () => ({
    startingText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    show: false,
    check: true,
    text: "Welcome to KUKKI, progressive meeting service"
  }),
  props: {
    msg: String
  },
  created: function() {
    window.addEventListener("scroll", () => {
      this.show = pageYOffset > 250 ? true : false;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-top: 3em;
  animation: rotate 2s infinite ease-in-out alternate-reverse;
}

.hello {
  padding-bottom: 3em;
}
h1 {
  color: whitesmoke;
  animation: shadow 3.5s infinite ease-in-out;
}

.startingFlex {
  display: flex;
  flex-direction: column;
}

.startingText {
  margin-top: 3em;
  padding: 2em;
  background-color: bisque;
  font-size: 18px;
  width: 40em;
  animation: shadowBox 3.5s infinite ease-in-out;
}

.secondText {
  align-self: flex-end;
  animation: shadowBox 3.5s infinite ease-in-out, appear 2.5s 1 ease-in-out;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes shadow {
  from {
    text-shadow: 4px 0 2px black;
  }
  25% {
    text-shadow: -4px 4px 1px black;
  }
  50% {
    text-shadow: 4px 0 2px black;
  }
  75% {
    text-shadow: -4px 4px 1px black;
  }
  to {
    text-shadow: 4px 0 2px black;
  }
}

@keyframes shadowBox {
  from {
    box-shadow: 8px 0 10px;
  }
  25% {
    box-shadow: -8px 8px 10px;
  }
  50% {
    box-shadow: 8px 0 10px;
  }
  75% {
    box-shadow: -8px 8px 10px;
  }
  to {
    box-shadow: 8px 0 10px;
  }
}

@keyframes appear {
  from {
    padding-right: 0;
  }
  50% {
    padding-right: 2.2em;
  }
  80% {
    padding-right: 1.8em;
  }
  85% {
    padding-right: 2.1em;
  }
  90% {
    padding-right: 1.9em;
  }
  to {
    padding-right: 2em;
  }
}
</style>
