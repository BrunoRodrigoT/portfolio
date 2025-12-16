import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Bruno Rodrigo",
  description:
    "Learn more about Bruno Rodrigo - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Bruno Rodrigo",
    "About Bruno",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Bruno Rodrigo",
    description:
      "Discover the story and journey of Bruno Rodrigo in the world of web development.",
    url: "https://brunorodrigot.com.br/about",
    siteName: "Bruno Rodrigo",
    type: "website",
    locale: "en_US",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
