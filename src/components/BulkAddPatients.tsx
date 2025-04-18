
import React from 'react';
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import PatientForm from './PatientForm';
import { PatientRecord } from '@/types/patient';

interface BulkAddPatientsProps {
  onSubmit: (records: PatientRecord[]) => void;
}

const BulkAddPatients: React.FC<BulkAddPatientsProps> = ({ onSubmit }) => {
  const [patients, setPatients] = React.useState<PatientRecord[]>([]);
  const { toast } = useToast();

  const handleAddPatient = (patient: PatientRecord) => {
    setPatients(prev => [...prev, patient]);
    toast({
      title: "Patient Added",
      description: "Patient details have been added to the bulk list.",
    });
  };

  const handleSubmitAll = () => {
    if (patients.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one patient record.",
        variant: "destructive"
      });
      return;
    }
    onSubmit(patients);
    setPatients([]);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add Multiple Patient Records</h2>
        <PatientForm onSubmit={handleAddPatient} />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Added Patients ({patients.length})</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {patients.map((patient, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-medium">{patient.fullName}</h4>
              <p className="text-sm text-gray-600">{patient.hospitalId}</p>
            </div>
          ))}
        </div>
        {patients.length > 0 && (
          <Button 
            onClick={handleSubmitAll}
            className="w-full md:w-auto"
          >
            Submit All Records
          </Button>
        )}
      </div>
    </div>
  );
};

export default BulkAddPatients;
