import { SparklesPreviewColorful, SparklesPreviewDark, SparklesPreview } from "@/components/demo/sparkles-demo";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
      <section className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Component Integration
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Sparkles UI demo wired into a shadcn-style Next.js app
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
          The component lives in <code>@/components/ui</code>, uses Tailwind utilities,
          and is showcased here with three responsive variants.
        </p>
      </section>
      <SparklesPreview />
      <SparklesPreviewDark />
      <SparklesPreviewColorful />
    </main>
  );
}
