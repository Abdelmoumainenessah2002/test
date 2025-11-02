// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],     // اللغات التي تريد دعمها
  defaultLocale: 'en',              // اللغة الافتراضية
  // يمكنك أيضاً تحديد الدومينات إذا تحتاج توزيع لغات عبر نطاقات مختلفة
});
