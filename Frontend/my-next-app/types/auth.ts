export interface SighnupReq {
    name:string,
    email:string,
    password:string,
    teamname:string,
    role:"Testing" | "Manager" | "TeamLead" | "Developer"
};

export interface LoginReq {
    email:string,
    password:string
};

