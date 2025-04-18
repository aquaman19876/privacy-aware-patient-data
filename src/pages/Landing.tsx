
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PlayCircle, Rocket, BookOpen } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Patient Data De-identification System
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          <Button
            onClick={() => navigate('/demo')}
            className="w-full md:w-[35%] h-40 text-xl flex flex-col gap-4"
            variant="outline"
          >
            <PlayCircle className="h-12 w-12" />
            Demo Mode
            <span className="text-sm text-gray-500">Try with pre-loaded patient records</span>
          </Button>
          
          <Button
            onClick={() => navigate('/try-out')}
            className="w-full md:w-[35%] h-40 text-xl flex flex-col gap-4"
            variant="outline"
          >
            <Rocket className="h-12 w-12" />
            Try Out Mode
            <span className="text-sm text-gray-500">Start fresh with your own records</span>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <Button
            onClick={() => navigate('/understand')}
            variant="link"
            className="w-full text-lg flex items-center gap-2 mb-8"
          >
            <BookOpen className="h-5 w-5" />
            Understand De-identification Process
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
