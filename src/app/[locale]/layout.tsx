
import 'src/global.css';
import { notFound } from 'next/navigation';
import { routing } from 'src/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import ProgressBar from 'src/components/progress-bar';
import { getMessages, getTranslations } from 'next-intl/server';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { LocaleType, localesSettings } from 'src/i18n/config-locale';
import LocalizationProvider from 'src/components/localization-provider';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';

export default async function RootLayout({
  children,
  params,
}: {
  params: Promise<{ locale: string }>
  children: React.ReactNode;
}) {
  const {locale} = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LocaleType)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();
  const { dir } = localesSettings[locale];
  return (
    <main lang={locale} dir={dir} style={{ minHeight: '100vh' }}>
      <NextIntlClientProvider messages={messages}>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'light',
            themeDirection: dir,
            themeContrast: 'default',
            themeLayout: 'vertical',
            themeColorPresets: 'default',
            themeStretch: false,
          }}
        >
            <LocalizationProvider>
              <MotionLazy>
                  <SettingsDrawer />
                  <ProgressBar />
                  {children}
              </MotionLazy>
            </LocalizationProvider>
        </SettingsProvider>
      </NextIntlClientProvider>
    </main>
  );
}

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
