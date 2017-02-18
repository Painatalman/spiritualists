import { useState, useEffect } from 'react';
import axios from 'axios';

type SpiritualistData = {
  name: string;
  description: string;
};

function useSpiritualistData() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(function loadName() {
    axios
      .get('http://localhost:3000/api/name')
      .then(({ data }) => setName(data));
  }, []);

  useEffect(
    function loadDescription() {
      if (!name) return;
      axios
        .get('http://localhost:3000/api/description', {
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
