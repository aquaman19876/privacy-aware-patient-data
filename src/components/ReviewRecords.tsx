
import React from 'react';
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { PatientRecord, DeidentifiedRecord } from '@/types/patient';
import { Shield, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReviewRecordsProps {
  records: PatientRecord[];
  onDeidentify: (records: PatientRecord[]) => DeidentifiedRecord[];
}

const ReviewRecords: React.FC<ReviewRecordsProps> = ({ records, onDeidentify }) => {
  const [isDeidentifying, setIsDeidentifying] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState<number | null>(null);
  const { toast } = useToast();

  const handleDeidentify = async () => {
    setIsDeidentifying(true);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    const deidentified = onDeidentify(records);
    setIsDeidentifying(false);
    toast({
      title: "Success",
      description: "Records have been successfully de-identified.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Review Patient Records</h2>
        <Button
          onClick={handleDeidentify}
          disabled={isDeidentifying}
          size="lg"
          className="bg-purple-600 hover:bg-purple-700"
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {records.map((record, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setShowDetails(showDetails === index ? null : index)}
          >
            <CardHeader>
              <h3 className="text-lg font-semibold">{record.fullName}</h3>
              <p className="text-sm text-gray-600">Hospital ID: {record.hospitalId}</p>
            </CardHeader>
            {showDetails === index && (
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Address:</span> {record.address}</p>
                  <p><span className="font-medium">Phone:</span> {record.phoneNumber}</p>
                  <p><span className="font-medium">Email:</span> {record.emailId}</p>
                  <p><span className="font-medium">Admission:</span> {record.admissionDate}</p>
                  <p><span className="font-medium">Diagnosis:</span> {record.diagnosis}</p>
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
