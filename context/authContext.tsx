import { createContext, useState, useContext } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  phone: number;
  password: string;
  university: string;
};

type AuthContextType = {
  user: User | null;
  isOnboardingComplete: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  information: (phone: number, university: string) => Promise<void>;
  logout: () => void;
  completeOnboarding: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const login = async (email: string, password: string) => {
    // Fake login
    setUser({
      id: 1,
      name: 'John Doe',
      email,
      password,
      phone: 0,
      university: '',
    });
  };

  const signup = async (email: string, password: string) => {
    // Fake signup
    setUser({
      id: 1,
      name: 'John Doe',
      email,
      password,
      phone: 0,
      university: '',
    });
  };

  const information = async (phone: number, university: string) => {
    if (user) {
      setUser({
        ...user,
        phone,
        university,
      });
    }
  };

  const logout = () => setUser(null);

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isOnboardingComplete,
        login,
        signup,
        information,
        logout,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
