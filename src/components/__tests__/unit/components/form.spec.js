import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
  it('debe mostrar el mensaje de error cuando los campos están vacíos', async () => {
    const wrapper = mount(Form);
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.find('.text-error').exists()).toBe(true);
    expect(wrapper.find('.text-error').text()).toBe('Debes llenar todos los campos');
  });

  it('debe mostrar el mensaje de éxito cuando los campos están llenos', async () => {
    const wrapper = mount(Form);
    await wrapper.setData({ name: 'Juan Perez', email: 'juanp@example.com', comment: 'Es es un comentario' });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.find('.text-success').exists()).toBe(true);
    expect(wrapper.find('.text-success').text()).toBe('Formulario enviado correctamente');
  });

  it('debe limpiar los campos después de un envío exitoso', async () => {
    const wrapper = mount(Form);
    await wrapper.setData({ name: 'Juan Perez', email: 'juanp@example.com', comment: 'Es es un comentario' });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.vm.name).toBe('');
    expect(wrapper.vm.email).toBe('');
    expect(wrapper.vm.comment).toBe('');
  });
});