import React from 'react';

const DoctorLogin = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/api/placeholder/1920/1080')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative">
        {/* Logo */}
        <div className="absolute -top-12 left-4">
          <div className="flex items-center gap-2">
            <img 
              src="/api/placeholder/40/40" 
              alt="Medico Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-blue-600">Medico</span>
          </div>
        </div>

        {/* Login Form */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Doctor Login</h2>
          
          <form className="space-y-6">
            <div>
              <label 
                htmlFor="username" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;