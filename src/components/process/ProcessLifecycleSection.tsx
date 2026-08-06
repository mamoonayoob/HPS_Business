import {
  CheckCircle2,
  ChevronDown,
  Headphones,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { PROCESS_LIFECYCLE } from "@/config/process";

const STEP_ICONS = [ShoppingCart, Truck, ShieldCheck];
const FLOW_ICONS = [Headphones, Truck, Package, ShieldCheck];

const FLOW_ALIGN_CLASS = {
  center: "mx-auto",
  right: "ml-auto mr-0",
  left: "mr-auto ml-0",
} as const;

export function ProcessLifecycleSection() {
  const { label, heading, steps, flowchart } = PROCESS_LIFECYCLE;

  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="process-section">
      <div className="grid gap-12 xl:grid-cols-[minmax(0,831px)_minmax(0,593px)] xl:gap-16">
        <div className="min-w-0">
          <p className="process-label text-[var(--about-color-cyan)]">{label}</p>
          <h2 className="process-heading mt-2 text-[var(--about-color-text)]">
            {heading}
          </h2>

          <div className="relative mt-10">
            <div
              className="absolute bottom-8 left-7 top-8 w-0.5 border-l-2 border-dashed border-[#cbd5e1]"
              aria-hidden
            />

            <div className="flex flex-col gap-10">
              {steps.map((step, index) => {
                const Icon = STEP_ICONS[index] ?? ShoppingCart;
                return (
                  <div key={step.phase} className="relative flex gap-6">
                    <div
                      className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.iconColor} shadow-[0_8px_20px_rgba(46,49,147,0.15)]`}
                    >
                      <Icon className="size-7 text-white" strokeWidth={1.75} />
                    </div>

                    <article className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_8px_30px_rgba(46,49,147,0.08)]">
                      <div
                        className={`absolute bottom-0 left-0 top-0 w-1.5 ${step.accentColor}`}
                        aria-hidden
                      />
                      <div className="relative p-8 pr-24">
                        <span className="inline-block rounded bg-[#eef7fd] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--about-color-cyan)]">
                          {step.phase}
                        </span>
                        <h3 className="about-card-title mt-3 text-[var(--about-color-text)]">
                          {step.title}
                        </h3>
                        <p className="process-body mt-3">{step.description}</p>
                      </div>
                      <Icon
                        className="pointer-events-none absolute -bottom-4 -right-4 size-36 text-[#f4f7fb] opacity-80"
                        strokeWidth={1}
                        aria-hidden
                      />
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0 xl:sticky xl:top-28 xl:self-start">
          <div className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-8 shadow-[0_8px_30px_rgba(46,49,147,0.06)]">
            <div className="mb-8 flex justify-center">
              <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--about-color-muted)]">
                {flowchart.badge}
              </span>
            </div>

            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="flex flex-col gap-2">
                {flowchart.nodes.map((node, index) => {
                  const Icon = FLOW_ICONS[index] ?? Package;
                  const alignClass = FLOW_ALIGN_CLASS[node.align];

                  return (
                    <div key={node.title} className="w-full">
                      <div
                        className={`relative w-full max-w-[340px] ${alignClass}`}
                      >
                        <div className="flex items-center gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_4px_16px_rgba(46,49,147,0.06)]">
                          <div
                            className={`flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${node.iconColor}`}
                          >
                            <Icon
                              className="size-6 text-white"
                              strokeWidth={1.75}
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-black uppercase tracking-[0.04em] text-[var(--about-color-text)]">
                              {node.step}. {node.title}
                            </p>
                            <p className="text-xs font-medium text-[var(--about-color-muted)]">
                              {node.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {index < flowchart.nodes.length - 1 ? (
                        <div className="flex justify-center py-1">
                          <ChevronDown
                            className="size-5 text-[#94a3b8]"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold text-[var(--about-color-red)]">
              <CheckCircle2 className="size-5 shrink-0" />
              <span>{flowchart.footer}</span>
            </div>
          </div>
        </div>
      </div>
    </InnerPageSection>
  );
}
