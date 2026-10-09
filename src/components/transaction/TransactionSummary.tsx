import { formatCurrency, maskAccount, typeLabel } from "@/lib/format";
import type { TransactionInput } from "@/types/analysis";

export function TransactionSummary({ input }: { input: TransactionInput }) {
  const hour = ((input.step % 24) + 24) % 24;
  const timeDisplay = input.occurredAt
    ? (input.occurredAt.includes("T") ? input.occurredAt.split("T")[1].slice(0, 5) : input.occurredAt)
    : `${String(hour).padStart(2, "0")}:00`;

  const rows = [
    { label: "Transaction Type", value: typeLabel(input.type) },
    { label: "Amount", value: formatCurrency(input.amount) },
    { label: "Sender", value: maskAccount(input.senderId) },
    { label: "Receiver", value: maskAccount(input.receiverId) },
    { label: "Transaction Time", value: timeDisplay },
  ];

  return (
    <section className="panel p-5">
      <h3 className="font-semibold">Transaction profile</h3>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs text-muted">{row.label}</dt>
            <dd className="mt-1 font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
