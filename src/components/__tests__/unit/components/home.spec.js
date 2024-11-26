import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HomeView from '@/views/HomeView.vue';
import Footer from '@/components/Footer.vue';

describe('HomeView.vue', () => {
  it('debe renderizar el encabezado con el texto correcto', () => {
    const wrapper = mount(HomeView);
    const header = wrapper.find('header h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Test Unitarios en Vue con Vitest');
  });

  it('debe renderizar la imagen con el atributo alt correcto', () => {
    const wrapper = mount(HomeView);
    const img = wrapper.find('header img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('alt')).toBe('Testing en Vue con Vitest');
  });

  it('debe renderizar el componente Footer', () => {
    const wrapper = mount(HomeView);
    const footer = wrapper.findComponent(Footer);
    expect(footer.exists()).toBe(true);
  });

  it('debe verificar que todas las imágenes tengan texto en el atributo alt', () => {
    const wrapper = mount(HomeView);
    const images = wrapper.findAll('img');
    
    images.forEach(img => {
      expect(img.attributes('alt')).toBeTruthy();
      expect(img.attributes('alt').trim()).not.toHaveLength(0);
    });
  });

  it('debe verificar que cada sección tenga un título h2', () => {
    const wrapper = mount(HomeView);
    const sections = wrapper.findAll('section');

    sections.forEach(section => {
      const h2 = section.find('h2');
      expect(h2.exists()).toBe(true);
    });
  });

  // Nueva prueba para crear un snapshot del componente
  it('debe crear un snapshot del componente', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
