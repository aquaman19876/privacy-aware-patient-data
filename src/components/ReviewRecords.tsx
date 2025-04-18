
import React from 'react';
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';
import { Shield, Loader2, Info, Plus, ArrowLeft, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

interface ReviewRecordsProps {
  records: PatientRecord[];
  onDeidentify: (records: PatientRecord[]) => DeidentifiedRecord[];
}

const ReviewRecords: React.FC<ReviewRecordsProps> = ({ records, onDeidentify }) => {
  const [isDeidentifying, setIsDeidentifying] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDeidentify = async () => {
    setIsDeidentifying(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const deidentified = onDeidentify(records);
    setIsDeidentifying(false);
    toast({
      title: "Success",
      description: "Records have been successfully de-identified.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h2 className="text-2xl font-semibold text-purple-900">Review Patient Records</h2>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => navigate('/try-out')}
            variant="outline"
            className="bg-white hover:bg-gray-50"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add More Patients
          </Button>
          <Button
            onClick={handleDeidentify}
            disabled={isDeidentifying}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 shadow-md"
          >
            {isDeidentifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                De-identifying...
              </>
            ) : (
              <>
                <Shield className="mr-2 h-4 w-4" />
                De-identify Records
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="bg-purple-50/50 rounded-lg p-4 flex items-center gap-3 text-purple-700 mb-6">
        <Info className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm">
          Click on any patient card to view more information or review their details. 
          You can also edit patient information before de-identification.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {records.map((record, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer hover:shadow-lg transition-all duration-200 ${
              showDetails === index ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setShowDetails(showDetails === index ? null : index)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">{record.fullName}</h3>
                  <p className="text-sm text-gray-600">Hospital ID: {record.hospitalId}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:text-purple-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add edit functionality here
                    toast({
                      title: "Edit mode",
                      description: "Editing functionality coming soon.",
                    });
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            {showDetails === index && (
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium text-gray-700">Address:</span> <span className="text-gray-600">{record.address}</span></p>
                  <p><span className="font-medium text-gray-700">Phone:</span> <span className="text-gray-600">{record.phoneNumber}</span></p>
                  <p><span className="font-medium text-gray-700">Email:</span> <span className="text-gray-600">{record.emailId}</span></p>
                  <p><span className="font-medium text-gray-700">Admission:</span> <span className="text-gray-600">{record.admissionDate}</span></p>
                  <p><span className="font-medium text-gray-700">Discharge:</span> <span className="text-gray-600">{record.dischargeDate}</span></p>
                  <p><span className="font-medium text-gray-700">Diagnosis:</span> <span className="text-gray-600">{record.diagnosis}</span></p>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewRecords;
