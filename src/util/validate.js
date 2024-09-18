import Joi from 'joi';

export const formSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  desc: Joi.string().required().min(10).max(250),
});
