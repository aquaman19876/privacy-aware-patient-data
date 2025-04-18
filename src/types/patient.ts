
export interface PatientRecord {
  id?: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  emailId: string;
  aadhaarNumber: string;
  hospitalId: string;
  dateOfBirth: string;
  admissionDate: string;
  dischargeDate: string;
  diagnosis: string;
}

export interface DeidentifiedRecord {
  patientId: string;
  eventId: string;
  city: string;
  age: number;
  admissionEvent: string;
  dischargeEvent: string;
  diagnosis: string;
}
