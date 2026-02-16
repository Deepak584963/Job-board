import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JobBoard — Find Your Next Opportunity",
    short_name: "JobBoard",
    description: "Browse the latest job openings in frontend, remote, and fresher categories. Find your next career opportunity on JobBoard.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
