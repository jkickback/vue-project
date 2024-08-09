export default class User {
    Id: number | undefined
    Username: string | undefined
    Email: string | undefined
    Role: string | undefined
    FirstName: string | undefined
    LastName: string | undefined

    constructor(user: User) {
        this.Id = user.Id
        this.Username = user.Username
        this.Email = user.Email
        this.Role = user.Role
        this.FirstName = user.FirstName
        this.LastName = user.LastName
    }
}