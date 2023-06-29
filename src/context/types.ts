export interface ApplicationContextType {
  email: string | null;
  setEmail: (email: string | null) => void;
}

export interface ApplicationContextProviderProps {
  children: React.ReactNode;
}
