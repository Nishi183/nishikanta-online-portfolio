import Image from "next/image";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

const competencies = [
  "DevOps and CI/CD leadership across Azure DevOps, Jenkins, and GitHub Actions",
  "Cloud and infrastructure automation on Azure, AWS, and hybrid environments",
  "MLOps platform engineering with Azure ML, SageMaker, Kubeflow, and GPU workloads",
  "Containers, Kubernetes, Helm, OpenShift, and secure secrets management",
  "Observability with Prometheus, Grafana, ELK, Azure Monitor, and SRE practices",
  "Change governance with ServiceNow, CR/CRA workflows, and regulated delivery",
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Microsoft Certified: Azure AI Fundamentals",
  "Microsoft Certified: Designing and Implementing Microsoft DevOps Solutions (AZ-400)",
  "Certified SAS Viya Administrator",
];

const experience = [
  {
    role: "Specialist DevOps with Product Engineering",
    company: "LTI Mindtree",
    period: "Dec 2022 - Present",
    summary:
      "Leading DevOps and SRE initiatives for enterprise product engineering, with focus on cloud-native platforms, AI-enabled delivery, observability, and platform reliability.",
    highlights: [
      "Built CI/CD delivery practices with Azure DevOps, Git, Ansible, and Nexus.",
      "Led AWS EKS and Azure AKS platform deployments for scalable multi-tier applications.",
      "Enabled observability using Prometheus, Grafana, and Azure Monitor.",
      "Improved AWS cost efficiency by reducing infrastructure spend by 20%.",
    ],
  },
  {
    role: "Senior DevOps Engineer",
    company: "Larsen & Toubro Infotech",
    period: "Oct 2019 - Nov 2022",
    summary:
      "Managed end-to-end DevOps delivery for banking and insurance platforms, supporting high-availability releases and ML-driven enterprise solutions.",
    highlights: [
      "Designed Kubernetes environments on EKS and AKS.",
      "Reduced incident response time through proactive observability pipelines.",
      "Supported AI and ML product rollouts for fraud detection and predictive analytics.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Tech Mahindra (Harjai Computer Pvt Ltd)",
    period: "May 2016 - Jul 2018",
    summary:
      "Focused on DevOps automation, application delivery, and release acceleration across banking and telecom projects.",
    highlights: [
      "Implemented CI/CD pipelines using Jenkins and Git.",
      "Automated configuration management with Ansible.",
      "Helped reduce time-to-market by 40% through release automation.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-70">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={110}
            className="h-full w-full"
            particleColor="#8bffd5"
            speed={0.7}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.45),rgba(2,6,23,0.95))]" />
        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">
                DevOps Specialist Engineer
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Nishi Kanta Das
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                8.6 years of experience building cloud, DevOps, SRE, and AI-ready
                infrastructure across banking, finance, insurance, and healthcare
                platforms.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <a
                href="tel:8147535007"
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-emerald-300" />
                <span>8147535007 / 9739934576</span>
              </a>
              <a
                href="mailto:devops.nishikanta@gmail.com"
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-sky-300" />
                <span>devops.nishikanta@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nishi-kanta-das-62171823b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4 text-cyan-300" />
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
                <MapPin className="h-4 w-4 text-amber-300" />
                <span>Bengaluru, India</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/NishiKanta_DevOps_TechLead_CV_Updated%20(1).docx"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-100">
                Open to DevOps, SRE, Cloud, and Platform Engineering leadership roles
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/25 via-sky-400/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/photo.jpeg"
                  alt="Portrait of Nishi Kanta Das"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
            Career Objective
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Cloud, automation, and AI-ready platforms</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Drive innovation and build scalable, reliable, and secure solutions by
            leveraging deep experience in DevOps, cloud, infrastructure, and SRE.
            The goal is to build next-generation AI-enabled platforms that deliver
            measurable business impact through automation-first engineering.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Education</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            B.Tech in Computer Science & Engineering
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Biju Patnaik University of Technology, Odisha
          </p>
          <p className="mt-2 text-sm text-slate-400">2009 - 2012</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core Competencies</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {competencies.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Experience</p>
            <div className="mt-6 space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <p className="text-sm text-emerald-300">{item.company}</p>
                    </div>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Certifications</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
