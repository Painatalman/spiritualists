import { useState, useEffect } from 'react';
import axios from 'axios';

type SpiritualistData = {
  name: string;
  description: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

function useSpiritualistData() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(function loadName() {
    axios.get(`${apiUrl}name`).then(({ data }) => setName(data));
  }, []);

  useEffect(
    function loadDescription() {
      if (!name) return;
      axios
        .get(`${apiUrl}description`, {
          params: {
            name,
          },
        })
        .then(({ data }) => {
          setDescription(data);
          setLoading(false);
        });
    },
    [name]
  );

  return {
    loading,
    error,
    spiritualist: { name, description },
  };
}

export default useSpiritualistData;
