import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  jtwSecret: process.env.JWT_SECRET,
  roundsOfHashing: parseInt(process.env.JWT_ROUND_HASHING, 10) || 5432,
}));
