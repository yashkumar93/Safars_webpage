"use client";

import { getServiceBySlug } from "@/lib/services-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

export default function PenetrationTestingPage() {
  const service = getServiceBySlug("penetration-testing");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
