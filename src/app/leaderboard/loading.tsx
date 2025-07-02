export default function Loading() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 animate-pulse">
            <div className="h-8 bg-gray-100 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-100 rounded w-2/4"></div>
          </div>
          <div className="border-t border-gray-100">
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 animate-pulse">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 animate-pulse"
              >
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