export interface ApplicationContextType {
  email: EmailData;
  setEmail: (email: string) => void;
}

export interface ApplicationContextProviderProps {
  children: React.ReactNode;
}

export interface EmailData {
  currentEmail?: string;
  setEmail: (newEmail: string) => void;
}
