"use client";

import { getServiceBySlug } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

export default function ResearchDevelopmentPage() {
  const service = getServiceBySlug("research-development");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
