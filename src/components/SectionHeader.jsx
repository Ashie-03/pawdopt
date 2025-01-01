const SectionHeader = ({ title }) => {
  return (
    <div className="w-full text-xl md:text-2xl flex justify-center items-center my-6 p-4">
      <div className="h-[0.5px] w-full bg-secondary rounded"></div>
      <div className="bg-secondary text-primary px-2 py-1 rounded-lg m-2 min-w-fit">{title}</div>
      <div className="h-[0.5px] w-full bg-secondary rounded"></div>
    </div>
  )
};

export default SectionHeader;