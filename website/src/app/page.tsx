import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhatIsSahajYoga from "@/components/WhatIsSahajYoga";
import ResearchStats from "@/components/ResearchStats";
import BrainScience from "@/components/BrainScience";
import StudentBenefits from "@/components/StudentBenefits";
import GovApprovals from "@/components/GovApprovals";
import MedicalConferences from "@/components/MedicalConferences";
import VideoSection from "@/components/VideoSection";
import ForSchools from "@/components/ForSchools";
import TalksResources from "@/components/TalksResources";
import CTAForm from "@/components/CTAForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <WhatIsSahajYoga />
      <ResearchStats />
      <BrainScience />
      <StudentBenefits />
      <GovApprovals />
      <MedicalConferences />
      <VideoSection />
      <TalksResources />
      <ForSchools />
      <CTAForm />
    </div>
  );
}
