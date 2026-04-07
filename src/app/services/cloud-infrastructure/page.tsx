"use client";

import { getServiceBySlug } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

export default function CloudInfrastructurePage() {
  const service = getServiceBySlug("cloud-infrastructure");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
