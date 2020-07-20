import { shallowMount } from '@vue/test-utils'

import People from '../../src/components/People.vue'

describe('People', () => {

  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(People, {
      propsData: {
        people: [
          { name: 'Luke Skywalker', birth_year: '19BBY', height: "172", mass: "77" },
          { name: 'C-3PO', birth_year: '112BBY', height: "167", mass: "75" },
          { name: 'R2-D2', birth_year: '112BZY', height: "160", mass: "76" }
        ]
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should list props data', () => {

    expect(wrapper.findAll('li').length).toEqual(3);

  })

  it('should match props data', () => {

    const expected_result = [
      {
        "birth_year": "19BBY",
        "height": "172",
        "mass": "77",
        "name": "Luke Skywalker",
      },
      {
        "birth_year": "112BBY",
        "height": "167",
        "mass": "75",
        "name": "C-3PO",
      },
      {
        "birth_year": "112BZY",
        "height": "160",
        "mass": "76",
        "name": "R2-D2",
      },
    ]

    expect(wrapper.props().people).toEqual(expected_result)
    expect(wrapper.props('people')).toEqual(expected_result)

  })

  it('should update props data', () => {

    const expected_result = [
      {
        "birth_year": "19BZ",
        "height": "172",
        "mass": "79",
        "name": "Luke Skywalker",
      },
      {
        "birth_year": "112BBY",
        "height": "167",
        "mass": "30",
        "name": "C-3PO",
      },
    ]

    wrapper.setProps({ people: expected_result})
    expect(wrapper.vm.people).toEqual(expected_result)

  })

  it('should render div', () => {

    expect(wrapper.find('does-not-exist').exists()).toBe(false)
    expect(wrapper.findAll('div').exists()).toBe(true)

  })

  it('should find first element value of rendering data', () => {

    expect(wrapper.findAll('li').exists()).toBe(true)
    expect(wrapper.findAll('li').at(0).text()).toBe('Luke Skywalker - 19BBY - 172 - 77')

  })
})