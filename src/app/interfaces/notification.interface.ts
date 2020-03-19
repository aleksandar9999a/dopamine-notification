export interface INotification {
    id?: string,
    type: string,
    image?: string,
    title: string,
    text?: string,
    time: object,
    expires?: number,
    link?: string,
    requirement?: string
}