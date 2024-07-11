import type { FC } from 'react';

interface Props {
  title: string;
  info: string;
  className?: string;
  description?: string;
}
const InfoBox: FC<Props> = ({ title, info, className, description }) => {
  return (
    <div className={`${className} h-[128px]`}>
      <h2 className="cardSubTitle font-interSemiBold uppercase">{title}</h2>
      <p className="cardContent mt-3.5 lg:mt-5 font-gilroy-bold text-[24px] sm:text-[30px]">{info}</p>
      <p className="text-13 font-medium text-grey300 mt-2 font-interMedium leading-[13px]">{description}</p>
    </div>
  );
};
export default InfoBox;
