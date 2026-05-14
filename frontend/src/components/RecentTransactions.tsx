type Transaction = {
  id: number;
  date: string;
  type: string;
  category: string;
  description: string;
  amount: number;
};

type RecentTransactionsProps = {
  transactions: Transaction[];
};

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="grid grid-cols-4 border-b border-slate-800 px-4 py-3 text-sm last:border-b-0"
          >
            <span className="text-slate-400">{transaction.date}</span>
            <span>{transaction.description}</span>
            <span className="text-slate-400">{transaction.category}</span>
            <span
              className={
                transaction.amount > 0
                  ? "text-right text-green-400"
                  : "text-right text-red-400"
              }
            >
              {transaction.amount > 0 ? "+" : "-"}$
              {Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}