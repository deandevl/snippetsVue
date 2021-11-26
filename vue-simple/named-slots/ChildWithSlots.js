export default {
  name: 'ChildWithSlots',
  template: `
    <div>
      <slot name="headerSlot">The Default Header Slot</slot>
      <p><slot name="contentSlot">The Default Content Slot</slot></p>
      <p style="color: red"><slot>Unnamed 'default' slot</slot></p>
    </div>
  `
}