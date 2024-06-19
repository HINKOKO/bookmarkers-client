import CardDemoBookmark from './CardDemoBookmark';

const DemoCard = () => {
  return (
    <div className="flex flex-col md:flex-1 md:items-center gap-4 bg-gradient-to-tr from-purple-400 to-fuchsia-600 rounded-xl py-8 px-6">
      <div className="flex space-x-8">
        <h3 className="text-2xl font-kanit font-bold text-slate-200">
          Pick a category
        </h3>
        <div className="bg-amber-500 rounded-md text-slate-200 font-semibold p-2 border-2 border-black">
          System
          <div className="mt-1 border-b-2 border-black w-4/5"></div>
        </div>
        <div className="bg-orange-400 rounded-md text-slate-200 font-semibold p-2">
          Algorithms
        </div>
        <div className="bg-orange-400 rounded-md text-slate-200 font-semibold p-2">
          Malloc
        </div>
      </div>
      <div className="flex space-x-6 mt-6">
        <h3 className="text-2xl font-kanit font-bold text-slate-200">
          Pick a project
        </h3>
        <div className="bg-orange-400 rounded-md text-slate-200 font-semibold p-2">
          proc_system
        </div>
        <div className="bg-orange-400 rounded-md text-slate-200 font-semibold p-2 border-2 border-black">
          getline
          <div className="mt-1 border-b-2 border-black w-4/5"></div>
        </div>
        <div className="bg-orange-400 rounded-md text-slate-200 font-semibold p-2">
          anyway
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <h3 className="text-center font-kanit text-xl mb-4 italic">
          Browse and pick the best bookmarks
        </h3>
        <div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-x-0 space-y-5">
          <CardDemoBookmark />
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
