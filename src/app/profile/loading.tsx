export default function Loading() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden sm:rounded-lg animate-pulse">
          <div className="px-4 py-5 sm:px-6">
            <div className="h-8 bg-gray-100 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-100 rounded w-2/4"></div>
          </div>
          <div className="border-t border-gray-100">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="h-4 bg-gray-100 rounded w-1/3"></div>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 bg-white border border-gray-100 shadow-sm overflow-hidden sm:rounded-lg animate-pulse">
          <div className="px-4 py-5 sm:px-6">
            <div className="h-6 bg-gray-100 rounded w-1/4"></div>
          </div>
          <div className="border-t border-gray-100">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 