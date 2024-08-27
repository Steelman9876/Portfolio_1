
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-muted/20 px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Header content */}
      </header>
      <main className="flex-1 pt-16">
        {children}
      </main>
      <footer className="bg-background/80 backdrop-blur-sm border-t border-muted/20 px-4 py-6 md:px-6">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
