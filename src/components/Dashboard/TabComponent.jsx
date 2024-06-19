import { useState } from 'react';

const TabComponent = ({ tabs, activeTab: parentActiveTab }) => {
  const [activeTab, setActiveTab] = useState(parentActiveTab);

  const handleClick = idx => {
    setActiveTab(idx);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-10 rounded-tl-lg">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-6 py-6 w-5/12 ${
              activeTab === idx
                ? 'text-slate-200 font-semibold text-xl bg-gradient-to-br from-purple-400 to-fuchsia-600'
                : 'font-thin text-sm bg-slate-100'
            } border-b-2 font-medium text-sm ${
              idx === 0
                ? 'rounded-tl-lg'
                : idx === tabs.length - 1
                ? 'rounded-tr-lg'
                : ''
            }`}
            onClick={() => handleClick(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
      </div>
    </div>
  );
};

export default TabComponent;
