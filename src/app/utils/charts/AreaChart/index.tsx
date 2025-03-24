'use client';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// const data = [
//   { value: 40 },
//   { value: 60 },
//   { value: 75 },
//   { value: 100 },
//   { value: 90 },
//   { value: 95 },
//   { value: 100 },
// ];

interface SubscribersCardProps {
  title: string;
  actualValue: number;
  percentage: number | string;
  data: { value: number }[];
  barColor: string;
}

const SubscribersCard = ({
  title,
  actualValue,
  percentage,
  data,
  barColor,
}: SubscribersCardProps) => {
  return (
    <div className="border-eeeeee border-md boxShadow rounded-lg border bg-white pl-3.5 pt-6 lg:pl-7">
      {/* Left Section */}

      <div className="flex justify-between overflow-hidden">
        <div className="mb-6 w-[50%]">
          <p className="text-757575 mb-4 text-xs font-semibold uppercase leading-4 tracking-wider">
            {title}
          </p>
          <h2 className="fs-28 font-gilroyBold text-424242 leading-7">{actualValue}</h2>
          <div className="mt-2.5 flex items-center">
            <span>
            <img src="/images/up-arrow.png" />
            </span>
            <span className="fs-15 font-gilroySemibold text-fd445f ml-1 leading-4">
              {percentage}
            </span>
          </div>
        </div>

        {/* Right Section (Graph) */}
        <div className="relative right-[-5px] top-[0px] h-[114px] w-[50%]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area type="monotone" dataKey="value" stroke={barColor} fill={`url(#${barColor})`} />
              <defs>
                <linearGradient id={barColor} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={barColor} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={barColor} stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SubscribersCard;
