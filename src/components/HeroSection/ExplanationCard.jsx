const ExplanationCard = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-cyan-700 to-cyan-500 rounded-xl py-8 px-6 shadow-2xl">
      <h2 className="text-2xl font-bold">Why Bookmarkers-Diggers</h2>
      <p className="tracking-wide mt-4 ml-3 text-slate-200 font-lg font-kanit">
        Over the months, the Holbies scraps tons of webpages and <br />
        gather a lot of useful stuff for achieving their projects ...
      </p>
      <p className="tracking-wide font-lg ml-3">
        This place is dedicated to the braves, who took the{' '}
        <span className="font-bold text-slate-100 font-kanit">
          low-level and <br />
          algorithms
        </span>{' '}
        specialization.
      </p>
      <p className="tracking-wide font-lg ml-3">
        This place is dedicated to gather the best resources, either being
        tutorials, <br />
        articles, videos... <br />
        in order to master each concept and project of the curriculum
      </p>
    </div>
  );
};

export default ExplanationCard;
