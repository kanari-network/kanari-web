interface InvestorCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ icon, title, description }) => {
    return (
        <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 
                  dark:border-gray-700/50 rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                  duration-300 group relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-start space-y-6">
                {/* Icon container */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 
                      dark:to-purple-700 p-3 rounded-2xl shadow-lg mx-auto mb-6 w-fit transform 
                      hover:rotate-6 transition-transform">
                    {icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 
                        to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 
                        bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                    dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400/20 
                    to-pink-400/20 dark:from-orange-600/20 dark:to-pink-600/20 blur-2xl rounded-full 
                    group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></div>
        </div>
    );
};