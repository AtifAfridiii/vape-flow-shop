import { MessageCircle } from 'lucide-react';

const ChatIcon = () => {
  return (
    <div className="fixed bottom-12 right-6 z-50">
      <div className="relative group mb-4 flex items-center justify-center">

        <button className="bg-blue-600 hover:bg-green-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <MessageCircle size={24} />
        </button>


        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-xs rounded py-1 px-2 whitespace-nowrap pointer-events-none">
          Chat with
        </div>
      </div>
    </div>
  );
};

export default ChatIcon;