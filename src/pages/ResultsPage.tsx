import React from 'react';
import { Results } from '../components/Results';
import { Journey } from '../components/Journey';
import { YouTubeSection } from '../components/YouTubeSection';

export const ResultsPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Results />
      <Journey />
      <YouTubeSection />
    </div>
  );
};
export default ResultsPage;
