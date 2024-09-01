// hooks/useLogOut.js

import { useRouter } from 'next/router';
import { AuthService } from '@/services/auth.service';

const useLogOut = () => {
  const logOut = () => {
    try {
      AuthService.logout();
      window.location.href = '/auth/login';
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return logOut;
};

export default useLogOut;
