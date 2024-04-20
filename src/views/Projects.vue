<template>
  <div class="projects-grid-layout">
    <div
      v-for="project in projects"
      :key="project.index"
      class="project-box"
      @click="handleClick(project.slug)"
    >
      <div class="project-title">
        {{ project.name }}
      </div>

      <div class="project-image">
        <img :src="project.path" alt="project.path" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = (link: string) => {
  router.push("/projects/" + link);
};
const projects = [
  {
    index: 1,
    name: "Crypto Table",
    slug: "crypto-table",
    path: "/src/assets/images/crypto-table.png",
  },
  {
    index: 2,
    name: "ToDo",
    slug: "todo",
    path: "/src/assets/images/todo.png",
  },
  {
    index: 3,
    name: "Daily Expense",
    slug: "daily-expense",
    path: "/src/assets/images/daily-expenses.jpeg",
  },
  {
    index: 4,
    name: "Project 4",
    slug: "project-4",
    path: "",
  },
];
</script>
