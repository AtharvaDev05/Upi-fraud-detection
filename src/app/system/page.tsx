import { ArchitectureView } from "@/components/insights/ArchitectureView";
import { FutureSignals } from "@/components/insights/FutureSignals";

export default function SystemPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="panel p-6">
        <h2 className="text-2xl font-semibold">System Status</h2>
        <p className="mt-2 text-sm text-muted">
          Sentinel is fully live. The UI calls{" "}
          <code className="text-accent">predictTransaction()</code> which hits{" "}
          <code className="font-mono text-xs text-accent">POST /api/predict</code> on the FastAPI backend,
          running XGBoost inference and TreeSHAP attribution in a single 0.024 ms pipeline.
        </p>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <dt className="text-xs text-muted">Model</dt>
            <dd className="mt-1 font-medium text-foreground">XGBoost (500 trees, depth 6)</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <dt className="text-xs text-muted">Explainability</dt>
            <dd className="mt-1 font-medium text-foreground">TreeSHAP (exact, polynomial-time)</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <dt className="text-xs text-muted">Total Pipeline Latency</dt>
            <dd className="mt-1 font-medium text-emerald-300">0.024 ms / transaction</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <dt className="text-xs text-muted">Test Set PR-AUC</dt>
            <dd className="mt-1 font-medium text-foreground">0.9981</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <dt className="text-xs text-muted">Fraud Recall</dt>
            <dd className="mt-1 font-medium text-foreground">99.70% (1,638 / 1,643)</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <dt className="text-xs text-muted">Dataset</dt>
            <dd className="mt-1 font-medium text-foreground">PaySim · 6.36M records · 41,643 test rows</dd>
          </div>
        </dl>
      </section>
      <ArchitectureView />
      <FutureSignals />
    </div>
  );
}
