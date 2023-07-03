export interface ApplicationContextType {
  email: EmailData;
  setEmail: (email: string | null) => void;
}

export interface ApplicationContextProviderProps {
  children: React.ReactNode;
}

export interface EmailData {
  currentEmail: string | null;
  setEmail: (newEmail: string | null) => void;
}
