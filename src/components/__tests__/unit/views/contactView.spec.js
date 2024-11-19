import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import ContacView from "@/views/ContactView.vue";

describe("ContacView", () => {
  test("Probando la existencia de la vista ContacView", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/contac",
          name: "ContacViewVue",
          component: ContacView,
        },
      ],
    });

    router.push("/contact");
    await router.isReady();

    const wrapper = mount(ContacView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(ContacView).exists()).toBe(true);
  });
});