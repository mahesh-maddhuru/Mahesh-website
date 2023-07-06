<template>
  <div :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode
    }">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          :class="{
            'ggray': !nightMode,
            'text-color-white': nightMode
          }"
        >
          <span>Mahesh Maddhuru</span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
                class="btn btn-outline-secondary mx-2 "
                :class="{
                  'button-color-dark': !nightMode
                }"
                @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </button>
            <button
                class="btn btn-outline-secondary mx-2"
                :class="{
                  'button-color-dark': !nightMode
                }"
                @click="open('github')"
            >
              <i class="fab fa-github"></i> GitHub
            </button>
            <button
                class="btn btn-outline-secondary mx-2"
                :class="{
                  'button-color-dark': !nightMode
                }"
                @click="open('resume')"
            >
              <i class="far fa-file-pdf"></i> Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
    };
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}
.text-color-white {
  color: white;
}
.button-color-dark {
  border-color: #535a5e !important;
  color: #535a5e !important;
}
.button-color-dark:hover{
  background-color: rgb(212, 149, 97) !important;
  border-color: rgb(212, 149, 97) !important;
  color: white !important;
}

.btn {
  border-color: white;
  color: white;
  box-shadow: 0 0 1px 0 #0008;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
