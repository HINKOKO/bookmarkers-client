import { useState } from 'react';

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-10 border-b-2 border-gray-200 rounded-tl-lg">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 -mb-px w-5/12 ${
              activeTab === idx
                ? 'text-blue-600 bg-slate-900'
                : 'text-gray-600 border-transparent bg-cyan-400'
            } border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab(idx)}
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
