<template>
  <div class="headerContainer">
    <router-link class="menuItem" to="/">Main</router-link>
    <router-link class="menuItem" to="/about">Profile</router-link>
    <router-link class="menuItem" to="/search">Search</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({})
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerContainer {
  max-width: 10em;
  margin: 1em;
}

.menuItem {
  background-color: rgba(255, 235, 205, 0.418);
  cursor: pointer;
  margin: 1em;
  margin-right: 2em;
  margin-left: 2em;
  padding: 1em;
  font-size: 20px;
}

a {
  text-decoration: none;
}

a:link {
  color: black;
  border-bottom: none;
}

a:visited {
  color: black;
  border-bottom: none;
}

a:active {
  background-color: wheat;
  box-shadow: 0 0 15px wheat;
}

a:hover {
  animation: gradient 1s infinite alternate-reverse ease-in-out;
  background-color: blanchedalmond;
  box-shadow: 3px 3px 10px wheat;
}

@keyframes gradient {
  from {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 0%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  10% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 10%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  20% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 20%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  30% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 30%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  40% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 40%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  50% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 50%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  60% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 60%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  70% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 70%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  80% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 80%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
  90% {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 90%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }

  to {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1741071428571429) 0%,
      rgba(255, 235, 205, 1) 100%,
      rgba(0, 212, 255, 0.07886904761904767) 100%
    );
  }
}
</style>
