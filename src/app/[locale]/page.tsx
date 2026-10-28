import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { constructMetadata } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { EditorialBreak } from "@/components/editorial-break";
import { StudioSection } from "@/components/studio-section";
import { ApproachSection } from "@/components/approach-section";
import { JournalSection } from "@/components/journal-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  return constructMetadata({
    locale: locale as Locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main>
      <Navigation content={dict.navigation} locale={locale as Locale} />
      <Hero content={dict.hero} />
      <ProjectsSection content={dict.projectsSection} />
      <EditorialBreak content={dict.editorialBreak} />
      <StudioSection content={dict.studioSection} />
      <ApproachSection content={dict.approachSection} />
      <JournalSection content={dict.journalSection} />
      <ContactSection content={dict.contactSection} />
      <Footer content={dict.footer} />
    </main>
  );
}
