export interface TranslationShape {
  nav: {
    whatIs: string;
    research: string;
    benefits: string;
    schools: string;
    contact: string;
  };
  hero: {
    label: string;
    headline: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credential: string;
  };
  whatIs: {
    title: string;
    subtitle: string;
    body1: string;
    body2: string;
    learnMore: string;
    watchVideo: string;
  };
  stats: {
    title: string;
    subtitle: string;
  };
  brainScience: {
    label: string;
    title: string;
    description: string;
    prefrontalCortex: string;
    prefrontalCortexDesc: string;
    amygdala: string;
    amygdalaDesc: string;
    frontalLobe: string;
    frontalLobeDesc: string;
    limbicSystem: string;
    limbicSystemDesc: string;
    mentalClutter: string;
    mentalClutterDesc: string;
    chemicals: {
      endorphinsTitle: string;
      endorphinsDesc: string;
      dopamineTitle: string;
      dopamineDesc: string;
      serotoninTitle: string;
      serotoninDesc: string;
      melatoninTitle: string;
      melatoninDesc: string;
    };
    quote: string;
    quoteAuthor: string;
    supportingText: string;
  };
  studentBenefits: {
    title: string;
    subtitle: string;
    cards: {
      number: string;
      label: string;
      title: string;
      desc: string;
    }[];
  };
  govApprovals: {
    label: string;
    title: string;
    description: string;
    states: {
      state: string;
      badge: string;
      schools: string;
      schoolLabel: string;
      students: string;
      studentLabel: string;
      detail: string;
      year: string;
    }[];
    disclaimer: string;
    downloadLabel: string;
    puneZPName: string;
    puneZPDesc: string;
    schoolLetterName: string;
    schoolLetterDesc: string;
  };
  medicalConferences: {
    title: string;
    subtitle: string;
    conferences: {
      title: string;
      host: string;
      year: string;
      detail: string;
    }[];
  };
  videoSection: {
    title: string;
    subtitle: string;
  };
  talksResources: {
    title: string;
    subtitle: string;
    categories: {
      title: string;
      desc: string;
    }[];
  };
  forSchools: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    schoolPlaceholder: string;
    phonePlaceholder: string;
    submit: string;
    downloading: string;
  };
  footer: {
    tagline: string;
  };
}
