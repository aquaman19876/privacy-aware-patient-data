
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

const UnderstandDeidentification = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Understanding De-identification</h1>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Step 1: PII/PHI Identification</h2>
              <p className="text-gray-600">We first identify all Personal Identifiable Information (PII) and Protected Health Information (PHI) in the records, including:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Direct identifiers (name, phone, email)</li>
                <li>Indirect identifiers (address details, dates)</li>
                <li>Government IDs (Aadhaar number)</li>
                <li>Institutional identifiers (Hospital ID)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Step 2: De-identification Strategy</h2>
              <p className="text-gray-600">We apply different strategies to protect privacy:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Removal of direct identifiers</li>
                <li>Generalization of location data (keeping only city)</li>
                <li>Pseudonymization of IDs (replacing with Patient_XXX format)</li>
                <li>Age calculation instead of exact birth dates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Step 3: Data Transformation</h2>
              <p className="text-gray-600">The system creates:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Unique Patient IDs for consistent tracking</li>
                <li>Event IDs for each hospital visit</li>
                <li>Generalized demographic information</li>
                <li>Preserved medical data for research value</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Step 4: Quality Assurance</h2>
              <p className="text-gray-600">The system ensures:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>No residual identifying information</li>
                <li>Maintained data utility for research</li>
                <li>Consistent patient tracking across visits</li>
                <li>Secure storage of de-identified data</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderstandDeidentification;
