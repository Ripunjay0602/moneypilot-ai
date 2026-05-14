"use client";

import { useState } from "react";
import AddTransactionForm from "@/components/AddTransactionForm";
import AiInsightCard from "@/components/AiInsightCard";
import DashboardHeader from "@/components/DashboardHeader";
import RecentTransactions from "@/components/RecentTransactions";
import SavingsGoalCard from "@/components/SavingsGoalCard";
import SpendingCategoryCard from "@/components/SpendingCategoryCard";
import SummaryCard from "@/components/SummaryCard";
import {
  spendingCategories,
  summaryCards,
  transactions as sampleTransactions,
} from "@/data/sampleTransactions";

type NewTransaction = {
  type: string;
  category: string;
  description: string;
  amount: number;
};

export default function Home() {
  const [transactions, setTransactions] = useState(sampleTransactions);

  function handleAddTransaction(newTransaction: NewTransaction) {
    const formattedAmount =
      newTransaction.type === "Expense"
        ? -Math.abs(newTransaction.amount)
        : Math.abs(newTransaction.amount);

    const transaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      type: newTransaction.type,
      category: newTransaction.category,
      description: newTransaction.description,
      amount: formattedAmount,
    };

    setTransactions([transaction, ...transactions]);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <DashboardHeader />

        <div className="grid gap-4 md:grid-cols-4">
          {summaryCards.map((card) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <SpendingCategoryCard categories={spendingCategories} />
          <AiInsightCard />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
          <RecentTransactions transactions={transactions} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <SavingsGoalCard
            goalName="Laptop fund"
            savedAmount={650}
            targetAmount={1000}
          />
        </div>
      </section>
    </main>
  );
}