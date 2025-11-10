export interface Notification{
    userId:       string;
    deviceToken:  string;
    title:        string;
    body:         string;
    isRead:       boolean;
    orderId:      null;
    orderNumber:  null;
    creationTime: Date;
}