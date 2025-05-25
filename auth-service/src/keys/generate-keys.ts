import * as fs from 'fs';
import * as path from 'path';
import { generateKeyPairSync } from 'crypto';

export function generateRSAKeyPair(): void {
  const keysDir = path.join(__dirname);

  // Ensure keys directory exists
  if (!fs.existsSync(keysDir)) {
    fs.mkdirSync(keysDir, { recursive: true });
  }

  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  // Write keys to files
  const privateKeyPath = path.join(keysDir, 'private.pem');
  const publicKeyPath = path.join(keysDir, 'public.pem');

  fs.writeFileSync(privateKeyPath, privateKey);
  fs.writeFileSync(publicKeyPath, publicKey);

  console.log('✅ RSA key pair generated successfully!');
  console.log(`Private key: ${privateKeyPath}`);
  console.log(`Public key: ${publicKeyPath}`);
}

// Run if called directly
if (require.main === module) {
  generateRSAKeyPair();
}
