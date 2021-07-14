<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-14 10:15:44
 * @LastEditTime : 2021-07-14 16:03:59
 * @Description  : 
 * @FilePath     : /front-end/src/components/FavBtn.vue
-->

<template>
  <div>
    <input
      type="checkbox"
      class="checkbox hidden"
      :checked="checked"
    />
    <label for="checkbox">
      <svg
        class="bookmark-svg"
        :width="width"
        :height="height"
        viewBox="467 392 58 57"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          class="Group"
          fill="none"
          fill-rule="evenodd"
          transform="translate(467 392)"
        >
          <path
            d="M 0 4C 0 1.79086 1.79086 0 4 0L 24 0C 24 0 24 0 24 0L 44 0C 46.2091 0 48 1.79086 48 4L 48 56.5259C 48 59.7207 44.4394 61.6263 41.7812 59.8541L 26.2188 49.4792C 24.8752 48.5835 23.1248 48.5835 21.7812 49.4792L 6.2188 59.8541C 3.56058 61.6263 0 59.7207 0 56.5259L 0 4Z"
            class="bookmark"
            fill="#AAB8C2"
          />
          <circle
            class="main-circ"
            fill="#E2264D"
            opacity="0"
            cx="29.5"
            cy="29.5"
            r="1.5"
          />

          <g class="grp7" opacity="0" transform="translate(7 6)">
            <circle class="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
            <circle class="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
          </g>

          <g class="grp6" opacity="0" transform="translate(0 28)">
            <circle class="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
            <circle class="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
          </g>

          <g class="grp3" opacity="0" transform="translate(52 28)">
            <circle class="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
            <circle class="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
          </g>

          <g class="grp2" opacity="0" transform="translate(44 6)">
            <circle class="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
            <circle class="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
          </g>

          <g class="grp5" opacity="0" transform="translate(14 50)">
            <circle class="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
            <circle class="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
          </g>

          <g class="grp4" opacity="0" transform="translate(35 50)">
            <circle class="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
            <circle class="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
          </g>

          <g class="grp1" opacity="0" transform="translate(24)">
            <circle class="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
            <circle class="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
          </g>
        </g>
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  props: ["width", "height","checked"],
};
</script>

<style lang="scss">
svg {
  cursor: pointer;
  overflow: visible;
  width: 60px;
  .bookmark {
    transform-origin: center;
    animation: animateBookmarkOut 0.3s linear forwards;
  }
  .main-circ {
    transform-origin: 29.5px 29.5px;
  }
}

.checkbox {
  display: none;
}

.checkbox:checked + label svg {
  .bookmark {
    transform: scale(0.2);
    fill: rgb(253,159,17);
    animation: animateBookmark 0.3s linear forwards 0.25s;
  }
  .main-circ {
    transition: all 2s;
    animation: animateCircle 0.3s linear forwards;
    opacity: 1;
  }
  .grp1 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(0, -30px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(10px, -50px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp2 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(30px, -15px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(60px, -15px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp3 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(30px, 0px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(60px, 10px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp4 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(30px, 15px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(40px, 50px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp5 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(-10px, 20px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(-60px, 30px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp6 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(-30px, 0px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(-60px, -5px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp7 {
    opacity: 1;
    transition: 0.1s all 0.3s;
    .oval1 {
      transform: scale(0) translate(-30px, -15px);
      transform-origin: 0 0 0;
      transition: 0.5s transform 0.3s;
    }
    .oval2 {
      transform: scale(0) translate(-55px, -30px);
      transform-origin: 0 0 0;
      transition: 1.5s transform 0.3s;
    }
  }
  .grp2 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  .grp3 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  .grp4 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  .grp5 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  .grp6 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  .grp7 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
}

@keyframes animateCircle {
  40% {
    transform: scale(10);
    opacity: 1;
    fill: #dd4688;
  }
  55% {
    transform: scale(11);
    opacity: 1;
    fill: #d46abf;
  }
  65% {
    transform: scale(12);
    opacity: 1;
    fill: #cc8ef5;
  }
  75% {
    transform: scale(13);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.5;
  }
  85% {
    transform: scale(17);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.2;
  }
  95% {
    transform: scale(18);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.1;
  }
  100% {
    transform: scale(19);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0;
  }
}

@keyframes animateBookmark {
  0% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes animateBookmarkOut {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>