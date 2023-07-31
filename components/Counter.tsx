import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '@/lib/utils/utils';


export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div className="flex gap-1 text-sm font-light justify-center">
      <div className="flex">
        <span className="value">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="">D</span>
      </div>

      <div className="counter-item">
        <span className="value">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="label">H</span>
      </div>

      <div className="counter-item">
        <span className="value">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="label">M</span>
      </div>

      <div className="counter-item">
        <span className="value">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="label">S</span>
      </div>
    </div>
  );
};