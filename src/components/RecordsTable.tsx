
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';

interface RecordsTableProps {
  records: PatientRecord[] | DeidentifiedRecord[];
  type: 'original' | 'deidentified';
}

const RecordsTable: React.FC<RecordsTableProps> = ({ records, type }) => {
  const getHeaders = () => {
    if (type === 'original') {
      return [
        'Full Name',
        'Address',
        'Phone Number',
        'Email ID',
        'Aadhaar Number',
        'Hospital ID',
        'Date of Birth',
        'Admission Date',
        'Discharge Date',
        'Diagnosis'
      ];
    }
    return [
      'Patient ID',
      'Event ID',
      'City',
      'Age',
      'Admission Event',
      'Discharge Event',
      'Diagnosis'
    ];
  };

  const getCells = (record: PatientRecord | DeidentifiedRecord) => {
    if (type === 'original') {
      const originalRecord = record as PatientRecord;
      return (
        <>
          <TableCell>{originalRecord.fullName}</TableCell>
          <TableCell>{originalRecord.address}</TableCell>
          <TableCell>{originalRecord.phoneNumber}</TableCell>
          <TableCell>{originalRecord.emailId}</TableCell>
          <TableCell>{originalRecord.aadhaarNumber}</TableCell>
          <TableCell>{originalRecord.hospitalId}</TableCell>
          <TableCell>{originalRecord.dateOfBirth}</TableCell>
          <TableCell>{originalRecord.admissionDate}</TableCell>
          <TableCell>{originalRecord.dischargeDate}</TableCell>
          <TableCell>{originalRecord.diagnosis}</TableCell>
        </>
      );
    }
    const deidentifiedRecord = record as DeidentifiedRecord;
    return (
      <>
        <TableCell>{deidentifiedRecord.patientId}</TableCell>
        <TableCell>{deidentifiedRecord.eventId}</TableCell>
        <TableCell>{deidentifiedRecord.city}</TableCell>
        <TableCell>{deidentifiedRecord.age}</TableCell>
        <TableCell>{deidentifiedRecord.admissionEvent}</TableCell>
        <TableCell>{deidentifiedRecord.dischargeEvent}</TableCell>
        <TableCell>{deidentifiedRecord.diagnosis}</TableCell>
      </>
    );
  };

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {getHeaders().map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record, index) => (
            <TableRow key={index}>
              {getCells(record)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecordsTable;
