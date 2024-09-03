import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Theme from "../common/views/theme/theme";
import styles from './layout.module.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            <div className={styles.layout}>
              {children}
            </div>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
