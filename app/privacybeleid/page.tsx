import { LandingRoutePage, landingRouteMetadata } from "@/components/landing-route-page";

export const metadata = landingRouteMetadata("privacybeleid");

export default function Page() {
  return <LandingRoutePage slug="privacybeleid" />;
}
