// Dashboard.jsx
import { useEffect, useState } from 'react';

export default function Dashboard() {
  // Optional: simple loading/fade-in effect
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 p-6 md:p-10 transition-colors duration-300">
      {/* Header */}
      <header className="mb-10">
        <h1
          className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent 
          transform transition-all duration-700 ease-out
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        >
          Dashboard
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Welcome back! Only logged-in users can access this modern analytics overview.
        </p>
      </header>

      {/* Stats Grid - modern cards with hover animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Total Revenue", value: "$48,325", change: "+12.5%", icon: "💰" },
          { title: "New Users", value: "2,340", change: "+8.2%", icon: "👥" },
          { title: "Active Sessions", value: "1,892", change: "-3.1%", icon: "⚡" },
          { title: "Conversion Rate", value: "4.8%", change: "+1.4%", icon: "📈" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`
              group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/50 
              backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 
              shadow-lg hover:shadow-2xl p-6 transition-all duration-300 ease-out
              hover:-translate-y-2 hover:scale-[1.02]
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span
                  className={`text-sm font-medium px-2.5 py-1 rounded-full ${
                    stat.change.startsWith('+')
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{stat.value}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary section - example content cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`
            rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 
            p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is a placeholder for your recent user actions, sales, logs, etc.
          </p>
          {/* You can add charts, lists, etc. here */}
        </div>

        <div
          className={`
            rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 
            p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Add graphs, progress bars, or mini-widgets here.
          </p>
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your App • Modern Dashboard
      </footer>
    </div>
  );
}