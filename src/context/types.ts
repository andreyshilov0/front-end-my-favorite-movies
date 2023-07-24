export interface ApplicationContextType {
  email: EmailData;
  language: LanguageData;
  setEmail: (email: string) => void;
}


export interface ApplicationContextProviderProps {
  children: React.ReactNode;
}

export interface EmailData {
  currentEmail?: string;
  setEmail: (newEmail: string) => void;
}

export interface LanguageData {
  currentLanguage?: string;
  setLanguage: (newLanguage: string) => void;
}
