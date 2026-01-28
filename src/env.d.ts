/// <reference types="astro/client" />

interface Window {
  // Modal functions
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  
  // Skills
  editSkill: (skill: any) => void;
  deleteSkill: (id: number) => Promise<void>;
  submitSkillForm: (modalId: string) => Promise<void>;
  
  // Projects
  editProject: (project: any) => void;
  deleteProject: (id: number) => Promise<void>;
  submitProjectForm: (modalId: string) => Promise<void>;
  
  // Experiences
  editExperience: (exp: any) => void;
  deleteExperience: (id: number) => Promise<void>;
  submitExperienceForm: (modalId: string) => Promise<void>;
  
  // Education
  editEducation: (edu: any) => void;
  deleteEducation: (id: number) => Promise<void>;
  submitEducationForm: (modalId: string) => Promise<void>;
  
  // Certifications
  editCertification: (cert: any) => void;
  deleteCertification: (id: number) => Promise<void>;
  submitCertificationForm: (modalId: string) => Promise<void>;
}
