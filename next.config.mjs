// Static-generation workers capped at 1: the build machine frequently has
// little free RAM (many concurrent processes), and the default 7 workers
// trigger OOM crashes during "Collecting page data".
const nextConfig = {
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
