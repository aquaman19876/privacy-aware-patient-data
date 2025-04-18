import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';
import { deidentifyRecord } from '@/utils/deidentification';
import PatientForm from '@/components/PatientForm';
import RecordsTable from '@/components/RecordsTable';
import BulkAddPatients from '@/components/BulkAddPatients';
import ReviewRecords from '@/components/ReviewRecords';

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
  const [deidentifiedRecords, setDeidentifiedRecords] = React.useState<DeidentifiedRecord[]>([]);
  const [showDeidentified, setShowDeidentified] = React.useState(false);

  const handleAddRecord = (record: PatientRecord) => {
    setOriginalRecords(prev => [...prev, record]);
  };

  const handleAddBulkRecords = (records: PatientRecord[]) => {
    setOriginalRecords(prev => [...prev, ...records]);
  };

  const handleDeidentify = (records: PatientRecord[]) => {
    const deidentified = records.map(record => deidentifyRecord(record));
    setDeidentifiedRecords(deidentified);
    setShowDeidentified(true);
    return deidentified;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Patient Data De-identification System
        </h1>
        
        {!showDeidentified ? (
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="single">Add Single Patient</TabsTrigger>
              <TabsTrigger value="bulk">Bulk Add Patients</TabsTrigger>
            </TabsList>
            <TabsContent value="single">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Add New Patient Record</h2>
                <PatientForm onSubmit={handleAddRecord} />
              </div>
            </TabsContent>
            <TabsContent value="bulk">
              <BulkAddPatients onSubmit={handleAddBulkRecords} />
            </TabsContent>

            {originalRecords.length > 0 && (
              <div className="mt-8">
                <ReviewRecords 
                  records={originalRecords} 
                  onDeidentify={handleDeidentify}
                />
              </div>
            )}
          </Tabs>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">De-identified Patient Records</h2>
            <RecordsTable records={deidentifiedRecords} type="deidentified" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
