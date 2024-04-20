<template>
  <div class="skills-container">
    <div class="bar-chart">
      <CanvasJSChart :options="options" style="width: 700px" />
    </div>

    <div class="skills-info">
      <div class="accordion" id="accordionExample" data-bs-theme="dark">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              ReactJs #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>ReactJs'de Neler Biliyorum?</strong>
              <ul>
                <li>
                  React Hooks
                  <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useContext (ContextAPI)</li>
                    <li>useReducer</li>
                    <li>useCallback</li>
                    <li>useRef</li>
                  </ul>
                </li>

                <li>
                  State Management
                  <ul>
                    <li>Redux</li>
                    <li>
                      Redux Toolkit
                      <ul>
                        <li>Async Thunk</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  Services
                  <ul>
                    <li>
                      Axios
                      <ul>
                        <li>Axios Interceptors</li>
                        <li>Handling Errors</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  UI
                  <ul>
                    <li>Reactbootstrap</li>
                    <li>MuiMaterial</li>
                    <li>Chakra</li>
                    <li>Tailwind</li>
                  </ul>
                </li>

                <li>
                  Form Yonetimi ve Validasyon
                  <ul>
                    <li>Formik</li>
                    <li>Yup</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              VueJs #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>VueJs'de Neler Biliyorum?</strong>
              <ul>
                <li>Computed</li>
                <li>
                  Conditional Rendering
                  <ul>
                    <li>v-if</li>
                    <li>v-else</li>
                  </ul>
                </li>
                <li>
                  List Rendering
                  <ul>
                    <li>v-for</li>
                  </ul>
                </li>
                <li>Props & Emitting</li>
                <li>Slots</li>
                <li>Provide & Inject (React ContextAPI gibi...)</li>
                <li>
                  State Management
                  <ul>
                    <li>
                      Vuex
                      <ul>
                        <li>Getter</li>
                        <li>Setter</li>
                        <li>Mutations</li>
                        <li>Actions</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Form Yonetimi ve Validasyon
                  <ul>
                    <li>Formkit</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Javascript #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        theme: "dark2",
        backgroundColor: "transparent",
        title: {
          text: "Skills",
        },
        axisY: {
          includeZero: true,
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "ReactJs", y: 90 },
              { label: "VueJs", y: 90 },
              { label: "Javascript", y: 95 },
              { label: "Typescript", y: 80 },
              { label: "Django", y: 75 },
              { label: "NestJs", y: 50 },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style>
.skills-container {
  display: flex;
  flex-wrap: wrap;
}

:is(.bar-chart, .skills-info) {
  flex: 50%;
}

.accordion-button {
  background: #393e46;
}

.accordion-button:focus {
  background: #222831;
}
</style>
