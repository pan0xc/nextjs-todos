'use client';

import { useState } from 'react';

export default function HitokotoButton({ initialHitokoto }: { initialHitokoto: string }) {
  const [hitokoto, setHitokoto] = useState(initialHitokoto);
  const [isLoading, setIsLoading] = useState(false);

  async function refresh() {
    setIsLoading(true);
    const response = await fetch(
      'https://v1.hitokoto.cn/'
    );

    const data = await response.json();
    setHitokoto(data.hitokoto);
    setIsLoading(false);
  }

  return (
    <>
      <p>{hitokoto}</p>
      <button onClick={refresh} disabled={isLoading} aria-busy={isLoading}>
        Get Hitokoto
      </button>
    </>
  );
}