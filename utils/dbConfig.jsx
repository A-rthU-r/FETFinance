import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon('postgresql://Expenses-Tracker_owner:dK1Hr8sUVDzB@ep-lingering-night-a5ek595y.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require');
const db = drizzle(sql,{schema});