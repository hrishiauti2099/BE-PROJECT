import * as bcrypt from 'bcrypt';

export async function hash(data: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(data, salt);
}

export async function compare(data: string, hash: string) {
  return bcrypt.compare(data, hash);
}
