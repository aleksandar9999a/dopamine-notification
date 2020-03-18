export interface INotification {
    id: string,
    type: string,
    image: string,
    title: string,
    text?: string,
    time?: object,
    expires?: string,
    link?: string,
    requirement?: string
}