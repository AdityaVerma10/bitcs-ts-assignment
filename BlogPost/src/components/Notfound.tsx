const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          404 Not Found
        </h1>
        <p className="text-lg text-center text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
