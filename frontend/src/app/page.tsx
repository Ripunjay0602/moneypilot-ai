"use client";

import { useEffect, useState } from "react";
import AddTransactionForm from "@/components/AddTransactionForm";
import AiInsightCard from "@/components/AiInsightCard";
import DashboardHeader from "@/components/DashboardHeader";
import RecentTransactions from "@/components/RecentTransactions";
import SavingsGoalCard from "@/components/SavingsGoalCard";
import SpendingCategoryCard from "@/components/SpendingCategoryCard";
import SummaryCard from "@/components/SummaryCard";
import { transactions as sampleTransactions } from "@/data/sampleTransactions";

type Transaction = {
  id: number;
  date: string;
  type: string;
  category: string;
  description: string;
  amount: number;
};

type NewTransaction = {
  type: string;
  category: string;
  description: string;
  amount: number;
};

export default function Home() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(sampleTransactions);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTransactions = localStorage.getItem("moneypilot-transactions");

    if (savedTransactions) {
      try {
        const parsedTransactions = JSON.parse(savedTransactions);

        if (Array.isArray(parsedTransactions)) {
          setTransactions(parsedTransactions);
        }
      } catch {
        console.log("Could not load saved transactions.");
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "moneypilot-transactions",
        JSON.stringify(transactions)
      );
    }
  }, [transactions, isLoaded]);

  const startingBalance = 2515.15;

  const monthlyIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const monthlyExpenses = Math.abs(
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((total, transaction) => total + transaction.amount, 0)
  );

  const totalBalance = startingBalance + monthlyIncome - monthlyExpenses;

  const savingsRate =
    monthlyIncome > 0
      ? Math.round(((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100)
      : 0;

  const summaryCards = [
    {
      title: "Total Balance",
      value: `$${totalBalance.toFixed(2)}`,
    },
    {
      title: "Monthly Income",
      value: `$${monthlyIncome.toFixed(2)}`,
    },
    {
      title: "Monthly Expenses",
      value: `$${monthlyExpenses.toFixed(2)}`,
    },
    {
      title: "Savings Rate",
      value: `${savingsRate}%`,
    },
  ];

  const spendingCategories = Object.values(
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce<Record<string, { name: string; amount: number }>>(
        (categories, transaction) => {
          if (!categories[transaction.category]) {
            categories[transaction.category] = {
              name: transaction.category,
              amount: 0,
            };
          }

          categories[transaction.category].amount += Math.abs(
            transaction.amount
          );

          return categories;
        },
        {}
      )
  ).sort((a, b) => b.amount - a.amount);

  const topSpendingCategory = spendingCategories[0] ?? {
    name: "No expenses yet",
    amount: 0,
  };

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

          <AiInsightCard
            topCategoryName={topSpendingCategory.name}
            topCategoryAmount={topSpendingCategory.amount}
          />
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