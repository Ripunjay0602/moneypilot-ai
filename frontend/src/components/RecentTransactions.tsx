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
  onDeleteTransaction: (id: number) => void;
};

export default function RecentTransactions({
  transactions,
  onDeleteTransaction,
}: RecentTransactionsProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
        {transactions.length === 0 ? (
          <p className="px-4 py-6 text-sm text-slate-400">
            No transactions yet.
          </p>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="grid grid-cols-5 items-center border-b border-slate-800 px-4 py-3 text-sm last:border-b-0"
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

              <button
                type="button"
                onClick={() => onDeleteTransaction(transaction.id)}
                className="ml-4 rounded-lg border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-red-400 hover:text-red-400"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}