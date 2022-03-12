import { Footer } from "../Footer";
import { Head } from "../Head";

function Layout({ children }: any) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Head />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export { Layout };
