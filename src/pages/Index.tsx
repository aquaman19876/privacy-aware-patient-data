
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';
import { deidentifyRecord } from '@/utils/deidentification';
import PatientForm from '@/components/PatientForm';
import RecordsTable from '@/components/RecordsTable';

const demoData: PatientRecord[] = [
  {
    fullName: "Priya Sharma",
    address: "123, Lotus Apartments, Sector 45, Gurugram, Haryana, 122003",
    phoneNumber: "+91-9876543210",
    emailId: "priya.sharma@email.com",
    aadhaarNumber: "1234-5678-9123",
    hospitalId: "HOSP12345",
    dateOfBirth: "1990-05-14",
    admissionDate: "2024-02-20",
    dischargeDate: "2024-02-28",
    diagnosis: "Type 2 Diabetes"
  },
  {
    fullName: "Priya Sharma",
    address: "123, Lotus Apartments, Sector 45, Gurugram, Haryana, 122003",
    phoneNumber: "+91-9876543210",
    emailId: "priya.sharma@email.com",
    aadhaarNumber: "1234-5678-9123",
    hospitalId: "HOSP12345",
    dateOfBirth: "1990-05-14",
    admissionDate: "2024-06-15",
    dischargeDate: "2024-06-18",
    diagnosis: "Hypertension"
  },
  {
    fullName: "Raj Patel",
    address: "456, Marine Lines, Mumbai, Maharashtra, 400020",
    phoneNumber: "+91-8765432109",
    emailId: "raj.patel@email.com",
    aadhaarNumber: "5678-9123-4567",
    hospitalId: "HOSP67890",
    dateOfBirth: "1979-08-22",
    admissionDate: "2024-03-10",
    dischargeDate: "2024-03-15",
    diagnosis: "Chronic Asthma"
  }
];

const Index = () => {
  const [originalRecords, setOriginalRecords] = React.useState<PatientRecord[]>(demoData);
  const [deidentifiedRecords, setDeidentifiedRecords] = React.useState<DeidentifiedRecord[]>(
    demoData.map(record => deidentifyRecord(record))
  );

  const handleAddRecord = (record: PatientRecord) => {
    setOriginalRecords(prev => [...prev, record]);
    setDeidentifiedRecords(prev => [...prev, deidentifyRecord(record)]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Patient Data De-identification System
        </h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Patient Record</h2>
          <PatientForm onSubmit={handleAddRecord} />
        </div>

        <Tabs defaultValue="original" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="original">Original Records</TabsTrigger>
            <TabsTrigger value="deidentified">De-identified Records</TabsTrigger>
          </TabsList>
          <TabsContent value="original">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Original Patient Records</h2>
              <RecordsTable records={originalRecords} type="original" />
            </div>
          </TabsContent>
          <TabsContent value="deidentified">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">De-identified Patient Records</h2>
              <RecordsTable records={deidentifiedRecords} type="deidentified" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
