import { useEffect, useState } from "react";

export function useApi(url) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setDados(json));
  }, [url]);

  function post(dado) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dado)
    })
    .then(res => res.json())
    .then(novo => setDados(prev => [...prev, novo]));
  }

  return { dados, post };
}
