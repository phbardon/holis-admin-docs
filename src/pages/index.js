import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="HOLIS Documentation" description="Crise, synthèses, décisions">
      <main style={{ padding: '2rem' }}>
        <h1>Bienvenue sur la documentation HOLIS</h1>
        <p>
          Accédez à <a href="/holis-admin-docs/fiche-synthese">la fiche de synthèse</a>
        </p>
      </main>
    </Layout>
  );
}