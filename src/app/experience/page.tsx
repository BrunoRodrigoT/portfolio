import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Bruno Rodrigo",
  description:
    "Explore the professional journey of Bruno Rodrigo - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Bruno Rodrigo",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://brunorodrigo.id.vn/experience",
    siteName: "Bruno Rodrigo",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
