import { mount } from '@cypress/vue'
import Component from '../../src/components/Test'

describe('Basic test', () => {
  it('renders a message', () => {
    const msg = 'FOO'
    mount(Component, {
      propsData: {
        msg
      }
    })
    cy.get('h1').should('have.text', msg)
  })
})
