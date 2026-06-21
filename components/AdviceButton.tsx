'use client';

import { useState } from 'react';

export default function AdviceButton({ initialAdvice }: { initialAdvice: string }) {
  const [advice, setAdvice] = useState(initialAdvice);
  const [isLoading, setIsLoading] = useState(false);

  async function refresh() {
    setIsLoading(true);
    const response = await fetch(
      'https://api.adviceslip.com/advice'
    );

    const data = await response.json();
    setAdvice(data.slip.advice);
    setIsLoading(false);
  }

  return (
    <>
      <p>{advice}</p>
      <button onClick={refresh} disabled={isLoading} aria-busy={isLoading}>
        Get Advice
      </button>
    </>
  );
}