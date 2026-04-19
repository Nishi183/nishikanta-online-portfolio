import {
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SplineSceneBasic } from "@/components/demo/spline-demo";
import { SparklesCore } from "@/components/ui/sparkles";

const competencies = [
  "DevOps & CI/CD leadership with Azure DevOps, Jenkins, and GitHub Actions.",
  "Cloud & infrastructure automation across Azure, AWS, and GCP with Terraform, ARM, CloudFormation, Python, and shell scripting.",
  "AI/ML infrastructure and MLOps with Azure ML, SageMaker, Kubeflow, model versioning, and scalable inference.",
  "Containers and microservices using Docker, Kubernetes, AKS, EKS, Helm, OpenShift, and secure secrets management.",
  "Observability, DevSecOps, and SRE with Prometheus, Grafana, ELK, Azure Monitor, SLIs, SLOs, and root-cause analysis.",
  "Change governance with ServiceNow CR/CRA workflows for regulated banking, insurance, and healthcare environments.",
  "AI-powered DevOps, AIOps, intelligent monitoring, RAG pipelines, and internal developer platforms.",
  "Generative AI for DevOps, LLM-assisted troubleshooting, and Kubernetes for AI workloads with GPU-backed deployments.",
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Microsoft Certified: Azure AI Fundamentals",
  "Microsoft Certified: Designing and Implementing Microsoft DevOps Solutions (AZ-400)",
  "Certified SAS Viya Administrator",
  "Certified Enterprise Chaos Engineering (Gremlin)",
  "In Progress: Azure Solutions Architect Expert (AZ-305)",
  "In Progress: Certified Kubernetes Administrator (CKA)",
  "Certified Climate Change Risk Management from Udemy",
];

const experience = [
  {
    role: "Specialist DevOps with Product Engineering",
    company: "LTI-Mindtree",
    period: "Jan 2026 - Present",
    project: "Project-3: In-house AI-native product, Blueverge SDLC",
    summary:
      "Leading AI-native platform engineering with MCP architecture, agentic AI workflows, RAG-driven operations, and autonomous DevOps automation.",
    highlights: [
      "Designed enterprise-grade MCP architecture connecting DevOps, AI, and platform engineering.",
      "Built centralized control planes for microservices, AI workloads, and infrastructure lifecycle management.",
      "Enabled AI-driven monitoring, anomaly detection, auto-remediation, and LLM-powered troubleshooting.",
      "Implemented self-service internal developer platform capabilities to accelerate delivery and developer productivity.",
    ],
  },
  {
    role: "Specialist DevOps with Product Engineering",
    company: "LTI-Mindtree",
    period: "Dec 2022 - Dec 2025",
    project:
      "Project-2: Standard Chartered Bank, Mosaic-Refract, SRE and infra platform engineering",
    summary:
      "Designed and operated AI and cloud platforms for model lifecycle management, governance, deployment automation, and secure observability.",
    highlights: [
      "Built AI and ML platforms for model training, versioning, deployment, and monitoring at scale.",
      "Standardized infrastructure with reusable pipelines, registries, and orchestration tooling.",
      "Automated provisioning and compliance workflows across Azure and AWS using IaC.",
      "Partnered with data science teams to run ML pipelines on Azure ML, SageMaker, and Kubernetes.",
    ],
  },
  {
    role: "Senior DevOps Engineer",
    company: "Larsen & Toubro Infotech",
    period: "Oct 2019 - Nov 2022",
    project:
      "Project-1: In-house data and AI product, Fosfor Decision Cloud Refract Insight Designer",
    summary:
      "Managed large-scale DevOps delivery for banking and insurance workloads with strong reliability, container orchestration, and ML pipeline enablement.",
    highlights: [
      "Managed end-to-end DevOps processes for enterprise applications in regulated domains.",
      "Designed Kubernetes clusters on EKS and AKS for resilient, scalable deployments.",
      "Reduced incident response time by 30% through proactive monitoring and alerting automation.",
      "Supported predictive analytics and ML use cases including fraud detection, credit risk, and claims automation.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Tech Mahindra (Harjai Computer Pvt Ltd)",
    period: "May 2016 - Jul 2018",
    project: "Banking and telecom delivery programs",
    summary:
      "Focused on DevOps automation, software delivery acceleration, and release consistency across enterprise projects.",
    highlights: [
      "Developed and maintained software applications with a DevOps automation focus.",
      "Implemented CI/CD pipelines with Jenkins and Git, reducing time-to-market by 40%.",
      "Automated configuration management using Ansible for better consistency across environments.",
      "Supported banking and telecom projects with rapid release practices and deployment automation.",
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
                DevOps Expert | Cloud | AI-Native Infra | SRE | AIOps
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Nishi Kanta Das
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Proactive DevOps, cloud, and infrastructure architect with 8.6 years
                of experience building enterprise automation, AI-ready platforms,
                resilient SRE practices, and cloud-native delivery systems.
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
              <a
                href="https://nishi183.github.io/nishikanta-online-portfolio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                <ExternalLink className="h-4 w-4" />
                Portfolio URL
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/25 via-sky-400/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <img
                  src="/photo.jpeg"
                  alt="Portrait of Nishi Kanta Das"
                  className="h-full w-full object-cover"
                  loading="eager"
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
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Build scalable, secure, AI-enabled platforms
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Drive innovation and build scalable, reliable, and secure solutions
            by leveraging 8+ years of experience in DevOps, cloud, and
            infrastructure. My goal is to build next-generation AI-enabled
            platforms that deliver measurable business impact through automation,
            SRE, and cloud-native transformation.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
            Education
          </p>
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
        <div className="mb-8">
          <SplineSceneBasic />
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Core Competencies
          </p>
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
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Experience
            </p>
            <div className="mt-6 space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}-${item.project}`}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <p className="text-sm text-emerald-300">{item.company}</p>
                    </div>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm font-medium text-sky-300">
                    {item.project}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>- {highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              Certifications
            </p>
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
