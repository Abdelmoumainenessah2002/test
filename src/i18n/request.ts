// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

// __define-ocg__
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale || 'en';

  const localePath = path.join(process.cwd(), 'messages', locale);
  const files = fs.readdirSync(localePath);

  const varOcg: Record<string, any> = {};

  // Dynamically import and merge all JSONs
  for (const file of files) {
    if (file.endsWith('.json')) {
      const namespace = path.basename(file, '.json');
      const content = (await import(`../../messages/${locale}/${file}`)).default;
      varOcg[namespace] = content; // keep namespace
    }
  }

  return {
    locale,
    messages: varOcg
  };
});