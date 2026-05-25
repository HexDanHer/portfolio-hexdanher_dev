// frontend/src/hooks/useContact.js

import { useState } from 'react';
import axios from 'axios';

export default function useContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState(null);

  const sendMessage = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post('/api/contact', formData);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al enviar el mensaje. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, success, error };
}
