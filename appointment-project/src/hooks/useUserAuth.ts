import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useUserAuth = () => {
  const navigate = useNavigate();
  const { user, loading, error } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (error) return;

    if (user && user.uid && user.uid.trim() !== '') {
      navigate('/profile');
      return;
    }
  }, [user, loading, error, navigate]);

  return {
    user,
    loading,
    error,
    isAuthenticated: !loading && user && user.uid && user.uid.trim() !== '',
  };
};

// Hook para proteger rutas privadas
export const useProtectedRoute = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !user.uid || user.uid.trim() === '')) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  return {
    user,
    loading,
    isAuthenticated: !loading && user && user.uid && user.uid.trim() !== '',
  };
};