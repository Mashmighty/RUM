// faro-init.js
import { getWebInstrumentations, initializeFaro } from 'https://cdn.skypack.dev/@grafana/faro-web-sdk';
import { TracingInstrumentation } from 'https://cdn.skypack.dev/@grafana/faro-web-tracing';

initializeFaro({
  url: 'https://faro-collector-prod-me-central-1.grafana.net/collect/e89982377942596a78726ebf1dce9435',
  app: {
    name: 'parking charges',
    version: '1.0.0',
    environment: 'production'
  },
  instrumentations: [
    ...getWebInstrumentations(),
    new TracingInstrumentation(),
  ],
});
