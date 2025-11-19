// Placeholder configuration helper; not wired to any module yet.
export const configuration = () => ({
  app: {
    port: parseInt(process.env.PORT ?? '3000', 10),
  },
});
