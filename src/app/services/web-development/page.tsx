"use client";

import { getServiceBySlug } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

export default function WebDevelopmentPage() {
  const service = getServiceBySlug("web-development");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
