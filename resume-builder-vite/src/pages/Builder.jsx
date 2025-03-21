import React from 'react';
import { useResume } from '../context/ResumeContext';
import PersonalInfoForm from '../components/resume/PersonalInfoForm';
import SummaryForm from '../components/resume/SummaryForm';
import ExperienceForm from '../components/resume/ExperienceForm';
import EducationForm from '../components/resume/EducationForm';
import SkillsForm from '../components/resume/SkillsForm';
import ProjectsForm from '../components/resume/ProjectsForm';
import LanguagesForm from '../components/resume/LanguagesForm';
import TemplateSelector from '../components/resume/TemplateSelector';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Builder = () => {
  const { resetResume } = useResume();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <PersonalInfoForm />
          <SummaryForm />
          <ExperienceForm />
          <EducationForm />
          <SkillsForm />
          <ProjectsForm />
          <LanguagesForm />
        </div>
        <div className="lg:col-span-1">
          <TemplateSelector />
          <div className="mt-6 space-y-4">
            <Link to="/preview">
              <Button fullWidth>Preview Resume</Button>
            </Link>
            <Button
              variant="secondary"
              fullWidth
              onClick={resetResume}
            >
              Reset Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;