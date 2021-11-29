declare const express: any;
declare const fileUpload: any;
declare const cors: any;
declare const morgan: any;
declare const fsExtra: any;
declare const app: any;
declare enum Status {
    NEW = "NEW",
    BOUND = "BOUND"
}
declare let allSubmissions: any[];
declare const usersData: {
    fullName: string;
    password: string;
}[];
declare const port: string | number;
