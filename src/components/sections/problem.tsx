import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Timer, ShieldCheck } from "lucide-react";

const problems = [
  {
    title: "Manual Work Overload",
    description:
      "Builders rely on paperwork, calls, and spreadsheets to track projects — leading to miscommunication and errors on site.",
    icon: Wrench,
  },
  {
    title: "Delays & Inefficiencies",
    description:
      "Without real-time updates and automation, teams miss deadlines, and coordination across departments breaks down.",
    icon: Timer,
  },
  {
    title: "Lack of Control & Visibility",
    description:
      "From site access to finance tracking, traditional methods don’t give you the control or visibility you need to scale confidently.",
    icon: ShieldCheck,
  },
];

export default function ProblemSection() {
  return (
    <Section
      title="The Problem"
      subtitle="Builders today face more than just physical challenges — digital ones too."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
