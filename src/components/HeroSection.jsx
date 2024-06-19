import ExplanationCard from './HeroSection/ExplanationCard';
import DemoCard from './HeroSection/DemoCard';
import ContributeCard from './HeroSection/ContributeCard';

import { useModal } from '../../store/ModalContext';

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-6 md:space-y-0 mx-auto bg-slate-100 font-kanit rounded-lg">
        <ExplanationCard />
        <DemoCard />
      </div>
      <ContributeCard />
    </>
  );
};

export default HeroSection;
