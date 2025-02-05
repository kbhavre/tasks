import React from "react";

const Ques4 = () => {
  return (
    <div className="bg-fuchsia-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl px-4 py-2 text-center">
        Question 4 : Holy Grail
      </h1>


      <div className="flex flex-col min-h-screen border border-black mt-10">
      {/* Header */}
      <header className="h-16 bg-orange-600 text-white text-center flex items-center justify-center text-lg font-bold">
        Header
      </header>

      {/* Main Layout */}
      <main className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-24 bg-orange-400 p-4 flex items-center justify-center">
          Navigation
        </aside>

        {/* Center Content */}
        <section className="flex-1 bg-orange-300 p-4 flex items-center justify-center">
          Main Content
        </section>

        {/* Right Sidebar */}
        <aside className="w-24 bg-orange-400 p-4 flex items-center justify-center">
          Ads
        </aside>
      </main>

      {/* Footer */}
      <footer className="h-24 bg-gray-800 text-white text-center flex items-center justify-center text-lg">
        Footer
      </footer>
    </div>

    </div>
  );
};

export default Ques4;
