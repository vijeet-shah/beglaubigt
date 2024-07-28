
export interface Recipient {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    kycStatus: 'KYC needed' | 'KYC completed' | 'KYC failed';
    phone: string;
    streetAddress: string;
    postalCode: string;
    country: string;
    additionalAddress?: string;
  }
  
  export interface Chronik {
    id: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    kycStatusChange?: string;
    statusNotarizedChange?: string;
    statusShippingChange?: string;
  }
  
  export interface Auftrag {
    id: string;
    name: string;
    type: string;
    jurisdiction: string;
    updatedAt: string;
    createdAt: string;
    recipients: string[];
    status: 'Erstellen' | 'Signieren' | 'Beglaubigen' | 'Fertiggestellt';
  }
  
  export interface Document {
    id: string;
    name: string;
    statusShipping: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    statusNotarized: string;
  }
  
  export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
    role: 'admin' | 'user';
  }
  
  export interface Organization {
    id: string;
    name: string;
    members: string[];
  }