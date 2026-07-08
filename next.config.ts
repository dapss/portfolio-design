import type { NextConfig } from "next";

// For GitHub Pages project site (e.g. https://<user>.github.io/<repo>/):
// Set the repo name as the path. If this is a user site (<user>.github.io),
// remove basePath and assetPrefix entirely.
const repoName = "portfolio-design";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
