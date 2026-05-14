type AiInsightCardProps = {
  topCategoryName: string;
  topCategoryAmount: number;
};

export default function AiInsightCard({
  topCategoryName,
  topCategoryAmount,
}: AiInsightCardProps) {
  const potentialSavings = topCategoryAmount * 0.1;

  return (
    <div className="rounded-2xl border border-cyan-900 bg-cyan-950/40 p-6">
      <h2 className="text-xl font-semibold">AI Insight</h2>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        Your highest spending category is {topCategoryName} at $
        {topCategoryAmount.toFixed(2)}. Reducing this category by 10% could save
        about ${potentialSavings.toFixed(2)} this month.
      </p>

      <button className="mt-6 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
        Generate New Insight
      </button>
    </div>
  );
}