export class EmployeeModel{
    fname?:string = undefined;
    mname?:string = undefined;
    lname?:string = undefined;
    gender?:string = undefined;
    dob?:string = undefined;
    mobileNumber?:number = undefined;
    address?:AddressModel = new AddressModel();
    role?:string = undefined;
    timePreference?:string = undefined;
}

export class AddressModel{
    street?:string = undefined;
    city?:string = undefined;
    state?:string = undefined;
    postalCode?:number = undefined;
}