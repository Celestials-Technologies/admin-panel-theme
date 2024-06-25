import { FC } from 'react';
interface Props {
  title: string;
  info: string;
  className?: string;
}
const InfoBox: FC<Props> = ({ title, info, className }) => {
  return (
    <div className={`${className} h-[128px]`}>
      <h2 className="cardSubTitle pt-6">{title}</h2>
      <p className="cardContent mt-5">{info}</p>
    </div>
  );
};
export default InfoBox;
