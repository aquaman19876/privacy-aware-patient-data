import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';
import { deidentifyRecord } from '@/utils/deidentification';
import RecordsTable from '@/components/RecordsTable';
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
  },
  {
    fullName: "Anita Kumar",
    address: "789, Park Avenue, Bangalore, Karnataka, 560001",
    phoneNumber: "+91-7654321098",
    emailId: "anita.kumar@email.com",
    aadhaarNumber: "9123-4567-8901",
    hospitalId: "HOSP13579",
    dateOfBirth: "1985-12-03",
    admissionDate: "2024-01-05",
    dischargeDate: "2024-01-12",
    diagnosis: "Migraine"
  },
  {
    fullName: "Vikram Singh",
    address: "321, Lake View, Chennai, Tamil Nadu, 600002",
    phoneNumber: "+91-6543210987",
    emailId: "vikram.singh@email.com",
    aadhaarNumber: "4567-8901-2345",
    hospitalId: "HOSP24680",
    dateOfBirth: "1972-09-18",
    admissionDate: "2024-04-01",
    dischargeDate: "2024-04-08",
    diagnosis: "Pneumonia"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [deidentifiedRecords, setDeidentifiedRecords] = React.useState<DeidentifiedRecord[]>([]);
  const [showDeidentified, setShowDeidentified] = React.useState(false);

  const handleDeidentify = (records: PatientRecord[]) => {
    const deidentified = records.map(record => deidentifyRecord(record));
    setDeidentifiedRecords(deidentified);
    setShowDeidentified(true);
    return deidentified;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Demo Mode - Patient Records
          </h1>
          <Button
            onClick={() => navigate('/')}
            variant="outline"
          >
            Back to Home
          </Button>
        </div>
        
        {!showDeidentified ? (
          <ReviewRecords 
            records={demoData} 
            onDeidentify={handleDeidentify}
          />
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">De-identified Patient Records</h2>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
              >
                Back to Home
              </Button>
            </div>
            <RecordsTable records={deidentifiedRecords} type="deidentified" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
