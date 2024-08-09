import type { AdminFieldType } from '@/enums/admin-field-type'
import type SelectOption from '@/models/select-option'

export default class AdminField {
  Name: string | undefined
  Type: AdminFieldType | undefined
  Value: string | number | undefined
  Label: string | undefined
  Placeholder?: string | undefined
  Required?: boolean | undefined
  Options?: SelectOption[] | undefined

  constructor(adminField: AdminField) {
    this.Name = adminField.Name
    this.Type = adminField.Type
    this.Value = adminField.Value
    this.Label = adminField.Label
    this.Placeholder = adminField.Placeholder
    this.Required = adminField.Required
    this.Options = adminField.Options
  }
}
