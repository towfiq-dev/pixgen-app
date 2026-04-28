import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center">
        {/* 404 Visual */}
        <div className="relative">
          <h1 className="text-9xl font-black text-base-300 select-none">
            404
          </h1>
          <p className="text-2xl font-bold tracking-tight text-base-content sm:text-4xl absolute inset-0 flex items-center justify-center mt-8">
            Uh-oh!
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-base-content/80">
            Page Not Found
          </h2>
          <p className="mt-4 text-base-content/60 max-w-sm mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="btn btn-primary px-8 shadow-lg hover:shadow-primary/30 transition-all"
          >
            Go Back Home
          </Link>
          
          <Link 
            href="/contact" 
            className="btn btn-outline btn-secondary"
          >
            Contact Support
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 opacity-20">
          <code className="text-xs">
            Error_Code: ERR_PAGE_NOT_FOUND_404
          </code>
        </div>
      </div>
    </div>
  );
}