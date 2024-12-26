const MathQuestion = () => {
  return (
    <div className="flex-1 rounded-md flex flex-col gap-2">
      <div className="flex flex-col gap-4 p-4 rounded-md shadow-sm bg-background min-h-[300px]">
        <h1 className="text-2xl font-bold">많이 제출된 유형</h1>
      </div>
      <div className="flex flex-col gap-4 p-4 rounded-md shadow-sm bg-background min-h-[300px]">
        <h1 className="text-2xl font-bold">유형별 문제</h1>
      </div>
    </div>
  );
};

export default MathQuestion;
