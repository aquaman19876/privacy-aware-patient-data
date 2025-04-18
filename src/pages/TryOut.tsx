
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PatientRecord } from '@/types/patient';
import PatientForm from '@/components/PatientForm';
import BulkAddPatients from '@/components/BulkAddPatients';
import { ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const TryOut = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [records, setRecords] = React.useState<PatientRecord[]>([]);

  const handleAddRecord = (record: PatientRecord) => {
    setRecords(prev => [...prev, record]);
    toast({
      title: "Success",
      description: "Patient record added successfully.",
    });
    navigate('/review');
  };

  const handleAddBulkRecords = (newRecords: PatientRecord[]) => {
    setRecords(prev => [...prev, ...newRecords]);
    toast({
      title: "Success",
      description: "Patient records added successfully.",
    });
    navigate('/review');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-8">
      <div className="container mx-auto px-4">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Tabs defaultValue="single" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="single">Add Single Patient</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Add Patients</TabsTrigger>
          </TabsList>
          <TabsContent value="single">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-purple-900">Add New Patient Record</h2>
              <PatientForm onSubmit={handleAddRecord} />
            </div>
          </TabsContent>
          <TabsContent value="bulk">
            <BulkAddPatients onSubmit={handleAddBulkRecords} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TryOut;
