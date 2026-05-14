import AiInsightCard from "@/components/AiInsightCard";
import DashboardHeader from "@/components/DashboardHeader";
import RecentTransactions from "@/components/RecentTransactions";
import SavingsGoalCard from "@/components/SavingsGoalCard";
import SpendingCategoryCard from "@/components/SpendingCategoryCard";
import SummaryCard from "@/components/SummaryCard";
import {
  spendingCategories,
  summaryCards,
  transactions,
} from "@/data/sampleTransactions";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <DashboardHeader />

       <div className="grid gap-4 md:grid-cols-4">
  {summaryCards.map((card) => (
    <SummaryCard key={card.title} title={card.title} value={card.value} />
  ))}
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