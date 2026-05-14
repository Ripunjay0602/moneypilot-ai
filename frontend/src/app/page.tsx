import AiInsightCard from "@/components/AiInsightCard";
import RecentTransactions from "@/components/RecentTransactions";
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Spending by Category</h2>
            <p className="mt-1 text-sm text-slate-400">
              Sample monthly spending breakdown
            </p>

            <div className="mt-6 space-y-4">
              {spendingCategories.map((category) => (
                <div key={category.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{category.name}</span>
                    <span>${category.amount}</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-800">
                    <div
                      className="h-3 rounded-full bg-cyan-400"
                      style={{ width: `${category.amount / 4}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <AiInsightCard />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <RecentTransactions transactions={transactions} />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Savings Goal</h2>
            <p className="mt-1 text-sm text-slate-400">Laptop fund</p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>$650 saved</span>
                <span>$1,000 goal</span>
              </div>

              <div className="h-4 rounded-full bg-slate-800">
                <div className="h-4 w-[65%] rounded-full bg-cyan-400" />
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              You are 65% of the way toward your goal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}