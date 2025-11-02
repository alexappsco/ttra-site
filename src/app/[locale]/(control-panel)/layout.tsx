'use client';

import { AuthGuard } from 'src/auth/guard';
import Footer from 'src/layouts/common/footer-main';
import DashboardLayout from 'src/layouts/dashboard';
import { SearchProvider } from 'src/context/SearchContext';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <SearchProvider>
      <DashboardLayout>
        {children}
        </DashboardLayout>
        </SearchProvider>
      <Footer />
    </AuthGuard>
  );
}
