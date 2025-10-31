import config from './config/config';
import { createApp } from './server';

const app = createApp();

app.listen(config.port, () => {
  console.log(`🚀 Server läuft auf http://localhost:${config.port}`);
  console.log(`📊 Health check: http://localhost:${config.port}/health`);
});
