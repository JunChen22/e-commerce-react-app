import React, { useState, useEffect } from 'react';
import { Timer, Zap, Package } from 'lucide-react';
// import { SalesStatusDTO } from '@/interfaces/product/SalesStatusDTO'


export interface SalesStatusDTO {
  saleName: string;
  status: 'Active' | 'UPCOMING' | 'Ended';
  numberSold: number;
  numberAvailable: number;
  startDateTime: string;
  endDateTime: string;
  limitPerUser: number;
}

interface FlashSaleProps {
  salesStatus: SalesStatusDTO;
}

const FlashSale = ({ salesStatus }: FlashSaleProps) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });
  const [currentStatus, setCurrentStatus] = useState<'Active' | 'UPCOMING' | 'Ended'>(salesStatus.status);

  useEffect(() => {
      const calculateTimeLeft = () => {
          const now = new Date().getTime();
          const startTime = new Date(salesStatus.startDateTime).getTime();
          const endTime = new Date(salesStatus.endDateTime).getTime();

          if (now < startTime) {
              // UPCOMING sale
              const timeDiff = startTime - now;
              setCurrentStatus('UPCOMING');
              return {
                  hours: Math.floor((timeDiff / (1000 * 60 * 60))),
                  minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
                  seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
              };
          } else if (now >= startTime && now <= endTime) {
              // Active sale
              const timeDiff = endTime - now;
              setCurrentStatus('Active');
              return {
                  hours: Math.floor((timeDiff / (1000 * 60 * 60))),
                  minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
                  seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
              };
          } else {
              // Ended sale
              setCurrentStatus('Ended');
              return { hours: 0, minutes: 0, seconds: 0 };
          }
      };

      const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
  }, [salesStatus]);

  // Determine background and text colors based on status
  const getStatusStyles = () => {
      switch (currentStatus) {
          case 'UPCOMING':
              return {
                  bgGradient: 'from-blue-50 to-blue-100',
                  headerGradient: 'from-blue-600 to-blue-800',
                  progressBg: 'bg-blue-200',
                  progressFill: 'from-blue-500 to-blue-700'
              };
          case 'Ended':
              return {
                  bgGradient: 'from-gray-50 to-gray-100',
                  headerGradient: 'from-gray-600 to-gray-800',
                  progressBg: 'bg-gray-200',
                  progressFill: 'from-gray-500 to-gray-700'
              };
          default: // Active
              return {
                  bgGradient: 'from-red-50 to-orange-50',
                  headerGradient: 'from-red-600 to-orange-600',
                  progressBg: 'bg-gray-200',
                  progressFill: 'from-red-500 to-orange-500'
              };
      }
  };

  // Total stock and percentage calculations
  const totalStock = salesStatus.numberAvailable;
  const soldPercentage = (salesStatus.numberSold / totalStock) * 100;
  const remainingPercentage = 100 - soldPercentage;
  const styles = getStatusStyles();

  // Render different content based on status
  const renderStatusContent = () => {
      switch (currentStatus) {
          case 'UPCOMING':
              return (
                  <div className="text-blue-600 font-medium">
                      Sale Starts In: {String(timeLeft.hours).padStart(2, '0')}:
                      {String(timeLeft.minutes).padStart(2, '0')}:
                      {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              );
          case 'Ended':
              return (
                  <div className="text-gray-600 font-medium">
                      Sale Has Ended
                  </div>
              );
          default: // Active
              return (
                  <>
                      <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                              <Package className="h-4 w-4 text-gray-600" />
                              <span className="text-gray-600">Stock Available</span>
                          </div>
                          <span className="font-medium text-red-600">
                              {salesStatus.numberAvailable - salesStatus.numberSold} left!
                          </span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                          <div 
                              className={`absolute left-0 top-0 h-full bg-gradient-to-r ${styles.progressFill} transition-all duration-500`}
                              style={{ width: `${remainingPercentage}%` }}
                          />
                      </div>
                  </>
              );
      }
  };

  return (
      <div className={`relative overflow-hidden rounded-xl border-2 border-opacity-50 bg-gradient-to-r ${styles.bgGradient}`}>
          {/* Sale Header */}
          <div className={`bg-gradient-to-r ${styles.headerGradient} px-4 py-3`}>
              <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-yellow-300 animate-pulse" />
                      <span className="text-xl font-bold text-white">{salesStatus.saleName}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                      <Timer className="h-5 w-5" />
                      <span className="font-mono text-lg">
                          {String(timeLeft.hours).padStart(2, '0')}:
                          {String(timeLeft.minutes).padStart(2, '0')}:
                          {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                  </div>
              </div>
          </div>

          <div className="p-4 space-y-3">
              {renderStatusContent()}

              {currentStatus === 'Active' && (
                  <div className="flex justify-between text-sm text-gray-600">
                      <span className="font-medium">Limit {salesStatus.limitPerUser} items per customer</span>
                      <span>{salesStatus.numberSold} sold</span>
                  </div>
              )}
          </div>

          {/* Corner Flash */}
          <div className="absolute -right-12 -top-12 h-24 w-24 rotate-45 bg-yellow-400 opacity-50" />
      </div>
  );
};

export default FlashSale;