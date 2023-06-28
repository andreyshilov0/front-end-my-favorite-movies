export interface EmailContextType {
  email: string | null;
  setEmail: (email: string | null) => void;
}

export interface EmailProviderProps {
  children: React.ReactNode;
}
