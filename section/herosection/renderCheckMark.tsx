export function renderCheckMark() {
    return (
      <div className="w-[13px] h-[13px] bg-lime-600 rounded-full shadow">
        <div className="w-[9px] h-[8.02px] m-1">
          <div className="w-[4px] h-[1.40px] left-[0.11px] top-[3.72px] relative origin-top-left rotate-[47.90deg] bg-white"></div>
          <div className="w-[9.41px] h-[1.40px] left-[0.4px] top-[4.98px] relative origin-top-left rotate-[-47.90deg] bg-white"></div>
        </div>
      </div>
    );
  }