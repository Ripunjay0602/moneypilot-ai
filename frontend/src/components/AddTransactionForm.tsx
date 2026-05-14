"use client";

import { useState } from "react";

type NewTransaction = {
  type: string;
  category: string;
  description: string;
  amount: number;
};

type AddTransactionFormProps = {
  onAddTransaction: (transaction: NewTransaction) => void;
};

export default function AddTransactionForm({
  onAddTransaction,
}: AddTransactionFormProps) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const numericAmount = Number(amount);

    if (!description.trim() || !amount || Number.isNaN(numericAmount)) {
      return;
    }

    if (numericAmount <= 0) {
      return;
    }

    onAddTransaction({
      type,
      category,
      description,
      amount: numericAmount,
    });

    setDescription("");
    setCategory("Food");
    setAmount("");
    setType("Expense");
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Add Transaction</h2>
      <p className="mt-1 text-sm text-slate-400">
        Add a sample income or expense.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label className="text-sm text-slate-300">Description</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Coffee, paycheck, groceries..."
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Category</label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Groceries</option>
            <option>Subscriptions</option>
            <option>Work</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-slate-300">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="25.00"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Type</label>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
          >
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}