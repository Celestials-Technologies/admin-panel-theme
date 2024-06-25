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
      <h2 className="cardSubTitle ">{title}</h2>
      <p className="cardContent mt-5">{info}</p>
      <p className="text-13 font-medium text-grey300">{description}</p>
    </div>
  );
};
export default InfoBox;
