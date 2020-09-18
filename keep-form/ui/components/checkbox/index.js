import { TYPE } from '../../../core/types'
import { isFunction } from '../../../core/utils'

export default {
  name: TYPE.CHECKBOX,
  inheritAttrs: false,
  render(h) {
    return (
      <CheckboxGroup {...{ props: this.$attrs, on: this.$listeners}}  on-input = { e => this.$emit('input', e) }>
        { this.$attrs.$data.map(item => <Checkbox label = { item.id } disabled = { item.disabled }>{ item.render ? isFunction(item.render) ? item.render() : item.render : item.name }</Checkbox>) }
      </CheckboxGroup>
    )
  }
}