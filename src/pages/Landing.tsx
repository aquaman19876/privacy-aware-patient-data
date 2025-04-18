
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PlayCircle, Rocket, BookOpen } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-purple-900">
          Patient Data De-identification System
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          <Button
            onClick={() => navigate('/demo')}
            className="w-full md:w-[35%] h-48 text-xl flex flex-col gap-4 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <PlayCircle className="h-12 w-12" />
            Demo Mode
            <span className="text-sm text-purple-100">Try with pre-loaded patient records</span>
          </Button>
          
          <Button
            onClick={() => navigate('/try-out')}
            className="w-full md:w-[35%] h-48 text-xl flex flex-col gap-4 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Rocket className="h-12 w-12" />
            Try Out Mode
            <span className="text-sm text-purple-100">Start fresh with your own records</span>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <Button
            onClick={() => navigate('/understand')}
            variant="ghost"
            className="w-full text-lg flex items-center gap-2 mb-8 text-purple-700 hover:text-purple-800 hover:bg-purple-50"
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
