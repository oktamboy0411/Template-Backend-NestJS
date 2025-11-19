import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),
  PORT: Joi.number().port().default(3000),

  // Database examples (uncomment what you use)
  // DATABASE_URL: Joi.string().uri().optional(),

  // Auth examples
  JWT_SECRET: Joi.string().min(16).required(),
  JWT_EXPIRES_IN: Joi.alternatives()
    .try(Joi.string(), Joi.number())
    .default('1d'),
});
