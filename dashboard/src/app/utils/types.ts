export interface LoginCredentials {
    username: string;
    password: string;
  }

  export interface MilkRecord {
    first_name : string;
    last_name : string;
    milk_quantity: number;
    price: number;
    total_value: number;
  }


  
export interface Farmer {
    id: number;
    date_registered: string;
  }

  export interface MilkRecord {
    id: number;
    farmer: number;
    date: string;
    quantity: number;
    price: number;
  }

  export interface CooperativeData {
    totalFarmers: number;
    activeFarmers: number;
    inactiveFarmers: number;
    registeredFarmersData: number[];
    milkProductionData: number[];
    totalPriceData: number[];
  }

  export interface Farmers {
    first_name: string;
    last_name: string;
    cooperative_number: string;
    phone_number: string;
    created_at: string;
  }
  
  export interface NewFarmer {
    first_name: string;
    last_name: string;
    phone_number: string;
   cooperative_id:string;
   sacco_id:number;
  }
  
  export interface Cooperative {
    cooperative_id: number; 
    cooperative_name: string;
  }
  
  export interface Sacco {
    sacco_id: number; 
    sacco_name: string;
  }
  

  export interface CooperativesAndSaccos {
    cooperatives: Cooperative[];
    saccos: Sacco[];
  }
  export interface userData {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    role: string;
    password: string;
  }

  export interface RegistrationErrorResponse {
    error: string;
    details?:{
        field?: string;
        message?: string;
    };
}
export interface RegistrationSuccessResponse {
    message: string;
    users: userData[];
}



export interface MilkRecords {
  farmerId: number;
  farmer: number;
  date: string;
  quantity: number;
  price: number;
}


  