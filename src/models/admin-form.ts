import type AdminField from '@/models/admin-field'

export default class AdminForm {
  Name: string | undefined
  Description: string | undefined
  Fields: AdminField[] | undefined
  SubmitLabel?: string | undefined
  CancelLabel?: string | undefined
  Columns?: number | 1 | 2 | 3 | 4 | undefined
  Entity?: object | undefined

  constructor(form: AdminForm) {
    this.Name = form.Name
    this.Description = form.Description
    this.Fields = form.Fields
    this.SubmitLabel = form.SubmitLabel || 'Save'
    this.CancelLabel = form.CancelLabel || 'Cancel'
    this.Columns = form.Columns
  }
}
