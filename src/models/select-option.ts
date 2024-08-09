export default class SelectOption {
  Value: string | undefined
  Label: string | undefined

  constructor(value: string, label: string) {
    this.Value = value
    this.Label = label
  }
}
