'use client';

import { AuthGuard } from 'src/auth/guard';
import { SearchProvider } from 'src/context/SearchContext';
import Footer from 'src/layouts/common/footer-main';
import DashboardLayout from 'src/layouts/dashboard';

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
