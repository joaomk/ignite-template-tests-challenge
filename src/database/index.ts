import { Connection, createConnection, getConnectionOptions } from 'typeorm';

(async () => await createConnection())();
export default async (host = 'database-pg'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
      database:
        process.env.NODE_ENV === 'test'
          ? 'fin_api'
          : defaultOptions.database,
    }),
  );
};
