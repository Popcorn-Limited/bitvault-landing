export default function InvestorSection() {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-xl font-bold uppercase text-primaryGold">Backed by</h1>
      <div className="h-8 mt-8 mb-8 flex flex-row gap-8">
        <img src="/images/investors/gsr.png" alt="gsr" className="h-full w-full object-contain" /> 
        <img src="/images/investors/auros.png" alt="auros" className="h-6 w-full object-contain mt-1" /> 
        <img src="/images/investors/keyrock.png" alt="keyrock" className="h-full w-full object-contain" /> 
        <img src="/images/investors/matrixport.png" alt="matrixport" className="h-full w-full object-contain" /> 
        <img src="/images/investors/re7.png" alt="re7" className="h-full w-full object-contain mt-1" /> 
        <img src="/images/investors/newForm.png" alt="newForm" className="h-full w-full object-contain mt-1" /> 
        <img src="/images/investors/v3v.png" alt="v3v" className="h-full w-full object-contain mt-1" /> 
      </div>
    </div>
  );
}