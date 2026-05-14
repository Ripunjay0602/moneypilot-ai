type SavingsGoalCardProps = {
  goalName: string;
  savedAmount: number;
  targetAmount: number;
};

export default function SavingsGoalCard({
  goalName,
  savedAmount,
  targetAmount,
}: SavingsGoalCardProps) {
  const progress = Math.round((savedAmount / targetAmount) * 100);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Savings Goal</h2>
      <p className="mt-1 text-sm text-slate-400">{goalName}</p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span>${savedAmount} saved</span>
          <span>${targetAmount} goal</span>
        </div>

        <div className="h-4 rounded-full bg-slate-800">
          <div
            className="h-4 rounded-full bg-cyan-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        You are {progress}% of the way toward your goal.
      </p>
    </div>
  );
}