
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PatientRecord } from '@/types/patient';

interface PatientFormProps {
  onSubmit: (data: PatientRecord) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit }) => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState<PatientRecord>({
    fullName: '',
    address: '',
    phoneNumber: '',
    emailId: '',
    aadhaarNumber: '',
    hospitalId: '',
    dateOfBirth: '',
    admissionDate: '',
    dischargeDate: '',
    diagnosis: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    onSubmit(formData);
    setFormData({
      fullName: '',
      address: '',
      phoneNumber: '',
      emailId: '',
      aadhaarNumber: '',
      hospitalId: '',
      dateOfBirth: '',
      admissionDate: '',
      dischargeDate: '',
      diagnosis: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter complete address"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="emailId">Email ID</Label>
          <Input
            id="emailId"
            name="emailId"
            type="email"
            value={formData.emailId}
            onChange={handleInputChange}
            placeholder="Enter email address"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="aadhaarNumber">Aadhaar Number</Label>
          <Input
            id="aadhaarNumber"
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleInputChange}
            placeholder="Enter Aadhaar number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hospitalId">Hospital ID</Label>
          <Input
            id="hospitalId"
            name="hospitalId"
            value={formData.hospitalId}
            onChange={handleInputChange}
            placeholder="Enter hospital ID"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="admissionDate">Admission Date</Label>
          <Input
            id="admissionDate"
            name="admissionDate"
            type="date"
            value={formData.admissionDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dischargeDate">Discharge Date</Label>
          <Input
            id="dischargeDate"
            name="dischargeDate"
            type="date"
            value={formData.dischargeDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="diagnosis">Diagnosis</Label>
          <Input
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            placeholder="Enter diagnosis"
          />
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button type="submit">Add Patient Record</Button>
      </div>
    </form>
  );
};

export default PatientForm;
