import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: [],
  reactStrictMode: true,
  reactCompiler: true,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
