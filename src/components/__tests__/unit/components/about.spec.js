import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import About from '@/views/AboutView.vue';

describe('About.vue', () => {
  it('Debe coincidir con el snapshot', () => {
    const wrapper = mount(About);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Debe tener texto alternativo para todas las imágenes', () => {
    const wrapper = mount(About);
    const images = wrapper.findAll('img');
    
    images.forEach(img => {
      expect(img.attributes('alt')).toBeTruthy();
      expect(img.attributes('alt').trim()).not.toHaveLength(0);
    });
  });

  it('Los títulos de las secciones deben ser etiquetas h2', () => {
    const wrapper = mount(About);
    const sections = wrapper.findAll('section');
    
    sections.forEach(section => {
      const h2 = section.find('h2');
      expect(h2.exists()).toBe(true);
    });
  });
});
