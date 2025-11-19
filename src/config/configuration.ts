// Placeholder configuration helper; not wired to any module yet.
export const configuration = () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  app: {
    port: parseInt(process.env.PORT ?? '3000', 10),
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET ?? 'change-me',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  },
});
