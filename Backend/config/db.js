import { connect } from 'mongoose';

export default async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI not set in environment');

  await connect(uri);

  console.log('MongoDB connected');
};