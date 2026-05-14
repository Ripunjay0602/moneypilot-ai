import AiInsightCard from "@/components/AiInsightCard";
import RecentTransactions from "@/components/RecentTransactions";
import SavingsGoalCard from "@/components/SavingsGoalCard";
import SpendingCategoryCard from "@/components/SpendingCategoryCard";
import SummaryCard from "@/components/SummaryCard";
import { spendingCategories, transactions } from "@/data/sampleTransactions";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Personal Finance Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold">MoneyPilot AI</h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Track spending, understand cash flow, and get simple AI-powered
            financial insights.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <SummaryCard title="Total Balance" value="$2,840.50" />
          <SummaryCard title="Monthly Income" value="$1,680.00" />
          <SummaryCard title="Monthly Expenses" value="$965.25" />
          <SummaryCard title="Savings Rate" value="42%" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
  <SpendingCategoryCard categories={spendingCategories} />

  <AiInsightCard />
</div>

          <AiInsightCard />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <RecentTransactions transactions={transactions} />

          <SavingsGoalCard goalName="Laptop fund" savedAmount={650} targetAmount={1000} />
          </div>
      </section>
    </main>
  );
}