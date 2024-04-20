<template>
  <div class="links">
    <router-link
      to="/"
      :class="{ active: activeLink === 'home' }"
      @click="handleClick('home')"
    >
      <span class="link-icon">
        <Icon icon="ic:sharp-home" />
      </span>
      <span class="link-text">Home</span>
    </router-link>
    <router-link
      to="/projects"
      :class="{ active: activeLink === 'projects' }"
      @click="handleClick('projects')"
    >
      <span class="link-icon">
        <Icon icon="ic:sharp-code" />
      </span>
      <span class="link-text">Projects</span>
    </router-link>
    <router-link
      to="/skills"
      :class="{ active: activeLink === 'skills' }"
      @click="handleClick('skills')"
    >
      <span class="link-icon">
        <Icon icon="solar:chart-bold-duotone" />
      </span>
      <span class="link-text">Skills</span>
    </router-link>
    <router-link
      to="/about"
      :class="{ active: activeLink === 'about' }"
      @click="handleClick('about')"
    >
      <span class="link-icon">
        <Icon icon="ph:user-thin" />
      </span>
      <span class="link-text">About Me</span>
    </router-link>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      activeLink: "home",
    };
  },
  methods: {
    handleClick(link) {
      this.activeLink = link;
    },
  },
  components: {
    Icon,
  },
};
</script>
