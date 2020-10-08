export interface IEvent {
    entityId: string
    data: any
}

export interface result {
    data: Array<any>
    token: string
}

export function join(a: any, b: any): any {
    (a as result).data.push(...(b as result).data);
    (a as result).token = (b as result).token;
    return a;
}