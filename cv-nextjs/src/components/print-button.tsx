'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-colors print:hidden"
      aria-label="Print CV"
    >
      <Printer className="h-6 w-6" />
    </button>
  );
} 