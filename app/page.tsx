export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1113] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0F1113]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-[#D1FE17]">Prompt</span>Lab
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['Explore', 'Image', 'Video', 'Character', 'Moodboard', 'Cinema Studio', 'Apps'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-[#D1FE17] transition-colors text-sm">
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-[#D1FE17] text-[#131517] px-5 py-2 rounded-xl font-semibold text-sm hover:shadow-[0_0_20px_rgba(209,254,23,0.4)] transition-all">
            Generate Prompt
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Engineer <span className="text-[#D1FE17]">Cinematic</span> AI Prompts
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Generate high-performance prompts for images and videos with precision control
          </p>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Describe your idea..."
              className="flex-1 bg-[#1A1C1F] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D1FE17] transition-colors"
            />
            <button className="bg-[#D1FE17] text-[#131517] px-6 py-4 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(209,254,23,0.4)] transition-all">
              Generate
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-white text-[#131517] px-5 py-3 rounded-xl font-medium text-sm">
              Generate Prompt
            </button>
            <button className="border border-white/20 text-white px-5 py-3 rounded-xl font-medium text-sm hover:border-[#D1FE17] transition-colors">
              Explore Presets
            </button>
          </div>
        </div>
        <div className="bg-[#1A1C1F] rounded-2xl aspect-video flex items-center justify-center border border-white/10">
          <span className="text-gray-600">Media Placeholder</span>
        </div>
      </section>

      {/* Presets Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">What do you want to create?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Cyberpunk Scene', 'Hollywood Portrait', 'Luxury Product Shot', 'Drone Landscape'].map((preset) => (
            <div key={preset} className="bg-[#1A1C1F] rounded-xl p-6 border border-white/10 hover:border-[#D1FE17] hover:shadow-[0_0_20px_rgba(209,254,23,0.2)] cursor-pointer transition-all">
              <div className="aspect-video bg-[#0F1113] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Preview</span>
              </div>
              <h3 className="font-semibold">{preset}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4"><span className="text-[#D1FE17]">Prompt</span>Lab</div>
              <p className="text-gray-500 text-sm">Engineer cinematic AI prompts with precision control.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'API'] },
              { title: 'Resources', links: ['Documentation', 'Tutorials', 'Blog'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="hover:text-[#D1FE17] transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 PromptLab. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
