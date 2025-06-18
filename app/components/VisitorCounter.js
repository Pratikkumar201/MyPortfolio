
'use client';
import { useEffect, useState, useRef } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const hasCounted = useRef(false);

  useEffect(() => {
    if (hasCounted.current) return;
    hasCounted.current = true;

    fetch('/api/visitor', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        if (data.count) setCount(data.count);
      })
      .catch(err => {
        console.error('Visitor counter error:', err);
      });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-[#111827] text-white px-4 py-2 rounded shadow-lg text-sm z-50">
      Visitor No.: {count}
    {/* <div className="text-white bg-[#111827] text-sm rounded shadow-md px-4 py-2 mt-8 w-fit ml-auto">
     Visitor No.: {count} */}
    </div>
  );
}

