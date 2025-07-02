export default function Loading() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-pulse">
          <div className="h-8 bg-gray-100 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-100 rounded w-2/3 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 animate-pulse">
              <div className="h-6 bg-gray-100 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-100 rounded w-2/3"></div>
              <div className="mt-4">
                <div className="h-10 bg-gray-100 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 