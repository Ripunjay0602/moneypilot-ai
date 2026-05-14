type SpendingCategory = {
  name: string;
  amount: number;
};

type SpendingCategoryCardProps = {
  categories: SpendingCategory[];
};

export default function SpendingCategoryCard({
  categories,
}: SpendingCategoryCardProps) {
  const maxAmount = Math.max(
    ...categories.map((category) => category.amount),
    1
  );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
      <h2 className="text-xl font-semibold">Spending by Category</h2>
      <p className="mt-1 text-sm text-slate-400">
        Monthly expense breakdown by category
      </p>

      <div className="mt-6 space-y-4">
        {categories.map((category) => {
          const width = Math.round((category.amount / maxAmount) * 100);

          return (
            <div key={category.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{category.name}</span>
                <span>${category.amount.toFixed(2)}</span>
              </div>

              <div className="h-3 rounded-full bg-slate-800">
                <div
                  className="h-3 rounded-full bg-cyan-400"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}