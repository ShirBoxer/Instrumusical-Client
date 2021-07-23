export interface User{
    _id: string,
    email: string,
    name: string
    // password: string, // omitted due to JWT
    isAdmin: boolean,
    // connected: boolean // omitted due to JWT
}