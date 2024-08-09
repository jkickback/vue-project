export default class UserPermission {
  CanEdit: boolean | undefined
  CanDelete: boolean | undefined
  CanExport: boolean | undefined
  CanImport: boolean | undefined

  constructor(userPermission: UserPermission) {
    this.CanEdit = userPermission.CanEdit
    this.CanDelete = userPermission.CanDelete
    this.CanExport = userPermission.CanExport
    this.CanImport = userPermission.CanImport
  }
}