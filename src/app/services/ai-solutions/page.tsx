"use client";

import { getServiceBySlug } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

export default function AISolutionsPage() {
  const service = getServiceBySlug("ai-solutions");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
