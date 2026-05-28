import { LandingRoutePage, landingRouteMetadata } from "@/components/landing-route-page";

export const metadata = landingRouteMetadata("algemene-voorwaarden");

export default function Page() {
  return <LandingRoutePage slug="algemene-voorwaarden" />;
}
