
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';

let patientIdCounter = 1;
let eventIdCounter = 1;
const patientMap = new Map<string, string>();

export const deidentifyRecord = (record: PatientRecord): DeidentifiedRecord => {
  // Extract city from address
  const city = record.address.split(',').map(s => s.trim())[2] || 'Unknown';
  
  // Calculate age
  const birthDate = new Date(record.dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  // Generate or retrieve patient ID
  let patientId = patientMap.get(record.aadhaarNumber);
  if (!patientId) {
    patientId = `Patient_${String(patientIdCounter).padStart(3, '0')}`;
    patientMap.set(record.aadhaarNumber, patientId);
    patientIdCounter++;
  }

  // Generate event ID
  const eventId = `Event_${String(eventIdCounter).padStart(3, '0')}`;
  eventIdCounter++;

  return {
    patientId,
    eventId,
    city,
    age,
    admissionEvent: record.admissionDate,
    dischargeEvent: record.dischargeDate,
    diagnosis: record.diagnosis
  };
};
