import type AdminField from './admin-field'

export default class AdminForm {
  Name: string | undefined
  Description: string | undefined
  Fields: AdminField[] | undefined
  SubmitLabel: string | 'Save' | undefined
  CancelLabel: string | 'Cancel' | undefined
  Columns: number | 1 | 2 | 3 | 4 | undefined

  constructor(form: AdminForm) {
    this.Name = form.Name
    this.Description = form.Description
    this.Fields = form.Fields
    this.SubmitLabel = form.SubmitLabel
    this.CancelLabel = form.CancelLabel
    this.Columns = form.Columns
  }
}
